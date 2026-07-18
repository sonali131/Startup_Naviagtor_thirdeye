import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Ensure this is in .env.local
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Supabase mein data insert karna
    const { error } = await supabaseAdmin
      .from('contact_messages') 
      .insert([body]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}