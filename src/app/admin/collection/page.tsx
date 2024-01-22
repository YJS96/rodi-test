"use client";
import React, { useState } from "react";
import Image from "next/image";

import SearchIcon from "../../../../public/images/icon-24-search_type2.svg";
import URLCollect from "../../../../public/images/icon-20-link.svg";
import Download from "../../../../public/images/icon-20-download.svg";
import CheckUnsel from "../../../../public/images/icon-20-roundcheckUnsel.svg";
import CheckSel from "../../../../public/images/icon-20-roundcheck-black.svg";
import Delete from "../../../../public/images/icon-20-delete.svg";
import Upload from "../../../../public/images/icon-20-upload-cloud.svg";
import CheckGoods from "../../../../public/images/icon-20-checkUnsel.svg";
import PrevPage from "../../../../public/images/icon-16-right.svg";

import CollectionStatus from "@/components/Buttons/CollectionStatus";

interface ItemProps {
  index: Number;
  date: String;
  name: String;
  category: String;
  img: String;
  status: String;
}

export default function Collection() {
  const [categoryIndex, setCategoryIndex] = useState<Number>(0);
  const [selectedItems, setSelectedItems] = useState<Number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState({ start: 1, end: 5 });

  // 임시 리스트
  const categoryList = ["모두보기", "내가 수집한 상품", "직원1", "직원2"];

  const handleCategory = (index: Number) => {
    setCategoryIndex(index);
  };

  // 임시 리스트
  const itemList: ItemProps[] = [
    {
      index: 1,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 2,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 3,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 4,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 5,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 6,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 7,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 8,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 9,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 10,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 11,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 12,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 13,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 14,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 15,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 16,
      date: "2024.01.01~02",
      name: "2페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 17,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 18,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 19,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 20,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 21,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 22,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 23,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 24,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 25,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 26,
      date: "2024.01.01~02",
      name: "2페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 27,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 28,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 29,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 30,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 31,
      date: "2024.01.01~02",
      name: "3페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 32,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 33,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 34,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 35,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 36,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 37,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 38,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 39,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 40,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 41,
      date: "2024.01.01~02",
      name: "3페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 42,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 43,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 44,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 45,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 46,
      date: "2024.01.01~02",
      name: "4페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 47,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 48,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 49,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 50,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 51,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 52,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 53,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 54,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 55,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 56,
      date: "2024.01.01~02",
      name: "4페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 57,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 58,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 59,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 60,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 61,
      date: "2024.01.01~02",
      name: "5페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 62,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 63,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 64,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 65,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 66,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 67,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 68,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 69,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 70,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 71,
      date: "2024.01.01~02",
      name: "5페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 72,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 73,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 74,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 75,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 76,
      date: "2024.01.01~02",
      name: "6페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 77,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "error",
    },
    {
      index: 78,
      date: "2024.01.02~03",
      name: "이름1",
      category: "카테고리1",
      img: "/images/eximg_01.png",
      status: "ready",
    },
    {
      index: 79,
      date: "2024.01.03~04",
      name: "이름2",
      category: "카테고리2",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 80,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 81,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 82,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 83,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 84,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 85,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 86,
      date: "2024.01.01~02",
      name: "6페이지",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 87,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 88,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 89,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
    {
      index: 90,
      date: "2024.01.01~02",
      name: "탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A",
      category: "스포츠/레저 > 수영 > 수영용품 > 튜브",
      img: "/images/eximg_01.png",
      status: "pending",
    },
  ];

  // 아이템 선택
  const handleItemCheck = (key: Number) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter((item) => item !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  // 아이템 전체 선택
  const handleSelectAll = () => {
    const currentPageIndexes = currentItems.map(
      (item) => (item.index as number) - 1
    );

    if (currentPageIndexes.every((index) => selectedItems.includes(index))) {
      // 모든 현재 페이지 아이템이 이미 선택된 경우, 해당 아이템들을 선택 해제
      setSelectedItems(
        selectedItems.filter(
          (index) => !currentPageIndexes.includes(index as number)
        )
      );
    } else {
      // 현재 페이지의 아이템 중 선택되지 않은 아이템들만 찾아 추가
      const newSelectedItems = [...selectedItems];
      currentPageIndexes.forEach((index) => {
        if (!selectedItems.includes(index)) {
          newSelectedItems.push(index);
        }
      });
      setSelectedItems(newSelectedItems);
    }
  };
  

  // 페이지네이션
  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (pageRange.start > 1) {
      const newPage = pageRange.start - 1;
      setCurrentPage(newPage);
      setPageRange({ start: newPage - 4, end: newPage });
    }
  };

  const handleNextPage = () => {
    if (pageRange.end < Math.ceil(itemList.length / itemsPerPage)) {
      const newPage = pageRange.end + 1;
      setCurrentPage(newPage);
      setPageRange({ start: newPage, end: newPage + 4 });
    }
  };

  const renderPageNumbers = pageNumbers
    .filter((number) => number >= pageRange.start && number <= pageRange.end)
    .map((number) => (
      <button
        key={number}
        onClick={() => setCurrentPage(number)}
        className={`page-button text-sm font-normal transition-200 ${
          number === currentPage
            ? "bg-color-bg-green10 text-color-main"
            : "text-gray-500"
        }`}
      >
        {number}
      </button>
    ));

  return (
    <>
      <div className="mb-5">
        <span className="header-text">수집상품</span>
        <span className="text-sm font-medium text-color-main ms-3">
          총 24건
        </span>
      </div>
      <div className="flex h-[48px]">
        <div className="relative w-64 h-full flex items-center">
          <input
            className="w-64 h-full font-light text-sm ps-4 border border-color-border rounded-lg bg-color-white"
            placeholder="상품명 검색"
            type="text"
          />
          <button
            className="absolute w-9 h-9 right-3 flex justify-center items-center"
            type="submit"
          >
            <SearchIcon />
          </button>
        </div>
        <button className="px4-button button-color-main ms-3">
          <URLCollect />
          <span className="ms-1">URL 수집</span>
        </button>
        <button className="px4-button button-color-main ms-3">
          <URLCollect />
          <span className="ms-1">엑셀 수집</span>
        </button>
        <button className="px4-button ms-3 border border-gray-700  text-gray-700 bg-color-white hover:bg-gray-200 transition-all duration-200">
          <Download />
          <span className="ms-1">엑셀 샘플 다운로드</span>
        </button>
      </div>
      <div className="mt-7">
        <div className="flex items-center h-[30px]">
          {categoryList.map((category, index) => (
            <>
              <button
                className={
                  categoryIndex === index ? "selector-selected" : "selector"
                }
                onClick={() => {
                  handleCategory(index);
                }}
              >
                {category}
              </button>
            </>
          ))}
        </div>
        <div className="mt-4 w-full h-14 flex items-center justify-between rounded-lg bg-gray-300 py-[9px] pe-[10px] ps-5 select-none">
          <div
            className="flex"
            onClick={() => {
              handleSelectAll();
            }}
          >
            {selectedItems.length === 15 ? (
              <CheckSel />
            ) : (
              <CheckUnsel />
            )}
            <span className="text-sm font-medium text-gray-600 ms-[6px]">
              {selectedItems.length}개 선택
            </span>
          </div>
          <div className="flex">
            <div className="px6-button bg-color-white text-gray-700 rounded hover:bg-gray-100 transition-200">
              <Delete />
              <span className="ms-1">삭제</span>
            </div>
            <div className="px6-button ms-[10px] bg-gray-900 text-color-white rounded hover:bg-color-black transition-200">
              <Upload />
              <span className="ms-1">업로드</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-7 grid grid-cols-5 grid-rows-3 gap-x-4 gap-y-8">
        {currentItems.map((item, key) => (
          <>
            <div
              className="flex flex-col select-none cursor-pointer group relative"
              onClick={() => {
                handleItemCheck(key);
              }}
            >
              <div className="relative">
                <div
                  className={`item-select bg-color-black ${
                    selectedItems.includes(key) ? "" : "opacity-50"
                  }`}
                >
                  <CheckGoods />
                </div>
                <div className="w-full h-auto flex justify-center items-center overflow-hidden rounded-lg bg-gray-300">
                  <Image
                    className="group-hover:scale-105 transition-200"
                    src="/images/eximg_01.png"
                    width="500"
                    height="500"
                    alt="item"
                  />
                </div>
                <CollectionStatus status={item.status} />
              </div>
              <div className="mt-4">
                <div className="text-xs font-normal text-gray-600">
                  {item.date}
                </div>
                <div className="text-sm font-medium mt-3 overflow-hidden text-ellipsis line-clamp-2">
                  {item.name}
                </div>
                <div className="text-xs font-light mt-1 text-gray-500 overflow-hidden text-ellipsis line-clamp-1">
                  {item.category}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="pt-10 flex justify-center items-center">
        <button className="page-button" onClick={handlePrevPage}>
          <PrevPage />
        </button>
        {renderPageNumbers}
        <button className="page-button rotate-180" onClick={handleNextPage}>
          <PrevPage />
        </button>
      </div>
    </>
  );
}
