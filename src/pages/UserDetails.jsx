
import { useLoaderData, useLocation } from 'react-router-dom';
import notfound from '../assets/notfound.png'

const UserDetails = () => {
    const user = useLoaderData();
    const location = useLocation();

    if (location.pathname.includes('/users/101')) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <img src={notfound} alt="" />
                <div className='mx-1 sm:mx-0'>
                    <div role="alert" className="alert flex alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>User Not Found to the Database</span>
                    </div>
                </div>
            </div>
        )
    }

    const { firstName, lastName, email, image, address, company } = user;

    return (
        <div className='h-screen'>
            <div className="glass rounded-md mt-5 mb-14 mx-10">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    {/* user image */}
                    <div className='flex p-10'>
                        <div className='p-12 rounded-full border-2 border-orange-300 mx-auto'>
                            <img src={image} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-3 pl-5 lg:pl-0 pb-5 lg:pb-0'>
                        {/* ---------first name---------- */}
                        <div>
                            <span className="font-bold md:text-3xl">First Name: </span>
                            <span className="md:text-3xl">{firstName}</span>
                        </div>
                        {/* -------last name---------- */}
                        <div>
                            <span className="font-bold md:text-3xl">Last Name: </span>
                            <span className="md:text-3xl">{lastName}</span>
                        </div>
                        {/* ---------email-------- */}
                        <div>
                            <span className="font-bold md:text-3xl">Email: </span>
                            <span className="md:text-3xl">{email}</span>
                        </div>
                        {/* --------company name------ */}
                        <div>
                            <span className="font-bold md:text-3xl">Company Name: </span>
                            <span className="md:text-3xl">{company.name}</span>
                        </div>
                        {/* ----------address--------- */}
                        <div>
                            <span className="font-bold md:text-3xl">Address: </span>
                            <span className="md:text-3xl">{address.address}, {address.city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;