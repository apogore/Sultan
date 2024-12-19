"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, ...notification }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 3000);
  }, []);

  const removeNotification = (id) => {

    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isHiding: true } : notif
      )
    );

    // Удалить из массива после завершения анимации
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 300); 
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notifications-container">
        {notifications.map((notif, index) => (
          <Notification
            key={notif.id}
            {...notif}
            onClose={() => removeNotification(notif.id)}
            style={{
              top: `${index * 80}px`,
              animation: notif.isHiding
                ? "slideOut 0.3s ease-in forwards"
                : "slideIn 0.3s ease-out",
            }}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
