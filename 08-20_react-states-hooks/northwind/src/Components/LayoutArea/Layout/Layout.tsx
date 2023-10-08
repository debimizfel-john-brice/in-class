import Home from "../../HomeArea/Home/Home";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header></Header>
            </header>

            <aside>
                <Aside></Aside>
            </aside>

            <main>
                <Home></Home>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default Layout;