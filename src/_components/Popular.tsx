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
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2">
          <MovieCardList />
        </div>
      </div>
    </div>
  );
};
