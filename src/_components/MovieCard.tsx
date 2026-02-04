import { Star } from "lucide-react";

type MovieCardProps = {
  img: string;
  rating: number;
  name: string;
};

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, name } = props;
  return (
    <div className="w-full mx-auto  bg-[#F4F4F5] rounded-sm ">
      <img
        className="w-full h-[233px]  md:h-[340px]"
        src="./dear-santa.jpg"
        alt="poster"
      />
      <div className="w-full h-full">
        <div className="flex gap-2 mt-2">
          <Star className="text-[#FDE047]" />
          <div className="flex">
            <p>{rating}/</p>
            <p>10</p>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};
