import Head from "next/head";
import Footer from "../components/Footer/Footer";
import ZoomModal from "../components/ZoomModal/ZoomModal";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Header from "../components/Header";


function MainLayout({ children, pagetitle, description, keywords, categories }) {

  return (
    <>
      <Head>
        <title>Joheny | {pagetitle}</title>
        <meta name="keywords" content={keywords} />
        <meta description="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <Provider store={store}>
        <Header categories={categories} />
        <main>
          <ZoomModal />
            <div className="container">
            {pagetitle !== 'Not Found' && <Breadcrumbs/>}
           </div>
          <div className={pagetitle === 'Not Found' ? "fullWidth" : "container"}>{children}</div>
        </main>
        <Footer categories={categories} />
      </Provider>
    </>
  );
}

export default MainLayout;
