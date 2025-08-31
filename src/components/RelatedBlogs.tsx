"use client";

import { ENDPOINTS } from "@/lib/endpoints";
import { BlogType } from "@/lib/types";
import { getData, getRandomNumber } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelatedBlogs: React.FC = () => {
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomBlogs = async () => {
      const blogs = await getData<BlogType[]>(ENDPOINTS.BLOGS);
      try {
        const randomStart = await getRandomNumber(blogs.length);
        const randomBlogs = await getData<BlogType[]>(
          `${ENDPOINTS.BLOGS}?_start=${randomStart}&_limit=3`
        );

        setRelatedBlogs(randomBlogs);
      } catch (error) {
        console.error("Error fetching random products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomBlogs();
  }, []);

  if (loading) {
    return <div>Loading related blogs...</div>;
  }

  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((blog) => (
          <li className="mb-4" key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="wrao-pic-w">
              <img src={blog.img} alt="PRODUCT" className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {blog.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
