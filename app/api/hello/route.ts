import cors from "@/lib/cors";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
  return cors(
    req,
    new Response(JSON.stringify({ message: 'Hello World!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  )
  }
  