import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";

export const Movie = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="w-93.75 h-fit flex justify-between">
        <div className="flex gap-2 p-2">
          <img className="w-[20px] h-[20px]" src="./filmLigth.svg" alt="Film" />
          <img
            className="w-[64px] h-[20px]"
            src="./Movie Z.svg"
            alt="Movie Z"
          />
        </div>
        <div className="flex">
          <img className="w-[36px] h-[36px]" src="./Modes.svg" alt="Modes" />
          <img
            className="w-[36px] h-[36px]"
            src="./Icon ButtonMoon.svg"
            alt="ButtonMoon"
          />
        </div>
      </div>
      <div>
        <img
          className="w-[375px]
h-[246px]
"
          src="./wikedong.jpg"
          alt="wikedong"
        />
      </div>
      <div
        className="w-[335px]
h-[52px] flex justify-between p-2"
      >
        <div>
          <p className="text-sm">Now Playing:</p>
          <p className="text-2xl">Wicked</p>
        </div>
        <div className="flex gap-2">
          <img
            className="w-[23.3px]
h-[22.19px] flex"
            src="./Star.svg"
            alt="Star"
          />
          <div
            className="w-[51px]
h-[28px] flex
"
          >
            <p className="text-base">6.9</p>
            <p className="text-base text-[#71717A]">/10</p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-2 w-[335px] h-fit">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sint
          quae quidem! Voluptas suscipit totam iusto dolorem earum rem
          laudantium accusamus voluptate deserunt, corrupti neque unde in ipsa
          dolores optio!
        </p>
      </div>
      <div className="ml-2">
        <Button>
          <img className="w-[16px] h-[16px]" src="./play.svg" alt="play" />{" "}
          Watch Trailer
        </Button>
      </div>
      <MovieCard img="" rating={0} name="" />
    </div>
  );
};
