import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM customer_reviews ORDER BY created_at DESC'
    )
    return NextResponse.json({ reviews: result.rows })
  } catch (error) {
    console.error('Reviews GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - Please login to submit a review' }, { status: 401 })
    }

    const user = verifyToken(token)
    const body = await request.json()
    const { rating, message } = body

    if (!rating || !message) {
      return NextResponse.json(
        { error: 'Rating and message are required' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const name = user.name

    const result = await query(
      'INSERT INTO customer_reviews (name, rating, message) VALUES ($1, $2, $3) RETURNING *',
      [name, rating, message]
    )

    return NextResponse.json({ 
      message: 'Review added successfully', 
      review: result.rows[0] 
    }, { status: 201 })
  } catch (error) {
    console.error('Reviews POST error:', error)
    return NextResponse.json({ error: 'Failed to add review' }, { status: 500 })
  }
}
