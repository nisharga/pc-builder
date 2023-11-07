import SingleCategory from "@/components/singleCategory/singleCategory";
import Singleproduct from "@/components/singleproduct/singleproduct";
import Bannar from "@/components/bannar/bannar";
import RootLayout from "@/layout/layout";
import Featuredproduct from "@/components/featuredProduct/FeaturedProduct";
import FeaturedCategory from "@/components/featuredCategory/featuredCategory";
import { useSession } from "next-auth/react";

export default function Home({ allProduct }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Bannar />
      <Featuredproduct allProduct={allProduct} key={allProduct._id} />
      <FeaturedCategory />
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
