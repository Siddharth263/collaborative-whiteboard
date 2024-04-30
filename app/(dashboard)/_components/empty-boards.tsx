"use client";

import { useOrganization } from "@clerk/nextjs";

import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/app/hooks/use-api-mutation";
import { toast } from "sonner";
import Link from "next/link";

export const EmptyBoards = () => {
  let bId;
  const { organization } = useOrganization();

  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        bId = id;
      })
      .catch(() => {
        toast.error("Failed to create a board.");
      });
  };

  return (
    <Link href={`/board/${bId}`}>
      <div className="h-full flex flex-col items-center justify-center">
        <Image src="./notes.svg" alt="Empty Seach" height={110} width={110} />
        <h2 className="text-2xl font-semibold mx-6">Create your first board</h2>
        <p className="text-muted-foreground textg-sm mt-2">
          Start by creating a board for your organisation
        </p>
        <div className="mt-6">
          <Button disabled={pending} size="lg" onClick={onClick}>
            Create Board
          </Button>
        </div>
      </div>
    </Link>
  );
};
