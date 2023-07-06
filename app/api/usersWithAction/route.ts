import { getTodos } from "@/services/todoService";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res:NextResponse) {
    const result = await getTodos()
    console.log('ailab result: ', JSON.stringify( result))
    return new Response('get result: ' + JSON.stringify( result))
}
