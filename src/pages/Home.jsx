import { useEffect, useState } from 'react';
import UserCard from '../shared/UserCard';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])
    return (
        <div>
            {/* call UserCard */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 px-10 lg:px-0'>
                {
                    users.map(user =>
                        <UserCard
                            key={user.id}
                            user={user}
                        ></UserCard>
                    )
                }
            </div>
            {/* form */}
            <div>

            </div>
        </div>
    );
};

export default Home;