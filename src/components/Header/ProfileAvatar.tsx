"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { getAvatarText } from "@/lib/utils";
import Link from "next/link";
import { logout } from "actions/auth";

const ProfileAvatar = () => {
  const session = useSession();

  const avatarText = getAvatarText(session?.data?.user?.name);

  return (
    <Menubar className="z-50 rounded-none border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="rounded-full bg-transparent px-0 py-0 focus:bg-none data-[state=open]:ring-2">
          {/* <p className="">{session?.data?.user?.name}</p> */}
          <Avatar className="size-10 cursor-pointer ring-1 ">
            {session?.data?.user?.image && (
              <AvatarImage src={session?.data?.user?.image || ""} />
            )}

            <AvatarFallback>{avatarText}</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"/dashboard"}> Dashboard </Link>
          </MenubarItem>

          {/* <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub> */}
          <MenubarSeparator />
          <MenubarItem onClick={() => logout()}>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ProfileAvatar;
