import { NextResponse } from "next/server";
import * as repo from "@/repositories/task.repository"

export async function PUT(req:Request){ 
    const {id, title, description, status, category_id} = await req.json();
    await repo.updateTask(id, title, description, status, category_id);
    return NextResponse.json({message: "Task updated successfully"},{ status: 200 })
}

export async function DELETE(req:Request){
    const {id} = await req.json();
    await repo.deleteTask(id);
    return NextResponse.json({message: "Task deleted successfully"},{ status: 200 })
}

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");  
    if (!id) {
        return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
    }
    const task = await repo.getTaskById(Number(id));
    if (!task) {    
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }   
    return NextResponse.json(task, { status: 200 });
}