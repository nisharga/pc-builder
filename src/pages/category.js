import Image from "next/image";

import Ram from "../../public/images/ram.jpg";
import Cpu from "../../public/images/cpu.jpg";
import Motherboard from "../../public/images/motherboard.jpg";
import Power from "../../public/images/powersupply.jpg";
import Storage from "../../public/images/stroage.jpg";
import Monitor from "../../public/images/monitor.jpg";
import Casing from "../../public/images/casing.jpg";
import KeyBoard from "../../public/images/keyboard.jpg";
import Mouse from "../../public/images/mouse.jpg";
import SingleCategory from "@/components/singleCategory/singleCategory";
import RootLayout from "@/layout/layout";
import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";

const Category = ({ pcData }) => {
  const data = [
    { id: 1, title: "Ram", url: "/category/ram" },
    { id: 2, title: "Cpu", url: "/category/cpu" },
    { id: 3, title: "Motherboard", url: "/category/motherboard" },
    { id: 4, title: "Power", url: "/category/power-supply-unit" },
    { id: 5, title: "Storage", url: "/category/storage" },
    { id: 6, title: "Monitor", url: "/category/monitor" },
    { id: 7, title: "Casing", url: "/category/casing" },
    { id: 8, title: "KeyBoard", url: "/category/keyboard" },
    { id: 9, title: "Mouse", url: "/category/mouse" },
  ];
  return (
    <div className="container px-6">
      <div className="md:w-3/12 mx-auto text-center mt-12 mb-10">
        <h4 className="text-[#0000ff] mb-3 text-lg">All Product category</h4>
        <h2 className="text-3xl uppercase border-y-4 py-3">category</h2>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        {data?.map((value) => (
          <SingleCategory key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
