import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  const [showMenuItems, setShowMenuItems] = useState(false);

  return (
    <nav className="fixed flex min-w-full items-center justify-between border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
      <div className="text-3xl">Saad Shops</div>
      <div className="flex items-center">
        <button
          className="mr-10 rounded-full border border-slate-800  p-3 duration-300 hover:scale-110 hover:border-slate-900 hover:bg-slate-900"
          onClick={session ? () => void signOut() : () => void signIn("google")}
        >
          {session ? "Sign out" : "Sign in"}
        </button>
        <AiOutlineMenu
          className="cursor-pointer"
          size={25}
          onClick={() =>
            setShowMenuItems((prevShowMenuItems) => !prevShowMenuItems)
          }
        />
        {showMenuItems && (
          <div>
            {session?.user.image && (
              <Image
                src={{ src: session.user.image, height: 40, width: 40 }}
                alt=""
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
