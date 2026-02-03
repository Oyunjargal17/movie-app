import { Star } from "lucide-react";

type MovieCardProps = {
  img: string;
  rating: number;
  name: string;
};

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, name } = props;
  return (
    <div
      className="w-[157.5px] mx-auto  bg-[#F4F4F5] rounded-sm md:w-[229.7px]

"
    >
      <img
        className="w-[157.5px] h-[233px] 
 md:w-[229.7px]
md:h-[340px]"
        src="./dear-santa.jpg"
        alt="poster"
      />
      <div
        className="w-[157.5px]
h-[76px] md:w-[229.7px]
md:h-[95px]

"
      >
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
