"use client";

import { MovieCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MovieCardList } from "@/_components/MovieCardList";
// import { MovieCard } from "./MovieCard";

export default function Upcoming() {
  // const router = useRouter();
  return (
    <div>
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft /> Back
          </Button>
        </Link>
        <h1 className="m-2 bold">Upcoming</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-auto md:grid-cols-5 gap-2">
          <MovieCardList />
        </div>
      </div>
    </div>
  );
}
