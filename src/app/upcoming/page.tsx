"use client";

import { MovieCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
// import { MovieCard } from "./MovieCard";

export default function Upcoming() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between m-2">
        <Button onClick={() => router.back()} variant={"outline"}>
          <ArrowLeft /> Back
        </Button>
        <h1 className="m-2 bold">Upcoming</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
