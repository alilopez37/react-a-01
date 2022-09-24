import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
      );
}

export default Layout;