import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [searchKey, setSearchKey] = useState('');

  return (
    <DataContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;