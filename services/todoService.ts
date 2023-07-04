// import prisma from '@/lib/prisma'
import { PrismaClient } from '@prisma/client'

export async function getTodos() {
    try {
        prisma = new PrismaClient()
        const todos = await prisma.todo.findMany()
        return {todos}
    } catch (error) {
        return({error})
    }
}

// export async function createTodo(title:string){
//     try{
//         const todo = await prisma.todo.create({data:{title}})
//         return {todo}
//     }
//     catch(error){
//         return({error})
//     }
// }

// export async function updateTodo(id: string, isCompleted:boolean) {
//     try {
//         const todo = await prisma.todo.update({where: {id},data:{isCompleted}})
//         return {todo}
//     } catch (error) {
//         return({error})
//     }
    
// }