import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    return (
        <DataContext.Provider value={{ users, setUsers, searchKey, setSearchKey }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;