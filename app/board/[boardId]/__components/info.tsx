"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <Info.Skeleton />;

  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md
            px-1.5 h-12 flex items-center shadow-md"
    >
      <Hint label="Go to IdeaCanvas" side="bottom" sideOffset={10}>
        <Button asChild className="px-2 flex gap-1" variant="board">
          <Link href="/">
            <Image src="/logo.svg" alt="IdeaCanvas" height={40} width={40} />
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Rename the Canvas" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant="board"
          className="text-base font-normal px-2"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="main Menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md
            px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
  );
};
