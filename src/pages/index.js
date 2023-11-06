import DropdownMenu from "@/components/shared/menu/dropdownMenu";
import RootLayout from "@/layout/layout";

import { Inter } from "next/font/google";
import Bannar from "./../components/bannar/bannar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Bannar />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
