"use client";
import React, { useState } from "react";
import Image from "next/image";

import CheckUnsel from "../../../../public/images/icon-20-roundcheckUnsel.svg";
import CheckSel from "../../../../public/images/icon-20-roundcheck-black.svg";
import TrendingDown from "../../../../public/images/icon-20-trendingDown.svg";
import TrendingUp from "../../../../public/images/icon-20-trendingUp.svg";
import RightArrow from "../../../../public/images/icon-10-right.svg";

// 매출처 선택
import Payment from "../../../../public/images/icon-20-payment.svg";
import BoxBlue from "../../../../public/images/icon-20-box-blue.svg";
import PurpleEdd from "../../../../public/images/icon-20-productEdd-purple.svg";
import YellowEdit from "../../../../public/images/icon-20-productEdit-yellow.svg";

// 인증
import Shield from "../../../../public/images/shield-fill.svg";

// 환율
import CNYFlag from "../../../../public/images/flag-CNY.svg";
import USDFlag from "../../../../public/images/flag-USD.svg";
import GBPFlag from "../../../../public/images/flag-GBP.svg";
import EURFlag from "../../../../public/images/flag-EUR.svg";

interface NoticeProps {
  index: number;
  date: string;
  context: string;
}

export default function Home() {
  const storesList: string[] = [
    "스마트스토어",
    "쿠팡",
    "G마켓",
    "옥션",
    "11번가 글로벌",
    "11번가 국내",
    "롯데온",
    "인터파크",
  ];
  const [checkedStores, setCheckedStores] = useState(new Set(storesList));
  const [allChecked, setAllChecked] = useState(true);

  const noticeList: NoticeProps[] = [
    {
      index: 8,
      date: "2024-01-02",
      context: "로디에도 직원 계정 기능이 새로 생겼습니다.",
    },
    {
      index: 7,
      date: "2024-01-01",
      context: "로디에 처음 오셨나요?",
    },
    {
      index: 6,
      date: "2023-12-31",
      context: "무료체험 문의 관련 공지사항입니다.",
    },
    {
      index: 5,
      date: "2023-12-30",
      context: "사진 편집기 오류 관련 에러 해결되었습니다.",
    },
    {
      index: 4,
      date: "2023-12-29",
      context: "로디에 처음 오셨나요?",
    },
  ];

  const toggleStoreCheck = (store: string) => {
    setCheckedStores((prev) => {
      const newChecked = new Set(prev);
      if (newChecked.has(store)) {
        newChecked.delete(store);
      } else {
        newChecked.add(store);
      }
      return newChecked;
    });
    console.log(checkedStores);
  };

  const toggleAllCheck = () => {
    if (allChecked) {
      setCheckedStores(new Set());
      setAllChecked(false);
    } else {
      setCheckedStores(new Set(storesList));
      setAllChecked(true);
    }
  };

  return (
    <>
      <div className="header-text">RODI님의 1월 현황</div>
      <div className="mt-6 w-full h-10 flex justify-between items-center">
        <div className="sub-header">매출처 선택</div>

        {/* 체크 버튼 */}
        <div className="flex text-gray-500 text-xs font-medium">
          <div className="me-4 flex select-none">
            <input
              className="appearance-none"
              type="checkbox"
              id="all"
              checked={allChecked}
              onChange={toggleAllCheck}
            />
            <label className="flex items-center" htmlFor="all">
              {allChecked ? <CheckSel /> : <CheckUnsel />}
              <span className="ps-[6px]">전체</span>
            </label>
          </div>
          {storesList.map((store) => (
            <React.Fragment key={store}>
              <div key={store} className="me-4 flex select-none">
                <input
                  className="appearance-none"
                  type="checkbox"
                  id={store}
                  checked={checkedStores.has(store)}
                  onChange={() => toggleStoreCheck(store)}
                />
                <label className="flex items-center" htmlFor={store}>
                  {checkedStores.has(store) ? <CheckSel /> : <CheckUnsel />}
                  <span className="ps-[6px]">{store}</span>
                </label>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 요약 */}
      <div className="w-full mt-2 p-6 rounded-xl items-center bg-gray-200 grid grid-cols-4 gap-4">
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-bg-green30">
              <Payment />
            </div>
            <div className=" text-gray-800">이번달 매출</div>
          </div>
          <div className="text-right text-2xl font-bold mt-2">1,924,300원</div>
          <div className="flex w-full justify-end items-center mt-[5px]">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-red">
              12월대비 20%
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-qna">
              <BoxBlue />
            </div>
            <div className=" text-gray-800">이번달 구매 건수</div>
          </div>
          <div className="text-right text-2xl font-bold mt-3">300건</div>
          <div className="flex w-full justify-end items-center mt-[5px]">
            <TrendingUp />
            <div className="ms-1 text-xs font-medium text-color-blue">
              12월대비 20%
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-bg-violet">
              <PurpleEdd />
            </div>
            <div className=" text-gray-800">이번달 상품 수집 수</div>
          </div>
          <div className="text-right text-2xl font-bold mt-3">854개</div>
          <div className="flex w-full justify-end items-center mt-[5px]">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-red">
              12월대비 20%
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-help-center">
              <YellowEdit />
            </div>
            <div className=" text-gray-800">이번달 상품 등록 수</div>
          </div>
          <div className="text-right text-2xl font-bold mt-3">300개</div>
          <div className="flex w-full justify-end items-center mt-[5px]">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-red">
              12월대비 20%
            </div>
          </div>
        </div>
      </div>

      {/* RODI Plan */}
      <div className="w-full mt-6 grid grid-cols-2 gap-6">
        <div className="text-gray-600">
          <div className="sub-header">RODI Plan</div>
          <div className="w-full mt-4 rounded-xl flex px-6 py-5 border border-color-border">
            <div className="w-1/2 flex flex-col border-e border-color-border">
              <div className="text-sm">나의 요금제</div>
              <div className="mt-2 text-xl font-bold text-color-main">
                Pro Plan
              </div>
              <div className="mt-1 text-xs text-color-main">
                26일 남음 2024.02.13까지
              </div>
              <a className="flex items-center mt-5 text-sm text-gray-900 font-medium hover:underline">
                <span className="me-1">요금제 결제하러 가기</span>
                <RightArrow />
              </a>
            </div>
            <div className="w-1/2 flex flex-col ps-6 border-color-border">
              <div className="text-sm">사업자 인증</div>
              <div className="flex mt-2 text-xl font-bold text-color-blue">
                <Shield />
                <span>인증</span>
              </div>
              <div className="flex mt-1 text-xs">
                <div className="text-gray-500 no-underline">473-02-08982</div>
                <div className="text-color-border">&nbsp;|&nbsp;</div>
                <div className="text-color-main">대표계정</div>
              </div>
              <a className="flex items-center mt-5 text-sm text-gray-900 font-medium hover:underline">
                <span className="me-1">직원 계정 추가하러 가기</span>
                <RightArrow />
              </a>
            </div>
          </div>
        </div>

        {/* 현재 환율 */}
        <div className="text-gray-600">
          <div className="sub-header">현재 환율</div>
          <div className="w-full h-[158px] mt-4 rounded-xl py-5 flex border items-center border-color-border">
            <div className="w-1/4 flex flex-col px-4 border-e border-color-border">
              <div className="flex items-center">
                <CNYFlag />
                <div className="ms-2">
                  <div className="text-gray-900 text-sm font-semibold">
                    중국
                  </div>
                  <div className="text-gray-500 text-[10px]">CNY</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-4 text-right">위안</div>
              <div className="text-gray-900 font-bold text-right">123원</div>
              <div className="flex justify-end items-center mt-[3px]">
                <TrendingDown />
                <div className="text-color-red text-xs font-medium ms-1">
                  32원
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col px-4 border-e border-color-border">
              <div className="flex items-center">
                <USDFlag />
                <div className="ms-2">
                  <div className="text-gray-900 text-sm font-semibold">
                    미국
                  </div>
                  <div className="text-gray-500 text-[10px]">USD</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-4 text-right">달러</div>
              <div className="text-gray-900 font-bold text-right">1,320원</div>
              <div className="flex justify-end items-center mt-[3px]">
                <TrendingDown />
                <div className="text-color-red text-xs font-medium ms-1">
                  32원
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col px-4 border-e border-color-border">
              <div className="flex items-center">
                <GBPFlag />
                <div className="ms-2">
                  <div className="text-gray-900 text-sm font-semibold">
                    영국
                  </div>
                  <div className="text-gray-500 text-[10px]">GBP</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-4 text-right">
                파운드
              </div>
              <div className="text-gray-900 font-bold text-right">1,673원</div>
              <div className="flex justify-end items-center mt-[3px]">
                <TrendingUp />
                <div className="text-color-blue text-xs font-medium ms-1">
                  32원
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col px-4 border-e border-color-border">
              <div className="flex items-center">
                <EURFlag />
                <div className="ms-2">
                  <div className="text-gray-900 text-sm font-semibold">
                    유럽
                  </div>
                  <div className="text-gray-500 text-[10px]">EUR</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-4 text-right">유로</div>
              <div className="text-gray-900 font-bold text-right">1,500원</div>
              <div className="flex justify-end items-center mt-[3px]">
                <TrendingDown />
                <div className="text-color-red text-xs font-medium ms-1">
                  32원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RODI 공지사항 */}
      <div className="w-full mt-6 mb-3 grid grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between">
            <div className="sub-header">RODI 공지사항</div>
            <a
              href="/admin/notice"
              className="flex items-center text-gray-900 text-sm font-semibold hover:underline"
            >
              <span className="me-1">더보기</span>
              <RightArrow />
            </a>
          </div>
          <div className="mt-4 border-t border-color-border">
            {noticeList.map((notice) => (
              <React.Fragment key={notice.index}>
                <a
                  href={`/admin/notice/${notice.index}`}
                  className="flex items-center justify-between px-2 py-3 border-b border-color-border hover:bg-gray-200"
                >
                  <span className="text-gray-900 text-sm font-semibold overflow-hidden text-ellipsis line-clamp-1 w-[calc(100%_-_100px)]">
                    {notice.context}
                  </span>
                  <span className="text-gray-500 text-xs">{notice.date}</span>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Q&A 및 고객센터 */}
        <div>
          <div className="sub-header">Q&A 및 고객센터</div>
          <div className="w-full h-[226px] mt-4 rounded-xl grid grid-cols-3 gap-4 select-none">
            <a className="relative h-full rounded-xl p-6 bg-color-guide group">
              <div className="text-gray-800 text-xs mb-1">
                로디에 처음 오셨나요?
              </div>
              <div className="text-lg font-bold transition-200 group-hover:text-color-main">
                RODI
                <br />
                사용가이드
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_list.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
            <a className="relative h-full rounded-xl p-6 bg-color-qna group">
              <div className="text-gray-800 text-xs mb-1">
                궁금한 점이 있으신가요?
              </div>
              <div className="text-lg font-bold transition-200 group-hover:text-color-blue">
                RODI
                <br />
                Q&A
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_qa.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
            <a className="relative h-full rounded-xl p-6 bg-color-help-center group">
              <div className="text-gray-800 text-xs mb-1">
                상담이 필요하신가요?
              </div>
              <div className="text-lg font-bold transition-200 group-hover:text-color-help-hover">
                RODI
                <br />
                고객센터
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_cs.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
