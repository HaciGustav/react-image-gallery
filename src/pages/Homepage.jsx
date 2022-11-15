import Picture from '../components/Picture';
import Header from '../components/Header';
import data from '../helper/data';
import Footer from '../components/Footer';
import '../styles/homepage.css';

const PhotoRenderer = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                {data.map((item) => (
                    <Picture
                        src={item.src.large}
                        photographer={item.photographer}
                        key={item.src.large.substring(33, 41)}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default PhotoRenderer;
