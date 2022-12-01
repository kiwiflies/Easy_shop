import Head from "next/head";
import HeaderMain from "../components/Header/HeaderMain/HeaderMain";
import HeaderSec from "../components/Header/HeaderSec/HeaderSec";
import HeaderThird from "../components/Header/HeaderThird/HeaderThird";
import Footer from "../components/Footer/Footer";
import SwitchComponentsHOC from "../HOC/SwitchComponentsHOC/SwitchComponentsHOC";
import ZoomModal from "../components/ZoomModal/ZoomModal";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";


function MainLayout({ children, pagetitle, description, keywords }) {

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
        <SwitchComponentsHOC
          list={[
            { HeaderMain: <HeaderMain /> },
            { HeaderSec: <HeaderSec /> },
            { HeaderThird: <HeaderThird /> },
          ]}
        />
        <main>
          <ZoomModal />
            <div className="container">
            {pagetitle !== 'Not Found' && <Breadcrumbs/>}
           </div>
          <div className={pagetitle === 'Not Found' ? "fullWidth" : "container"}>{children}</div>
        </main>
        <Footer />
      </Provider>
    </>
  );
}
export default MainLayout;
