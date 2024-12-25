import { toast } from "react-toastify";

const defaultToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const showSuccessToast = (content, options = {}) => {
  toast.success(content, { ...defaultToastOptions, ...options });
};

export const showErrorToast = (content, options = {}) => {
  toast.error(content, { ...defaultToastOptions, ...options });
};
