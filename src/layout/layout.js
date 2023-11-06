import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import Link from "next/link";
import Ssgmenu from "@/components/ssgmenu/ssgmenu";
const { Header, Content, Footer } = Layout;
import { Button } from "antd";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
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
          <Link
            href="/pcbuilder"
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:text-[#fff] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto text-center"
          >
            PC Builder
          </Link>
        </div>
      </Header>
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
