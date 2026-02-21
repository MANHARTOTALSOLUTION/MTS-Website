import { Pool } from 'pg'

console.log('📦 Database: Initializing connection pool...')

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
})

pool.on('connect', () => {
  console.log('✅ Database: New client connected to PostgreSQL')
})

pool.on('error', (err) => {
  console.error('❌ Database: Unexpected error on idle client', (err as Error).message)
})

pool.on('remove', () => {
  console.log('🔌 Database: Client disconnected')
})

export const query = async (text: string, params?: any[]) => {
  console.log('📝 Database: Executing query:', text.substring(0, 50) + '...')
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log(`✅ Database: Query executed in ${duration}ms, returned ${res.rowCount} rows`)
    return res
  } catch (error) {
    console.error('❌ Database: Query error:', (error as Error).message)
    throw error
  }
}

export const getClient = async () => {
  console.log('🔗 Database: Getting client from pool...')
  const client = await pool.connect()
  return client
}

export const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version() as pg_version')
    console.log('✅ Database: Connection successful!')
    console.log('   Server Time:', result.rows[0].current_time)
    console.log('   PostgreSQL Version:', result.rows[0].pg_version.substring(0, 30))
    return { success: true, time: result.rows[0].current_time, version: result.rows[0].pg_version }
  } catch (error: any) {
    console.error('❌ Database: Connection failed!')
    console.error('   Error:', error.message)
    return { success: false, error: error.message }
  }
}

export default pool
