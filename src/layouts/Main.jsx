
import Home from '../pages/Home';
import Header from './../shared/Header';

const Main = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto text-gray-600'>
                <Header></Header>
                <Home></Home>
            </div>
        </div>
    );
};

export default Main;