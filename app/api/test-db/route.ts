import { NextResponse } from 'next/server'
import { testConnection, query } from '@/lib/db'

export async function GET() {
  console.log('🧪 Test API: Starting database connection test...')
  
  const connectionTest = await testConnection()
  
  if (!connectionTest.success) {
    console.error('❌ Test API: Database connection failed')
    return NextResponse.json(
      { 
        success: false, 
        error: connectionTest.error,
        message: 'Failed to connect to database',
        hint: 'Check your DATABASE_URL in .env file'
      },
      { status: 500 }
    )
  }

  let tablesExist = false
  let tableInfo: any = {}

  try {
    const tablesResult = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `)
    
    tablesExist = tablesResult.rows.length > 0
    tableInfo = {
      count: tablesResult.rows.length,
      tables: tablesResult.rows.map((r: any) => r.table_name)
    }
    
    console.log('✅ Test API: Tables found:', tableInfo.count)
  } catch (err: any) {
    console.log('⚠️  Test API: Could not fetch table info (tables may not exist yet)')
    tableInfo = { error: err.message }
  }

  return NextResponse.json({
    success: true,
    message: 'Database connected successfully!',
    serverTime: connectionTest.time,
    postgresqlVersion: connectionTest.version?.substring(0, 30),
    tables: tableInfo,
    hint: tablesExist ? 'Database is ready to use!' : 'Run database.sql to create tables'
  })
}
