

import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="./empty-search.svg"
        alt="Empty Seach"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mx-6">No Results Found!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try seaching for something else
      </p>
    </div>
  );
};
