import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRestaurantStore } from "../store/restaurantsStore";
import { ROUTES } from "../routes/routes";
import { Link } from "react-router-dom";

interface Prop {
  children?: React.ReactNode;
  id: string;
  title: string;
  img: string;
  restauranttype: string;
  slug: string;
}

export default function RestaurantCard({
  children,
  id,
  title,
  img,
  restauranttype,
  slug,
}: Prop) {
  const favorites = useRestaurantStore((state) => state.favorites);

  const toggleFavorite = useRestaurantStore((state) => state.toggleFavorite);

  const isFavorite = favorites.includes(id);

  const toggleIcon = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    toggleFavorite(id);
  };

  return (
    <Link to={`/${ROUTES.DETAIL_PAGE_PATH(slug)}`}>
      <div className="card rounded-4  border-0 bg-light">
        <img src={img} className="card-img-top rounded-4" alt="..." />
        <div className="card-body text-start" style={{ height: "150px" }}>
          <h5 className="card-title">{title}</h5>
          <Link to={ROUTES.CUISINES_PAGE_PATH(restauranttype)}>
            <p className="card-text text-danger fw-bold">{restauranttype}</p>
          </Link>
          {children && <>{children}</>}
        </div>
      </div>
      <div className="position-absolute top-0 start-0 px-4 py-3 cursor-pointer">
        <FontAwesomeIcon
          icon={!isFavorite ? faHeartRegular : faHeartSolid}
          style={{ color: "#f50000", fontSize: "30px" }}
          onClick={(e) => toggleIcon(e)}
        />
      </div>
    </Link>
  );
}
