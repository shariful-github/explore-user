import React, { createContext, useRef, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const ref = useRef(null);

    const scrollToCreateUser = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <DataContext.Provider value={{ ref, scrollToCreateUser, users, setUsers, searchKey, setSearchKey }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;