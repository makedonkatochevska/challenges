interface Props {
  author: string;
  comment: string;
  stars: number;
}

export default function ReviewItem({ author, comment, stars }: Props) {
  return (
    <div className="bg-light p-3 rounded-3 mb-3">
      <p>
        <span className="fw-bold">Author:</span> {author}
      </p>
      <p>
        <span className="fw-bold">Message:</span> {comment}
      </p>
      <p className="mb-0">
        <span className="fw-bold"> Stars:</span> {stars}
      </p>
    </div>
  );
}
