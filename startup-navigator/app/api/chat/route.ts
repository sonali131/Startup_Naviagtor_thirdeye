// import { GoogleGenerativeAI } from "@google/generative-ai";

// import { NextResponse } from "next/server";

// const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;

// // Dev helper: quick health check for the API key (DO NOT expose in production)
// export async function GET() {
//   // Mask key for safety
//   const masked = apiKey ? `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}` : null;

//   // Simple heuristic check for common API key format
//   const looksLikeApiKey = typeof apiKey === "string" && (apiKey.startsWith("AIza") || apiKey.length > 20);

//   return NextResponse.json({ hasKey: !!apiKey, keyHint: masked, looksLikeApiKey });
// }

// export async function POST(req: Request) {
//   if (!apiKey) {
//     return NextResponse.json(
//       { error: "Missing Google Gemini API key. Set GEMINI_API_KEY or GOOGLE_API_KEY in your environment." },
//       { status: 500 }
//     );
//   }

//   const { prompt } = await req.json();
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

//   try {
//     const result = await model.generateContent(`
//       You are 'Startup Navigator AI'. Help the user with: ${prompt}. 
//       Focus on Indian startup ecosystem, legalities, and funding.
//     `);

//     return NextResponse.json({ text: result.response.text() });
//   } catch (err: unknown) {
//     // Log server-side for debugging
//     console.error('Generative API error:', err instanceof Error ? err.message : err);

//     // Normalize message and details from unknown error
//     let message: string;
//     let details: unknown = null;
//     let statusCode = 500;

//     if (err instanceof Error) {
//       message = err.message;
//       // Try to pull additional info if available on the error object
//       const maybe = err as unknown as Record<string, unknown>;
//       details = maybe.errorDetails ?? maybe.response ?? null;
//       if (typeof maybe.status === 'number') statusCode = maybe.status;
//     } else if (typeof err === 'object' && err !== null) {
//       const maybe = err as Record<string, unknown>;
//       message = (maybe.message && typeof maybe.message === 'string') ? maybe.message : JSON.stringify(maybe);
//       details = maybe.errorDetails ?? maybe.response ?? null;
//       if (typeof maybe.status === 'number') statusCode = maybe.status;
//     } else {
//       message = String(err);
//     }

//     return NextResponse.json(
//       { error: message, details },
//       { status: statusCode }
//     );
//   }
// }
import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are Startup Navigator AI. Help users with Indian startup registration, funding, MSME, DPIIT, taxation, and business growth.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({
      text: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "unkown error",
      },
      { status: 500 }
    );
  }
}