import DropdownMenu from "@/components/shared/menu/dropdownMenu";
import RootLayout from "@/layout/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h2>PC Builder Home</h2>
      <DropdownMenu />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
