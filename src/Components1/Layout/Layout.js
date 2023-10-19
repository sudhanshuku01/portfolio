import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author, type, url }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        {/* End standard metadata tags */}
        {/* Facebook tags */}

        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="sudhanshukushwaha" />

        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:site" content="@sudhanshukushwaha" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
      </Helmet>
      <Header />
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Sudhanshu Kushwaha",
  description: "sudhanshu kushwaha personal portfolio website",
  keywords:"sudhanshu kushwaha,sudhanshu kushwaha com, sudhanshukushwaha,sudhanshukushwahacom,sudhanshu website,sudhanshu,sudhanshu portfolio,sudhanshu website,sudhanshu nituk,sudhanshu eee nituk,sudhanshu urain,sudhanshu urain lakhisarai,sudhanshu bihar,sudhanshu india",
  author: "sudhanshu kushwaha",
  type:"coding",
  url:"sudhanshukushwaha.com"
};

export default Layout;
