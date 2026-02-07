import { RowDataPacket } from "mysql2";

export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export interface Task extends RowDataPacket {
    id: number;
    title: string;
    description: string | null;
    status: TaskStatus;
    category_id: number | null;
    category_name?: string;
    created_at: string;
}