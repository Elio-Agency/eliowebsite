import Image from "next/image";
import clsx from "clsx";

// =================================================
interface TestimonialCard3Props {
  name: string;
  image: string;
  review: string;
  shadow?: boolean;
  designation: string;
  hideRating?: boolean;
}
// =================================================

export default function TestimonialCard3({
  name,
  image,
  review,
  shadow,
  hideRating,
  designation,
}: TestimonialCard3Props) {
  return (
    <div className={clsx({ card: true, "shadow-lg": shadow })}>
      <div className="card-body">
        {hideRating ? null : <span className="ratings five mb-3" />}

        <blockquote className="icon mb-0">
          <p>“{review}”</p>

          <div className="blockquote-details">
            <div>
              <h5 className="mb-0">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
