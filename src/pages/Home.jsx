import { useContext, useEffect, useRef, useState } from 'react';
import UserCard from '../shared/UserCard';
import { DataContext } from '../providers/DataContext';
import CreateUser from '../shared/CreateUser';

const Home = () => {
    const { users, setUsers, searchKey, ref } = useContext(DataContext);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])
    return (
        <div className='min-h-screen'>
            {/* call UserCard */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 px-10 lg:px-0'>
                {
                    users.filter(user =>
                        user.firstName.toLowerCase().includes(searchKey) ||
                        user.lastName.toLowerCase().includes(searchKey)
                    )
                        .map(user =>
                            <UserCard
                                key={user.id}
                                user={user}
                            ></UserCard>
                        )
                }
            </div>
            {/* Add user form */}
            <div ref={ref} className='my-20'>
                <CreateUser></CreateUser>
            </div>
        </div>
    );
};

export default Home;