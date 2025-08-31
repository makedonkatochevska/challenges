"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function BlogFilter({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const activeCategory = searchParams.get("category");
  console.log("Active Category:", activeCategory);

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get("category") === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/blog?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set("q", encodeURIComponent(search));
    } else {
      params.delete("q");
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div className="side-menu">
        <form className="bor17 of-hidden pos-relative" onSubmit={handleSearch}>
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
        </form>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

          <ul>
            {categories.map((category) => (
              <li className="bor18" key={category}>
                <button
                  type="button"
                  className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 capitalize-first ${
                    activeCategory === category ? "filter-link-active" : ""
                  } `}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
