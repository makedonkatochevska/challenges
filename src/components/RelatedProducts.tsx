"use client";

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ENDPOINTS } from "@/lib/endpoints";
import { getData, getRandomNumber } from "@/lib/utils";
import { ProductType } from "@/lib/types";

const RelatedProducts: React.FC = () => {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      const products = await getData<ProductType[]>(ENDPOINTS.PRODUCTS);

      try {
        const randomStart = await getRandomNumber(products.length);
        const randomProducts = await getData<ProductType[]>(
          `${ENDPOINTS.PRODUCTS}?_start=${randomStart}&_limit=4`
        );

        setRelatedProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching random products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomProducts();
  }, []);

  if (loading) {
    return <div>Loading related products...</div>;
  }

  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedProducts.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
