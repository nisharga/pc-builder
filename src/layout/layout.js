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
          <Button type="default" block size="large" className="text-blue-500">
            PC Builder
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
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
