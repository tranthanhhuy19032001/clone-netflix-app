import Footer from '../components/Footer';
import Header from '../components/Header';

function HeaderFooterOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderFooterOnly;
