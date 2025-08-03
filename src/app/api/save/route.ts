import { NextResponse } from 'next/server'
import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export async function POST(req: Request) {
  const { abc, title } = await req.json()
  await sql`
    INSERT INTO scores (user_id, title, abc)
    VALUES ('guest', ${title || '無題'}, ${abc})
  `
  return NextResponse.json({ ok: true })
}
