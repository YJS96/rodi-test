import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import DownArrow from "../../../public/images/down-fill.svg";
import RightArrow from "../../../public/images/icon_16_right.svg";

export default function HeadBar() {
  const [isLogoutVisible, setIsLogoutVisible] = useState<Boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleLogout = () => {
    setIsLogoutVisible((prev) => !prev);
  };

  // 로그아웃 팝업 외부 클릭시 꺼지는 함수
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsLogoutVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="fixed w-full h-[60px] top-0 left-0 border-b z-50 border-color-border bg-color-white flex justify-between items-center px-2 select-none">
        <a href="/admin/home" className="p-4 hover:bg-gray-200 rounded-3xl">
          <Image src="/images/logo.svg" width="102" height="20" alt="logo" />
        </a>
        <div
          className="flex gap-x-3 items-center me-4"
          onClick={() => {
            toggleLogout();
          }}
        >
          <div className="h-10 w-10 rounded-full flex justify-between items-center overflow-hidden">
            <Image
              src="/images/profile_img.png"
              width="40"
              height="40"
              alt="profile-image"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xs font-normal no-underline">
              email@email.com
            </div>
            <div className="bg-color-bg-green20 text-color-main w-fit px-2 py-[1px] rounded text-xs mt-1 font-semibold">
              Pro Plan
            </div>
          </div>
          <DownArrow />
        </div>
        {isLogoutVisible && (
          <div
            ref={ref}
            className="absolute right-6 top-16 p-2 rounded drop-shadow-popup bg-color-white"
          >
            <button className="flex py-2.5 px-3 text-sm font-semibold justify-between items-center w-[130px]">
              <span>로그아웃</span>
              <RightArrow />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
