import { Client } from '@neondatabase/serverless';

export async function onRequestGet(context) {
  return new Response(context.env.DATABASE_URL);
}
