import './Aside.css';

function Aside(): JSX.Element {
    return (
        <div className="Aside">
            <nav>
                <a href="#h">Home</a>
                <a href="#p">Products</a>
                <a href="#a">About</a>
            </nav>
        </div>
    );
}

export default Aside;