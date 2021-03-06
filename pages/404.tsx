import Link from "next/link";
import React from "react";

import { Navbar } from "@/components/Navbar";
import NotFoundSeo from "@/components/seo/NotFoundSeo";
import { usePaths } from "@/lib/paths";

const Custom404: React.VFC = () => {
  const paths = usePaths();

  return (
    <>
      <NotFoundSeo />
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="py-10">
          <header className="mb-4">
            <div className="max-w-7xl mx-auto px-8">Page not found</div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto px-8">
              <Link href={paths.$url()}>
                <a>Go back home</a>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Custom404;
