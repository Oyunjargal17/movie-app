import { Button } from "@/components/ui/button";

export const DescriptionText = () => {
  return (
    <div className="m-2 md:absolute top-44.5 left-35 right-224 bottom-39.5 md:text-white md:w-101">
      <div className="flex md:flex-col justify-between p-2">
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
          <div className="flex">
            <p className="text-base">6.9</p>
            <p className="text-base text-[#71717A]">/10</p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-2 h-fit">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sint
          quae quidem! Voluptas suscipit totam iusto dolorem earum rem
          laudantium accusamus voluptate deserunt, corrupti neque unde in ipsa
          dolores optio!
        </p>
      </div>
      <div className="ml-2">
        <Button>
          <img className="w-4 h-4" src="./play.svg" alt="play" /> Watch Trailer
        </Button>
      </div>
    </div>
  );
};
