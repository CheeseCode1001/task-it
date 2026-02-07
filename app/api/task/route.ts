import { NextResponse } from "next/server";
import * as repo from "@/repositories/task.repository"

export async function GET() {
    return NextResponse.json(await repo.getTasks())
}

export async function POST(req: Request) {
  const body = await req.json();

  const {
    title,
    description,
    status,
    category_id
  } = body;

  // 🔒 Validation (important)
  if (!title || !description || !status) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  await repo.createTask(
    title,
    description,
    status,
    category_id ?? null
  );

  return NextResponse.json(
    { message: "Task created successfully" },
    { status: 200 }
  );
}
