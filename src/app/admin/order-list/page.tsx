"use client";
import React, { useState } from "react";
import Image from "next/image";

import RoundCheck from "../../../../public/images/icon-roundcheck-main.svg";
import RoundRed from "../../../../public/images/icon-16-information-red.svg";
import RoundGray from "../../../../public/images/icon-16-information-gray.svg";
import PlusWhite from "../../../../public/images/icon-16-plus-white.svg";
import DownloadWhite from "../../../../public/images/icon-20-download-white.svg";
import TruckBlack from "../../../../public/images/icon-16-truck-black.svg";
import ExcelBlack from "../../../../public/images/icon-16-excel-black.svg";
import ReplayBlack from "../../../../public/images/icon-16-replay-black.svg";

interface SalesProps {
  img: string;
  name: string;
  revenue: number;
}

export default function OrderList() {
  const [currentTab, setCurrentTab] = useState<Number>(1);
  const [currentDuration, setCurrentDuration] = useState<Number>(0);
  const [currentMarket, setCurrentMarket] = useState<Number>(0);

  const tabList = [
    "결제완료",
    "상품 준비중",
    "배송중",
    "배송완료",
    "취소요청",
    "반품요청",
    "교환요청",
  ];

  const notiList = [0, 3, 0, 5, 0, 0, 0];
  const durationList = ["오늘", "어제", "이번주", "이번달"];
  const marketList = ["전체", " 스마트스토어", "쿠팡", "G마켓", "옥션"];
  const salesList: SalesProps[] = [
    {
      img: "naver",
      name: "스마트스토어",
      revenue: 1932000,
    },
    {
      img: "coupang",
      name: "쿠팡",
      revenue: 200000,
    },
    {
      img: "_gmarket",
      name: "G마켓",
      revenue: 0,
    },
    {
      img: "auction",
      name: "옥션",
      revenue: 90700,
    },
    {
      img: "11st",
      name: "11번가 글로벌",
      revenue: 120000,
    },
    {
      img: "11st",
      name: "11번가 국내",
      revenue: 48000,
    },
    {
      img: "INTERPARK",
      name: "인터파크",
      revenue: 76000,
    },
    {
      img: "lotteon",
      name: "롯데온",
      revenue: 170000,
    },
  ];


  const getTime = () => {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today
      .toISOString()
      .replace("-", "/")
      .replace("-", "/")
      .replace("T", " ")
      .substring(2, 16);
  };

  const numberComma = (num: Number) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="header-text">주문관리</div>
      <div className="gray-rounded mt-5 p-5">
        <div className="flex items-center">
          <span className="sub-header me-4">주문관리 연동 상태</span>
          <div className="flex items-center text-gray-500 font-medium text-xs">
            <div className="flex items-center me-3">
              <span className="me-1">스마트스토어</span>
              <RoundCheck />
            </div>
            <div className="flex items-center me-3">
              <span className="me-1">쿠팡</span>
              <RoundCheck />
            </div>
            <div className="flex items-center">
              <span className="me-1">ESM 2.0 (G마켓/옥션)</span>
              <RoundRed />
            </div>
          </div>
        </div>
        <div className="h-6 mx-5 border-e border-color-border"></div>
        <span className="sub-header me-4">미사용 마켓</span>
        <div className="flex items-center text-gray-500 font-medium text-xs">
          <div className="flex items-center me-3">
            <span className="me-1">롯데온</span>
            <RoundGray />
          </div>
          <div className="flex items-center me-3">
            <span className="me-1">인터파크</span>
            <RoundGray />
          </div>
        </div>
      </div>
      <div className="relative flex w-full mt-5 shadow-tab mb-7">
        <div className="absolute w-6 py-3 -left-6 shadow-tab">&nbsp;</div>
        <div className="absolute w-6 py-3 -right-6 shadow-tab">&nbsp;</div>
        {tabList.map((tab, key) => (
          <React.Fragment key={key}>
            <button
              className={key === currentTab ? "home-tab-selected" : "home-tab"}
              onClick={() => {
                setCurrentTab(key);
              }}
            >
              {tab}
              {notiList[key] !== 0 && (
                <div className="w-4 h-4 ms-1 text-[10px] text-color-white bg-color-red rounded-full flex justify-center items-center">
                  {notiList[key]}
                </div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
      {currentTab === 1 && (
        <>
          <div className="w-full flex">
            <div className="w-full grid grid-cols-3 rounded-xl border border-color-border py-4 me-6">
              <div className="relative group flex items-center justify-between px-6 border-e border-color-border cursor-pointer">
                <span className="font-semibold text-color-main">8월 매출</span>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold mb-1">2,605,000원</span>
                  <span className="text-xs text-gray-500">
                    지난 달 1,000,000원
                  </span>
                </div>
                <div className="absolute hidden group-hover:block w-11/12 w-min-[340px] top-14 rounded-lg p-5 bg-color-white drop-shadow-popup">
                  <div className="w-full flex flex-wrap">
                    {salesList.map((sale, key) => (
                      <React.Fragment key={key}>
                        <div className="flex items-center w-1/2 my-1.5">
                          <Image
                            src={`/images/${sale.img}.svg`}
                            width="32"
                            height="32"
                            alt="alt"
                          />
                          <div className="ms-2.5">
                            <div className="text-xs text-gray-600">
                              {sale.name}
                            </div>
                            <div className="text-sm font-semibold">
                              {numberComma(sale.revenue)}원
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative group flex items-center justify-between px-6 border-e border-color-border cursor-pointer">
                <span className="font-semibold text-color-main">8월 매입</span>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold mb-1">2,605,000원</span>
                  <span className="text-xs text-gray-500">
                    지난 달 1,000,000원
                  </span>
                </div>
                <div className="absolute hidden group-hover:block w-11/12 w-min-[340px] top-14 rounded-lg p-5 bg-color-white drop-shadow-popup">
                  <div className="flex justify-between items-center text-sm mt-1.5">
                    <span className="text-gray-600 font-medium">배송대행지 비용</span>
                    <span>3,453,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm my-2">
                    <span className="text-gray-600 font-medium">오픈마켓 수수료</span>
                    <span>144,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm my-2">
                    <span className="text-gray-600 font-medium">광고비</span>
                    <span>240,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-1.5">
                    <span className="text-gray-600 font-medium">기타</span>
                    <span>0원</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 cursor-pointer">
                <span className="font-semibold text-color-blue">순이익</span>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold mb-1">2,605,000원</span>
                  <span className="text-xs text-gray-500">
                    지난 달 1,000,000원
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[158px] flex flex-col">
              <button className="px6-button w-full h-[38px] p-0 button-color-main">
                <PlusWhite />
                <span className="ms-1">매입 내역 추가</span>
              </button>
              <button className="px6-button w-full h-[38px] p-0 button-color-main mt-2.5">
                <DownloadWhite />
                <span className="ms-1">소명 자료 다운</span>
              </button>
            </div>
          </div>

          <div className="gray-rounded mt-6 mb-3 py-4 px-5 flex items-center">
            <div className="flex items-center">
              <span className="text-gray-600 font-semibold me-4">기간</span>
              {durationList.map((duration, key) => (
                <React.Fragment key={key}>
                  <button
                    className={`h-[30px] ${
                      currentDuration === key ? "selector-selected" : "selector"
                    }`}
                    onClick={() => {
                      setCurrentDuration(key);
                    }}
                  >
                    {duration}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="h-6 mx-5 border-e border-color-border"></div>
            <div className="flex items-center ms-2">
              <span className="text-gray-600 font-semibold me-4">마켓</span>
              {marketList.map((market, key) => (
                <React.Fragment key={key}>
                  <button
                    className={`h-[30px] ${
                      currentMarket === key ? "selector-selected" : "selector"
                    }`}
                    onClick={() => {
                      setCurrentMarket(key);
                    }}
                  >
                    {market}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-between items-center font-medium">
            <div className="flex">
              <button className="round-small-button">
                <TruckBlack />
                <span className="ms-1">배송중 처리</span>
              </button>
              <button className="round-small-button ms-2">
                <ExcelBlack />
                <span className="ms-1">주문상세 엑셀다운</span>
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500">
                업데이트 시간: {getTime()}
              </span>
              <button className="round-small-button ms-2">
                <ReplayBlack />
                <span className="ms-1">새로고침</span>
              </button>
            </div>
          </div>

          <div className="font-medium">
            <table className="w-full mt-3 border-collapse table-fixed border-spacing-0">
              <thead className="h-10 border-t border-b border-color-border text-xs text-gray-500 text-center">
                <tr className="flex items-center py-2 pe-2.5">
                  <th className="orderlist-th w-[28px] pe-2"></th>
                  <th className="orderlist-th w-[34px] me-2.5">마켓</th>
                  <th className="orderlist-th w-[110px]">주문번호/시간</th>
                  <th className="orderlist-th w-[calc(100%_-_1112px)] overflow-hidden text-ellipsis line-clamp-1">
                    상품명
                  </th>
                  <th className="orderlist-th w-[74px]">옵션명</th>
                  <th className="orderlist-th w-10">수량</th>
                  <th className="orderlist-th w-[74px]">가격 {"(원가)"}</th>
                  <th className="orderlist-th w-[74px]">예상마진</th>
                  <th className="orderlist-th w-[74px]">주문자 정보</th>
                  <th className="orderlist-th w-[70px]">
                    해외발주여부
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </th>
                  <th className="orderlist-th w-[74px]">
                    해외구매
                    <br />
                    주문번호
                  </th>
                  <th className="orderlist-th w-[68px]">
                    배대지접수
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </th>
                  <th className="orderlist-th w-[74px]">
                    배대지
                    <br />
                    주문번호
                  </th>
                  <th className="orderlist-th w-[74px]">배대지 비용</th>
                  <th className="orderlist-th w-[100px]">배송정보</th>
                  <th className="orderlist-th w-[50px]">원본 상품</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" flex items-center py-2 pe-2.5 border-b border-color-border"></tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
