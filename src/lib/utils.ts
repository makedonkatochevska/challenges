import { ENDPOINTS } from "./endpoints";
import { BlogType } from "./types";

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const getRandomNumber = async (maxLength: number): Promise<number> => {
  const maxStart = Math.max(0, maxLength - 4);
  return Math.floor(Math.random() * maxStart);
};

export const getCategories = async (): Promise<string[]> => {
  const blogs = await getData<BlogType[]>(ENDPOINTS.BLOGS);
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));
  return categories;
};
