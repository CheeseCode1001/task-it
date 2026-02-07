import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    const [rows] = await pool.query(`
        SELECT
        COUNT(*) as total,
        SUM(status='pending') as pending,
        SUM(status='in_progress') as in_progress,
        SUM(status='completed') as completed
        FROM tasks`);
    return NextResponse.json(rows);
} 