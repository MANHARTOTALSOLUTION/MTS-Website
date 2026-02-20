import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { hashPassword, comparePassword, generateToken, verifyToken, UserPayload } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, name, email, password } = body

    if (action === 'register') {
      if (!name || !email || !password) {
        return NextResponse.json(
          { error: 'Name, email and password are required' },
          { status: 400 }
        )
      }

      const existingUser = await query('SELECT id FROM users WHERE email = $1', [email])
      if (existingUser.rows.length > 0) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 400 }
        )
      }

      const hashedPassword = await hashPassword(password)
      const result = await query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, role',
        [name, email, hashedPassword]
      )

      const user = result.rows[0]
      const token = generateToken({ id: user.id, email: user.email, name: user.name, role: user.role })

      const response = NextResponse.json(
        { message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email, role: user.role } },
        { status: 201 }
      )

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })

      return response
    }

    if (action === 'login') {
      if (!email || !password) {
        return NextResponse.json(
          { error: 'Email and password are required' },
          { status: 400 }
        )
      }

      const result = await query('SELECT * FROM users WHERE email = $1', [email])
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        )
      }

      const user = result.rows[0]
      const isValid = await comparePassword(password, user.password)
      if (!isValid) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        )
      }

      const token = generateToken({ id: user.id, email: user.email, name: user.name, role: user.role })

      const response = NextResponse.json(
        { message: 'Login successful', user: { id: user.id, name: user.name, email: user.email, role: user.role } }
      )

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })

      return response
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value
    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 })
    }

    const user = verifyToken(token) as UserPayload
    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ user: null }, { status: 200 })
  }
}
