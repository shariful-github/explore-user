import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext, useRef } from 'react';
import { DataContext } from '../providers/DataContext';

const Header = () => {
    const { users, setUsers, setSearchKey, scrollToCreateUser } = useContext(DataContext);


    const sortByName = () => {
        const sorted = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
        setUsers(sorted);
    }
    const sortByEmail = () => {
        const sorted = [...users].sort((a, b) => a.email.localeCompare(b.email));
        setUsers(sorted);
    }
    const sortByCompany = () => {
        const sorted = [...users].sort((a, b) => a.company.name.localeCompare(b.company.name));
        setUsers(sorted);
    }

    return (
        <div className="navbar rounded-b-md">
            {/* ------------Small Device ------------*/}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a>Create User</a></li>
                        <li>
                            <a>Sort By</a>
                            <ul className="p-2">
                                <li onClick={() => sortByName()}><a>Name</a></li>
                                <li onClick={() => sortByEmail()}><a>Email</a></li>
                                <li onClick={() => sortByCompany()}><a>Company Name</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link className='flex items-center'>
                    <img className='w-14 p-2' src={logo} alt="" />
                    <h1 className='sm:text-2xl text-orange-400 font-bold'>Explore User</h1>
                </Link>
            </div>
            {/* ------------Large Device ------------*/}
            <div className="navbar-center z-10 hidden lg:flex mr-24">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-lg mr-5'><Link to={'/'}>Home</Link></li>
                    <li className='font-semibold text-lg mr-5'><a onClick={()=>scrollToCreateUser()}>Create User</a></li>
                    <li className='font-semibold text-lg mr-5'>
                        <details>
                            <summary>Sort By</summary>
                            <ul className="p-2">
                                <li onClick={() => sortByName()}><a>Name</a></li>
                                <li onClick={() => sortByEmail()}><a>Email</a></li>
                                <li onClick={() => sortByCompany()}><a>Company</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className='ml-auto'>
                <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="Search" className="input input-bordered md:w-auto w-44" />
            </div>
        </div>
    );
};

export default Header;