import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MovieCard } from "@/_components";
import Link from "next/link";
import { MovieCardList } from "@/_components/MovieCardList";

export default function Popular() {
  return (
    <div>
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1>Popular</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2">
          <MovieCardList />
        </div>
      </div>
    </div>
  );
}
