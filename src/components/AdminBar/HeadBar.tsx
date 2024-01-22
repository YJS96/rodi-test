import React from "react";
import Image from "next/image";

import DownArrow from "../../../public/images/down-fill.svg";

export default function HeadBar() {
  return (
    <>
      <div className="fixed w-full h-[60px] top-0 left-0 border-b z-50 border-color-border bg-color-white flex justify-between items-center px-2">
        <a className="p-4 hover:bg-gray-200 rounded-3xl">
          <Image src="/images/logo.svg" width="102" height="20" alt="logo" />
        </a>
        <div className="flex gap-x-3 items-center me-4">
          <div className="h-10 w-10 rounded-full flex justify-between items-center overflow-hidden">
            <Image
              src="/images/profile_img.png"
              width="40"
              height="40"
              alt="profile-image"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xs font-normal no-underline" style={{textDecoration: 'none'}}>email@email.com</div>
            <div className="bg-color-bg-green20 text-color-main w-fit px-2 py-[1px] rounded text-xs mt-1 font-semibold">
              Pro Plan
            </div>
          </div>
          <DownArrow />
        </div>
      </div>
    </>
  );
}
