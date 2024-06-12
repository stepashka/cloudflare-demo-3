import { Client } from '@neondatabase/serverless';

export async function onRequestGet(context) {
  return new Response(context.env.DATABASE_URL ? JSON.stringify(context.env.DATABASE_URL) : "no val")
  const client = new Client(context.env.DATABASE_URL);
  await client.connect();
  // Logic to fetch books from your database
  const { rows } = await client.query('SELECT * FROM books_to_read;');
  return new Response(JSON.stringify(rows));
}
