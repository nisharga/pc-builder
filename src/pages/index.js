import SingleCategory from "@/components/singleCategory/singleCategory";
import Singleproduct from "@/components/singleproduct/singleproduct";
import Bannar from "@/components/bannar/bannar";
import RootLayout from "@/layout/layout";
import Featuredproduct from "@/components/featuredProduct/FeaturedProduct";

export default function Home({ allProduct }) {
  /* const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const randomSixData = shuffle(allProduct); */
  // console.log(randomSixData.length, "six");
  // console.log(allProduct?.length);
  return (
    <>
      <Bannar />
      <Featuredproduct allProduct={allProduct} />
      {/* <div className="md:w-3/12 mx-auto text-center mt-12 mb-10">
        <h4 className=" mb-3 text-lg">Check & Get Your Desired Product!</h4>
        <h2 className="text-3xl uppercase border-y-4 py-3 text-[#0000ff]">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mx-20">
        {randomSixData
          ? randomSixData.map((data) => (
              <Singleproduct data={data} key={data._id} />
            ))
          : "Loading"}
      </div> */}

      {/* <div className="container">
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
      </div> */}
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
  };
};
