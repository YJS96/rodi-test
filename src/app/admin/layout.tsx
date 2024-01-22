"use client";
import React from "react";
import { usePathname } from "next/navigation";

import HeadBar from "@/components/AdminBar/HeadBar";
import SideBar from "@/components/AdminBar/SideBar";

interface AdminProps {
  children: React.ReactNode;
}

export default function Admin({ children }: AdminProps) {
  const pathname = usePathname();

  return (
    <>
      <HeadBar />
      <SideBar currentTab={pathname} />
      <div className="w-full h-full pt-[60px] ps-[200px]">
        <div className="font-Pretendard min-w-[1248px] px-6 pt-[30px] pb-12">{children}</div>
      </div>
    </>
  );
}
