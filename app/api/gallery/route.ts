import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { verifyToken } from '@/lib/auth'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const result = await query(
      'SELECT gi.id, gi.image_url, gi.uploaded_at, u.name as uploaded_by_name FROM gallery_images gi LEFT JOIN users u ON gi.uploaded_by = u.id ORDER BY gi.uploaded_at DESC'
    )
    return NextResponse.json({ images: result.rows })
  } catch (error) {
    console.error('Gallery GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = verifyToken(token)
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only JPG, PNG and WebP are allowed' }, { status: 400 })
    }

    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large. Maximum size is 5MB' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`
    const filepath = join(uploadDir, filename)

    await writeFile(filepath, buffer)

    const imageUrl = `/uploads/${filename}`
    const result = await query(
      'INSERT INTO gallery_images (image_url, uploaded_by) VALUES ($1, $2) RETURNING *',
      [imageUrl, user.id]
    )

    return NextResponse.json({ 
      message: 'Image uploaded successfully', 
      image: result.rows[0] 
    }, { status: 201 })
  } catch (error) {
    console.error('Gallery POST error:', error)
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 })
  }
}
