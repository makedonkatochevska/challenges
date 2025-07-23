import React, { useRef, useState } from "react";
import { useRestaurantStore } from "../store/restaurantsStore";
import { useParams } from "react-router-dom";
import getAverageRating from "../utils/getAverageRating";
import ReviewItem from "../components/ReviewItem";
import { ReviewsList } from "../types/dataType";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function DetailPage() {
  const [formName, setFormName] = useState("");
  const [formComment, setFormComment] = useState("");
  const [formStars, setFormStars] = useState(0);

  //scrolling effect after submit
  const reviewsRef = useRef<HTMLDivElement>(null);

  //restaurant
  const { restaurantName } = useParams();
  const allRestaurants = useRestaurantStore((state) => state.restaurants);

  const restaurant = allRestaurants.find((res) => res.slug === restaurantName);

  //if no restaurants are found show error
  if (!restaurant)
    return (
      <DotLottieReact
        src="https://lottie.host/cf1c89f3-54da-4932-999d-e77d249df078/I2XEVRAiY2.lottie"
        loop
        autoplay
      />
    );

  const averageRating = getAverageRating(restaurant.reviewsList);

  //form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formName || !formComment || !formStars) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const newReview: ReviewsList = {
        id: Date.now(),
        author: formName,
        comment: formComment,
        stars: formStars,
      };

      const updatedRestaurant = {
        ...restaurant,
        reviewsList: [newReview, ...restaurant.reviewsList],
        reviews: restaurant.reviews + 1,
      };

      const response = await fetch(
        `http://localhost:5001/restaurants/${restaurant.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRestaurant),
        }
      );

      if (!response.ok) throw new Error("Failed to submit review");

      useRestaurantStore
        .getState()
        .setRestaurants(
          allRestaurants.map((r) =>
            r.id === restaurant.id ? updatedRestaurant : r
          )
        );

      setFormName("");
      setFormComment("");
      setFormStars(0);

      setTimeout(() => {
        reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      alert("Something went wrong while submitting your review. Try again!");
    }
  };

  return (
    <>
      <h2 className="text-center">{restaurant?.businessname}</h2>
      <div className="card border-0 bg-light">
        <img src={restaurant.image} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <p className="m-0 card-text">Rating - {averageRating}</p>
          <p className="card-text">Based on {restaurant.reviews} reviews</p>
          <p className="card-text">{restaurant.phone}</p>
          <p className="card-text">{restaurant.email}</p>
          <p className="card-text">{restaurant.address}</p>
          <p className="card-text">
            {restaurant.parkinglot
              ? "We have a parking lot waiting for you"
              : "We don't have a parking lot, sorry!"}
          </p>
        </div>
      </div>
      <h2 className="text-center mt-4">REVIEWS</h2>
      <div ref={reviewsRef}>
        {restaurant.reviewsList.length === 0 && <p>No reviews!</p>}
        {restaurant.reviewsList.length > 0 &&
          restaurant.reviewsList.map((review) => (
            <ReviewItem
              author={review.author}
              comment={review.comment}
              stars={review.stars}
              key={review.id}
            />
          ))}
      </div>
      <h2 className="text-center mt-4">REVIEW FORM</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setFormName(e.target.value)}
            value={formName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            className="form-control"
            id="comment"
            onChange={(e) => setFormComment(e.target.value)}
            value={formComment}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stars" className="form-label">
            Stars
          </label>
          <input
            type="range"
            className="form-range"
            id="stars"
            min="0"
            max="5"
            step="1"
            onChange={(e) => setFormStars(Number(e.target.value))}
            value={formStars}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={!formComment || !formName || !formStars}
        >
          Leave a comment
        </button>
      </form>
    </>
  );
}
