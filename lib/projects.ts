'use server';

import fs from 'fs';
import path from 'path';

export type Photo = {
  src: string;
  title?: string;
  description?: string;
  span?: 'both' | 'row' | 'col' | 'normal';
  alt?: string;
  width?: number;
  height?: number;
}

export type Project = {
  id: string;
  title: string;
  year: string;
  coverImage: string;
  description: string;
  photos: Photo[];
}

export type Category = {
  id: string;
  title: string;
  description: string;
}

export async function getCategoryById(categoryId: string): Promise<Category | null> {
  try {
    const categoryPath = path.join(process.cwd(), `data/${categoryId}/index.json`);
    const categoryData = JSON.parse(fs.readFileSync(categoryPath, 'utf8'));
    return categoryData;
  } catch (error) {
    console.error(`Error loading category ${categoryId}:`, error);
    return null;
  }
}

export async function getProjectById(categoryId: string, projectId: string): Promise<Project | null> {
  try {
    const projectPath = path.join(process.cwd(), `data/${categoryId}/${projectId}.json`);
    const projectData = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
    return projectData;
  } catch (error) {
    console.error(`Error loading project ${projectId} from category ${categoryId}:`, error);
    return null;
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const categoriesPath = path.join(process.cwd(), 'data/categories.json');
    const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
    return categoriesData;
  } catch (error) {
    console.error('Error loading categories:', error);
    return [];
  }
} 