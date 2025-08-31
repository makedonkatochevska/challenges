import React from "react";
import ProductItem from "./ProductItem";
import { ENDPOINTS } from "@/lib/endpoints";
import { getData } from "@/lib/utils";
import { ProductType } from "@/lib/types";

const FeaturedProducts: React.FC = async () => {
  const products = await getData<ProductType[]>(
    `${ENDPOINTS.PRODUCTS}?_limit=4`
  );

  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {products.map((product) => (
                    <ProductItem {...product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
