import Image from "next/image";
import React from "react";
import { ImStatsBars } from "react-icons/im";

const Header = () => {
  return (
    <>
      <header className="container max-w-2xl px-6 py-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* User Information */}
          <div className="flex items-center gap-2 ">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden ">
              <Image
                width={40}
                height={40}
                className="object-cover w-full h-full"
                src="https://thispersondoesnotexist.com/"
                alt="Profile image"
              />
            </div>

            {/* name */}

            <small>Hi, Rupesh!</small>
          </div>
          <nav className="flex items-center gap-4">
            <div>
              <ImStatsBars className="text-2xl" />
            </div>
            <div>
              <button className="btn btn-danger">Sign out</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
