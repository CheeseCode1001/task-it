import { NextResponse } from "next/server";
import * as repo from "@/repositories/category.repository"

// Get Single Categories
export async function GET(req:Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "Category ID is required" }, { status: 400 });
    }
    const category = await repo.getCategoryById(Number(id));
    if (!category) {
        return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }
    return NextResponse.json(category, { status: 200 });
}

// Update categories
export async function PUT(req:Request){ 
    const {id, name, description} = await req.json();
    await repo.updateCategory(id, name, description);
    return NextResponse.json({message: "Category updated successfully"},{ status: 200 })
}

//Delete categories
export async function DELETE(req:Request){
    const {id} = await req.json();
    await repo.deleteCategory(id);
    return NextResponse.json({message: "Category deleted successfully"},{ status: 200 })
}