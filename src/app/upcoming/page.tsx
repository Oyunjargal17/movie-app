"use client";

import { MovieCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { MovieCard } from "./MovieCard";

export default function Upcoming() {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Upcoming</h1>
        <Button variant={"outline"}>
          See more <ArrowRight />
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2">
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
          <MovieCard img="" rating={0} name="" />
        </div>
      </div>
    </div>
  );
}
