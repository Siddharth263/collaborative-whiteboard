"use client";

import { useOthers, useSelf } from "@/liveblocks.config";

import { UserAvatar } from "./avatar";
import { connectionIDtoColors } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white 
            rounded-md p-3 flex items-center shadow-md"
    >
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_OTHER_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIDtoColors(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name?.[0] || "T"}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIDtoColors(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
      </div>
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white 
            rounded-md p-3 flex items-center shadow-md w-[100px]"
    />
  );
};
