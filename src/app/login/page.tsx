"use client";
import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      {/* PC화면 */}
      <div className="pc-background hidden md:flex w-screen h-screen font-Pretendard justify-center items-center bg-[url('/images/login_bg.png')] bg-cover">
        <div className="logo-frame flex flex-col w-[500px] justify-center items-center bg-color-white py-16 px-12 rounded-2xl drop-shadow-login">
          <Image src="/images/logo_vertical.svg" width="114" height="83" alt="main-logo"/>
          <div className="mt-7 text-lg font-semibold">
            소셜 계정으로 간편하게 로그인하세요
          </div>
          <div className="buttons-frame mt-9 w-full">
            <a href="http://localhost:8000/auth/login/naver" className="login-button bg-naver-button text-color-white hover:bg-naver-button-hover">
              <Image className="mr-2" src="/images/btn_naver_icon.svg" width="18" height="18" alt="naver-logo" />
              <span>네이버로 로그인하기</span>
            </a>
            <a href="http://localhost:8000/auth/login/kakao" className="login-button bg-kakao-button hover:bg-kakao-button-hover">
              <Image className="mr-2" src="/images/btn_kakao_icon.svg" width="18" height="18" alt="kakao-logo" />
              <span>카카오로 로그인하기</span>
            </a>
          </div>
        </div>
      </div>

      {/* 모바일화면 */}
      <div className="md:hidden font-Pretendard w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col items-center mb-44">
          <Image src="/images/logo_vertical.svg" width="114" height="83" alt="main-logo"/>
          <div className="mt-7 text-lg font-semibold">
            소셜 계정으로 간편하게 로그인하세요
          </div>
        </div>
        <div className="fixed bottom-0 w-full py-12 px-12">
          <a href="http://localhost:8000/auth/login/naver" className="login-button bg-naver-button text-color-white hover:bg-naver-button-hover">
            <Image className="mr-2" src="/images/btn_naver_icon.svg" width="18" height="18" alt="naver-logo" />
            <span>네이버로 로그인하기</span>
          </a>
          <a href="http://localhost:8000/auth/login/kakao" className="login-button bg-kakao-button hover:bg-kakao-button-hover">
            <Image className="mr-2" src="/images/btn_kakao_icon.svg" width="18" height="18" alt="kakao-logo" />
            <span>카카오로 로그인하기</span>
          </a>
        </div>
      </div>
    </>
  );
}