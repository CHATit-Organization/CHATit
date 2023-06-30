import { useState, useContext, createContext, useEffect } from "react";


const PoolContext = createContext();

export const PoolProvider = ({ children }) => {
    
    const [poolQuestion, setPoolQuestion] = useState({
        question1: '',
        question2: '',
        question3: ''
      });
      
      const setPool = (e) => {
        setPoolQuestion(prevState => ({
          ...prevState,
          ...e.target.value
        }));
      };

  return (
    <PoolContext.Provider
      value={{
        poolQuestion,
        setPool
      }}
    >
      {children}
    </PoolContext.Provider>
  );
};

export const usePool = () => useContext(PoolContext);
