import { NextRequest } from "next/server";

// export const config = {
//     runtime: 'edge',
//   }

export async function GET(req:NextRequest) {
  
  return new Response('Hello world!')
  }
  