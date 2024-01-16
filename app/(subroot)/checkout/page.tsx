import { ChevronLeft } from "lucide-react";

import SectionLayout from "@/layouts/sectionLayout";

export default function Page() {
  return (
    <SectionLayout className="relative px-8 py-20">
      <div className="absolute left-8 top-4 inline-flex items-center gap-1 align-baseline lg:hidden">
        <ChevronLeft stroke="#605F5F" className="h-3 w-3" />
        <p className="font-inter text-sm font-medium text-[#605F5F]">back</p>
      </div>

      <div className="space-y-6 pb-20 lg:space-y-10">
        <h1 className="text-center font-poppins text-[40px] font-medium text-[#141718]">
          Check Out
        </h1>
        <div className="flex items-center justify-center gap-4 align-baseline">
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-medium text-[#38CB89] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#38CB89] font-inter text-xs text-white md:inline-flex">
              1
            </span>
            Shopping cart
          </p>
          <p className="relative min-w-max pr-4 font-inter text-sm font-normal text-[#141718] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#141718] font-inter text-xs text-white md:inline-flex">
              2
            </span>
            Checkout details
          </p>
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-normal text-[#605F5F] before:absolute before:right-0 before:content-['/'] last:before:content-['']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#605F5F] font-inter text-xs text-white md:inline-flex">
              3
            </span>
            Order complete
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
