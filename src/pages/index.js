import RootLayout from "@/layout/layout";

import { Inter } from "next/font/google";
// import Bannar from "./../components/bannar/bannar";
import SingleCategory from "@/components/singleCategory/singleCategory";
import Singleproduct from "@/components/singleproduct/singleproduct";

export default function Home({ allProduct }) {
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
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const randomSixData = shuffle(allProduct);
  console.log(randomSixData.length);

  // const NoSSR = dynamic(() => import("../components/no-ssr"), { ssr: false });

  return (
    <>
      {/* <Bannar /> */}
      {/*  <div className="md:w-3/12 mx-auto text-center mt-12 mb-10">
        <h4 className=" mb-3 text-lg">Check & Get Your Desired Product!</h4>
        <h2 className="text-3xl uppercase border-y-4 py-3 text-[#0000ff]">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mx-20">
        {randomSixData?.slice(0, 6)?.map((data) => (
          <Singleproduct data={data} key={data._id} />
        ))}
      </div>

      <div className="container">
        <div className="md:w-3/12 mx-auto text-center mt-12 mb-10">
          <h4 className=" mb-3 text-lg">Exclusive</h4>
          <h2 className="text-3xl uppercase border-y-4 py-3 text-[#0000ff]">
            Featured Category
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 lg:px-28 px-20">
          {data?.map((value) => (
            <SingleCategory key={value.id} value={value} />
          ))}
        </div>
      </div>
 */}
      Hi HEllo
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts"
  );
  const data = await res.json();
  return {
    props: {
      allProduct: data.data,
    },
    revalidate: 3600,
  };
};
