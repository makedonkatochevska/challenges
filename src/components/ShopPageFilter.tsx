"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ShopPageFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const genderActive = searchParams.get("gender_like");
  const categoryActive = searchParams.get("q");

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filter === "man" || filter === "women") {
      if (params.get("gender_like") === filter) {
        params.delete("gender_like");
      } else {
        params.set("gender_like", filter);
      }
    } else if (filter === "all") {
      params.delete("gender_like");
      params.delete("q");
    } else {
      if (params.get("q") === filter) {
        params.delete("q");
      } else {
        params.set("q", filter);
      }
    }

    router.push(`/shop?${params.toString()}`);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    router.push(`/shop?${params.toString()}`);
  };

  useEffect(() => {
    setSearchTerm(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            !genderActive && !categoryActive ? "how-active1" : ""
          }`}
          data-filter="all"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          All Products
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            genderActive === "women" ? "how-active1" : ""
          }`}
          data-filter="women"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          Women
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            genderActive === "man" ? "how-active1" : ""
          }`}
          data-filter="man"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          Man
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            categoryActive === "belt" ? "how-active1" : ""
          }`}
          data-filter="belt"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          Belt
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            categoryActive === "shoes" ? "how-active1" : ""
          }`}
          data-filter="shoes"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          Shoes
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            categoryActive === "watches" ? "how-active1" : ""
          }`}
          data-filter="watches"
          onClick={(e) => handleFilter(e.currentTarget.dataset.filter!)}
        >
          Watches
        </button>
      </div>

      <div className="flex-w flex-c-m m-tb-10" onClick={handleSearch}>
        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
          Search
        </div>
      </div>

      {/* search */}
      <div className="panel-search w-full p-t-10 p-b-15">
        <div className="bor8 dis-flex p-l-15">
          <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>

          <input
            className="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
