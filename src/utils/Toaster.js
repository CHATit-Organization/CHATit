import React from "react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext, createContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children}) => {
    const notify = (message, status) => {
        toast[status](message, { transition: Slide });
      };
  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
