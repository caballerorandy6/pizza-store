import Head from "next/head";
import Header from "./header";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`Pizza Store - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />
      {children}
    </>
  );
};

export default Layout;
