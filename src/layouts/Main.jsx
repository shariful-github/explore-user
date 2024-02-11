
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './../shared/Header';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto text-gray-600 min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;