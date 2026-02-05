"use client";
import {
  Foother,
  Header,
  MovieDescription,
  Popular,
  TopRated,
  Upcoming,
  MovieCard,
} from "@/_components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center xl:mx-auto">
      <Header />
      <MovieDescription />
      <Upcoming />
      <TopRated />
      <Popular />
      <Foother />
    </div>
  );
}
