import { getTodos } from "@/services/todoService";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res:NextResponse) {
    const result = await within(getTodos, res, 7000)
    console.log('ailab result: ', JSON.stringify( result))
    // return new Response(JSON.stringify( result))
    // await within(getTodos, res, 7000)
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

// async function within(fn:any, res:NextResponse, duration:any) {
//     const id = setTimeout(() => res.json({
//         message: "There was an error with the upstream service!"
//     }), duration)

//     try {
//         let data:any = await fn()
//         clearTimeout(id)
//         res.json(data)
//     } catch (e) {
//         // res.status(500).json({ message: e.message })
//     }
// }

// async function getUsers() {
//     return (await db.getUsers())
// }