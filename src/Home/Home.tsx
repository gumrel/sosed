import Orig from './Orig_ymap';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader/Loader';

const Home = () => {
	return (
		<div className="w-full h-screen">
			{/* {items.map(({ response }, i) => (
        <h3 className="news-item__title">{response}</h3>
      ))} */}

			<p className="mt-10 mb-10 ">Yasha maps!</p>
			<Orig />
		</div>
	);
};

export default Home;
