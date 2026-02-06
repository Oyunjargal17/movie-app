"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MovieCardList } from "./MovieCardList";
export const Upcoming = () => {
  // const router = useRouter();
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Upcoming</h1>
        <div>
          <Link href="/upcoming">
            <Button variant={"outline"}>
              See more <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <MovieCardList />
        </div>
      </div>
    </div>
  );
};
