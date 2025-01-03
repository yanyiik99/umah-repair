import React, { createContext, useContext } from 'react';
import { notification } from 'antd';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    const showAlert = (status, title, description) => {
        api[status]({
            message: title,
            description: description,
            duration: 3, // Duration in seconds
        });
    };

    return (
        <NotificationContext.Provider value={showAlert}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    return useContext(NotificationContext);
};
