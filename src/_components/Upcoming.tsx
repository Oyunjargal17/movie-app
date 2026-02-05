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
          {/* <Button onClick={() => router.back()} variant={"outline"}>
            Back <ArrowRight />
          </Button> */}
          <Link href="/upcoming">
            <Button variant={"outline"}>
              See more <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2 w-fit">
          <MovieCardList />
        </div>
      </div>
    </div>
  );
};
