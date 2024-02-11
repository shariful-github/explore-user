import React, { useContext } from 'react';
import { DataContext } from '../providers/DataContext';

const CreateUser = () => {
    const { setUsers } = useContext(DataContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const companyName = event.target.companyName.value;
        const address = event.target.address.value;


        const newUser = {
            firstName, 
            lastName, 
            email, 
            company:{
                name: companyName,
            },
            address:{
                address: address,
            },
            image : 'https://i.postimg.cc/gjMyG3b9/only-me.png'
        }

        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(addedUser => setUsers(users => [...users, addedUser]))
    }

    return (
        <div className="glass card shrink-0 max-w-xl shadow-2xl md:mx-auto mx-5">
            <h1 className="text-2xl md:text-5xl font-bold text-center mt-5 md:mt-10">Create A User</h1>
            <form onSubmit={handleOnSubmit} className="card-body pt-0 md:pt-8">
                <div className='flex gap-5 flex-col md:flex-row'>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5 flex-col md:flex-row'>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered  w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name='companyName' placeholder="Company Name" className="input input-bordered  w-full" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" name='address' placeholder="Address" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-primary' type="submit" value='Create User' />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;