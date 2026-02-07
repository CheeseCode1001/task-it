import { NextResponse } from "next/server";
import * as repo from "@/repositories/category.repository"

// Get all categories
export async function GET() {
    return NextResponse.json(await repo.getCategories())
}

// Create new category
export async function POST(req:Request){
    const {name, description} = await req.json();
    await repo.createCategory(name, description);
    return NextResponse.json({message: "Category created successfully"},{ status: 200 })
}