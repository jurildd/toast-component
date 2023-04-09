import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
      const newToast = {
          id: Math.random(),
          message,
          variant,
      };
      setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
	const newToasts = toasts.filter((toast) => {
		return toast.id !== id;
	});
	setToasts(newToasts);
  }

  function dismissAllToasts() {
	setToasts([])
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast, dismissAllToasts }} >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
