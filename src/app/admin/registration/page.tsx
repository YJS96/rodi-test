"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Rocket from "../../../../public/images/icon-color-rocket.svg";
import Badge from "../../../../public/images/icon-color-badge.svg";
import CheckUnsel from "../../../../public/images/icon-20-roundcheckUnsel.svg";
import Delete from "../../../../public/images/icon-20-delete.svg";
import Taobao from "../../../../public/images/taobao_logo.svg";
import Pen from "../../../../public/images/icon-16-pen.svg";
import PrevPage from "../../../../public/images/icon-16-right.svg";

import ColorChip from "@/components/ColorChip/ColorChip";
import RegiMarket from "@/components/Buttons/RegiMarket";

export default function Registration() {
  // const [colorChip, setColorChip] = useState<String>('red')
  const colorChip = "red";

  const today = new Date();
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const getDays = (firstDay: Date) => {
    const calendarDays = [];
    const year = firstDay.getFullYear();
    const month = firstDay.getMonth();

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarDays.push(0);
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      calendarDays.push(i);
    }

    return calendarDays;
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full flex">
          <div className="w-1/6 rounded-xl border border-color-border py-5 px-4 me-6 text-center flex flex-col justify-around font-semibold">
            <div>
              <div className="text-color-main text-sm">오늘 등록한 상품</div>
              <div>30개</div>
            </div>
            <div className="border-b border-color-border my-0.5"></div>
            <div>
              <div className="text-color-main text-sm">이번달 등록한 상품</div>
              <div>30개</div>
            </div>
            <div className="border-b border-color-border my-0.5"></div>
            <div>
              <div className="text-color-main text-sm">총 등록한 상품</div>
              <div>30개</div>
            </div>
          </div>
          <div className="w-full rounded-xl border border-color-border py-6 items-start grid grid-cols-2">
            <div className="px-6 h-full border-e border-color-border">
              <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center text-lg font-semibold">
                  <Rocket />
                  <span className="ms-1.5">나의 목표</span>
                </div>
                <div className="flex items-center py-2 px-2.5 rounded bg-gray-200 text-xs font-medium text-gray-500">
                  <div className="flex items-center">
                    <span className="me-2.5">하루</span>
                    <span className="text-gray-900 font-medium">30</span>
                    <span>&nbsp;개</span>
                  </div>
                  <div className="w-[1px] h-3 border border-color-border mx-2.5"></div>
                  <div>나의컬러</div>
                  <ColorChip />
                </div>
              </div>
              <div className="w-full grid grid-cols-3 gap-x-3 text-gray-500">
                <div className="text-xs font-semibold">
                  <div className="mb-2">{lastMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(lastMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? "bg-chip-red-1" : "bg-color-white"
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ""}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold">
                  <div className="mb-2">{thisMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(thisMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? "bg-chip-red-1" : "bg-color-white"
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ""}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold">
                  <div className="mb-2">{nextMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(nextMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? "bg-chip-red-1" : "bg-color-white"
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ""}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 h-full flex flex-col">
              <div className="flex items-center text-lg font-semibold mb-2.5">
                <Badge />
                <span className="ms-2">나의 순위</span>
              </div>
              <div className="h-full grid grid-cols-2 gap-x-4">
                <div className="rounded-lg p-4 bg-gray-200 flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-sm font-semibold">
                    <span className="text-gray-600">오늘 등록한 상품 수</span>
                    <span>상위 43%</span>
                  </div>
                  <div className="rounded-lg px-4 w-full h-full bg-color-white grid grid-rows-2 text-[13px] font-medium">
                    <div className="flex items-center py-2  border-b border-color-border">
                      <Image
                        className="w-5 h-5 me-2"
                        src="/images/ranker_1.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                    <div className="flex items-center py-2">
                      <Image
                        className="w-5 h-5 me-2"
                        src="/images/ranker_2.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4 bg-gray-200 flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-sm font-semibold">
                    <span className="text-gray-600">이번달 등록한 상품 수</span>
                    <span>상위 13%</span>
                  </div>
                  <div className="rounded-lg px-4 w-full h-full bg-color-white grid grid-rows-2 text-[13px] font-medium">
                    <div className="flex items-center py-2  border-b border-color-border">
                      <Image
                        className="w-5 h-5 me-2"
                        src="/images/ranker_1.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                    <div className="flex items-center py-2">
                      <Image
                        className="w-5 h-5 me-2"
                        src="/images/ranker_2.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between pt-9 pb-3">
          <span className="header-text">등록상품</span>
        </div>

        <div className="mt-4 w-full h-14 flex items-center justify-between rounded-lg bg-gray-300 py-[9px] pe-[10px] ps-5 select-none">
          <div className="flex">
            <CheckUnsel />
            <span className="text-sm font-medium text-gray-600 ms-[6px]">
              16개 선택
            </span>
          </div>
          <div className="flex">
            <div className="px6-button bg-color-white text-gray-700 rounded hover:bg-gray-100 transition-200">
              <Delete />
              <span className="ms-1">삭제</span>
            </div>
          </div>
        </div>

        <table className="w-full mt-4 border-collapse table-fixed border-spacing-0">
          <thead className="h-10 border-t border-b border-color-border text-sm text-gray-500 text-center">
            <tr className="">
              <th className="w-5"></th>
              <th className="w-14 ps-2.5"></th>
              <th className="ps-8 text-left font-medium">상품명</th>
              <th className="ps-8 w-[90px] font-medium">수집링크</th>
              <th className="ps-8 w-[365px] font-medium">오픈마켓 링크</th>
              <th className="ps-8 w-[100px] font-medium">메모</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            <tr className="h-16 border-b border-color-border">
              <td className="w-5 text-center">
                <div className="flex select-none">
                  <input className="appearance-none" type="checkbox" id="all" />
                  <label className="items-center" htmlFor="all">
                    <CheckUnsel />
                  </label>
                </div>
              </td>
              <td className="ps-2.5">
                <Image
                  className="rounded w-[46px] h-[46px] overflow-hidden"
                  src="/images/eximg_01.png"
                  width="46"
                  height="46"
                  alt="ex"
                />
              </td>
              <td className="ps-8">아이스 트레이 Type A</td>
              <td className="ps-8">
                <a className="flex w-full justify-center">
                  <Taobao className="w-8 h-8" />
                </a>
              </td>
              <td className="ps-8">
                <div className="flex flex-wrap justify-center mt-2">
                  <RegiMarket store={"스마트스토어"} status={"ready"} />
                  <RegiMarket store={"스마트스토어"} status={"ready"} />
                  <RegiMarket store={"쿠팡"} status={"error"} />
                  <RegiMarket store={"쿠팡"} status={"error"} />
                  <RegiMarket store={"11번가 글로벌"} status={"pending"} />
                </div>
              </td>
              <td className="ps-8">
                <div className="flex items-center">
                  <button className="h-7 py-2 px-3 rounded-full flex items-center text-xs bg-gray-300">
                    <Pen />
                    <span className="ms-1">메모</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr className="h-16 border-b border-color-border">
              <td className="w-5 text-center">
                <div className="flex select-none">
                  <input className="appearance-none" type="checkbox" id="all" />
                  <label className="items-center" htmlFor="all">
                    <CheckUnsel />
                  </label>
                </div>
              </td>
              <td className="ps-2.5">
                <Image
                  className="rounded w-[46px] h-[46px] overflow-hidden"
                  src="/images/eximg_01.png"
                  width="46"
                  height="46"
                  alt="ex"
                />
              </td>
              <td className="ps-8">아이스 트레이 Type A</td>
              <td className="ps-8">
                <a className="flex w-full justify-center">
                  <Taobao className="w-8 h-8" />
                </a>
              </td>
              <td className="ps-8">
                <div className="flex flex-wrap justify-center mt-2">
                  <RegiMarket store={"스마트스토어"} status={"ready"} />
                  <RegiMarket store={"스마트스토어"} status={"ready"} />
                  <RegiMarket store={"쿠팡"} status={"error"} />
                  <RegiMarket store={"쿠팡"} status={"error"} />
                  <RegiMarket store={"11번가 글로벌"} status={"pending"} />
                </div>
              </td>
              <td className="ps-8">
                <div className="flex items-center">
                  <button className="round-small-button">
                    <Pen />
                    <span className="ms-1">메모</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pt-10 flex justify-center items-center">
          <button className="page-button">
            <PrevPage />
          </button>
          <button className="page-button text-sm font-normal transition-200 bg-color-bg-green10 text-color-main ">
            1
          </button>
          <button className="page-button text-sm font-normal transition-200 text-gray-500">
            2
          </button>
          <button className="page-button rotate-180">
            <PrevPage />
          </button>
        </div>
      </div>
    </>
  );
}
