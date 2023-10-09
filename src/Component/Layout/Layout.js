import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main >
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "sudhanshu kushwaha",
  description: "this is the portfolio website of sudhanshu kushwaha",
  keywords: "sudhanshu kushwaha website sudhanshukushwahacom sudhanshu kushwaha com website sudhanshu portfolio in react js",
  author: "sudhanshu kushwaha",
};

export default Layout;
