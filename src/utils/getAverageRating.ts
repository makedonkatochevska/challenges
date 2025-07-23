import { ReviewsList } from "../types/dataType";

export default function getAverageRating(list: ReviewsList[]) {
  const averageRating =
    list.length > 0
      ? list.map((review) => review.stars).reduce((sum, val) => sum + val, 0) /
        list.length
      : 0;

  return averageRating.toFixed(1);
}
