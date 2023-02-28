// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';
// const cx = classNames.bind(styles);
// import { useSelector } from 'react-redux';
import Content from '../../components/Contents/Content';
import Intro from '../../components/Layout/components/Intro';
// import MoviesDetail from '../../components/MoviesDetail';

function Home() {
    // const { MovieDetail } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <Intro />
            <Content />
            {/* <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} /> */}
        </div>
    );
}

export default Home;
