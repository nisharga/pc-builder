import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import Link from "next/link";
import Ssgmenu from "@/components/ssgmenu/ssgmenu";
const { Header, Content, Footer } = Layout;
import { Button } from "antd";
import Dropd from "@/components/dropd/dropd";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      {/* <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" className="text-[#0000ff] font-bold text-2xl">
          Dream Tech
        </Link>
        <Ssgmenu />
        <div className="w-[200px] ml-4 lg:block d-none">
          
        </div>
      </Header> */}

      {/* navbar */}
      <Dropd />
      {children}
      <footer class="footer footer-center p-4 text-base-content bg-black">
        <div class="container text-center">
          <p class="text-white">
            Copyright © Nisharga Kabir. All rights reserved.
          </p>
        </div>
      </footer>
    </Layout>
  );
};
export default RootLayout;
