

import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
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