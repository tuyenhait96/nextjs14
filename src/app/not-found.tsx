import Link from "next/link";
import React from "react";

const IconArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>;
const PageNotFound = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-5xl">404</h1>
      <h2 className="mb-5">Page not found</h2>
      <Link href={"/"} className="underline flex items-center gap-2 hover:text-primary">
        {IconArrowLeft}
        Trang chủ
      </Link>
    </div>
  );
};

export default PageNotFound;
