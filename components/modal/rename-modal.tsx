"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/app/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);

  const { isOpen, onClose, initialValues } = useRenameModal();

  const [title, setTitle] = useState(initialValues.title);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: initialValues.id,
      title: title,
    })
      .then(() => {
        toast.success("Renamed the board successfully");
        onClose();
      })
      .catch(() => toast.error("Failed to rename the board"));
  };

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a New title for this board.</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
