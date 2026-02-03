import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DescriptionText } from "./DescriptionText";
import { Upcoming } from "./Upcoming";
// import Autoplay from "embla-carousel-autoplay"

export const MovieDescription = () => {
  return (
    <div>
      {/* <Carousel
          // plugins={[plugin.current]}
          className="w-full max-w-[10rem] sm:max-w-xs"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      <img
        className="w-full h-full md:relative"
        src="./wikedong.jpg"
        alt="wikedong"
      />
      <DescriptionText />
    </div>
  );
};
