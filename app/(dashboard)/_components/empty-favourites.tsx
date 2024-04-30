"use client"

import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="./empty-favourites.svg"
        alt="Empty Seach"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mx-6">No Favourite Boards!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try Favourating Board.
      </p>
    </div>
  );
};
