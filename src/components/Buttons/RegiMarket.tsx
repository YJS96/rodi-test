import React from "react";
import Image from "next/image";


interface RegiMarketProps {
  store: String;
  status: String;
}

export default function RegiMarket({ store, status }: RegiMarketProps) {
  var textColor: string = "main";

  if (status === "pending") {
    textColor = "pending";
  } else if (status === "error") {
    textColor = "red";
  }

  return (
    <button className="flex py-1 px-2 rounded bg-gray-200 me-2 mb-2 items-center justify-center">
      {status === "ready" && <Image src="/images/icon-16-roundcheck-main.svg" width="12" height="12" alt="ready" />}
      {status === "pending" && <Image src="/images/icon-12-emergency-fill.svg" width="12" height="12" alt="ready" />}
      {status === "error" && <Image src="/images/icon-16-information-red.svg" width="12" height="12" alt="ready" />}
      <span
        className={`ms-[3px] text-[11px] font-medium text-color-${textColor}`}
      >
        {store}
      </span>
    </button>
  );
}
