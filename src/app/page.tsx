"use client";
import { Header, MovieDescription } from "@/_components";
import { Foother } from "@/_components/Foother";
import { Popular } from "@/_components/Popular";
import { TopRated } from "@/_components/TopRated";
import { Upcoming } from "@/_components/Upcoming";

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
