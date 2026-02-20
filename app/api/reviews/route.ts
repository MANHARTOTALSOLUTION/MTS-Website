import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

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
    const body = await request.json()
    const { name, rating, message } = body

    if (!name || !rating || !message) {
      return NextResponse.json(
        { error: 'Name, rating and message are required' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

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
