import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 mt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Add User</a></li>
                        <li>
                            <a>Sort By</a>
                            <ul className="p-2">
                                <li><a>Name</a></li>
                                <li><a>Email</a></li>
                                <li><a>Company Name</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link>
                    <img className='w-14' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex mr-24">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-lg mr-5'><a>Home</a></li>
                    <li className='font-semibold text-lg mr-5'><a>Add User</a></li>
                    <li className='font-semibold text-lg mr-5'>
                        <details>
                            <summary>Sort By</summary>
                            <ul className="p-2">
                                <li><a>Name</a></li>
                                <li><a>Email</a></li>
                                <li><a>Company</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div>
            <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
            </div>
        </div>
    );
};

export default Header;