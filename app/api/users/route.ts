import { getTodos } from "@/services/todoService";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res:NextResponse) {
    const result = await within(getTodos, res, 7000)
    console.log('ailab result: ', JSON.stringify( result))
    return new Response('get result: ' + JSON.stringify( result))
}

async function within(fn:any, res:NextResponse, duration:any) {
    const id = setTimeout(async () => {
        message: "There was an error with the upstream service!"
    }, duration);
    try {
        let data = await fn()
        clearTimeout(id)
        return {data}
    } catch (e) {
        return({e})
    }
    
}