import pool from "@/lib/db";
import { Category } from "@/types/category";


// Get single category by id
export const getCategoryById = async (id: number): Promise<Category | null> => {
    const [rows] = await pool.query<Category[]>(
        "SELECT * FROM categories WHERE id = ?",
        [id]
    );
    return rows[0] || null;
}

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
    const [rows] = await pool.query<Category[]>(
        "SELECT * FROM categories ORDER BY name"
    );
    return rows;
};

// Create new category
export const createCategory = async (name:string, description:string) =>{
  const [result] =  await pool.query(
        "INSERT INTO categories (name, description) VALUES (?,?)", 
        [name, description]);
         return result;
}

// Update categories
export const updateCategory = async (id:number, name:string, description:string) =>{
 await pool.query(
    "UPDATE categories SET name=?, description=? WHERE id=?",
     [name, description, id]);
 return getCategoryById(id);
};

//Delete categories
export const deleteCategory = async (id:number) =>{
     await pool.query("DELETE FROM categories WHERE id=?", [id]);
        return getCategoryById(id);
};