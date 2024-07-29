import React, { createContext, useState } from 'react';

export const SongPlayerContext = createContext();

export const SongPlayerProvider = ({ children }) => {
  const [playingSong, setPlayingSong] = useState(null);

  return (
    <SongPlayerContext.Provider value={{ playingSong, setPlayingSong }}>
      {children}
    </SongPlayerContext.Provider>
  );
};

