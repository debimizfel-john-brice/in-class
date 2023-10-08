import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routing from '../Routing/Routing';
import './Layout.css';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <aside>
                <Aside />
            </aside>

            <main>
                <Routing />
            </main>

            <footer>
                <Footer />
            </footer>

            <ReactNotifications />
        </div>
    )
}
export default Layout;