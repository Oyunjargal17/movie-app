import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { MovieCardList } from "./MovieCardList";
export const Popular = () => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Popular</h1>
        <Link href="/popular">
          <Button variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div>
        <div className=" mx-auto gap-2">
          <MovieCardList />
        </div>
      </div>
    </div>
  );
};
