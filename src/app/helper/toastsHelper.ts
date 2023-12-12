import { Id, toast } from 'react-toastify';

let currentToast:Id = '';

export const ToastHelper = () => {
  const position = toast.POSITION.TOP_RIGHT;
  const autoClose = 2000;
  const hideProgressBar = false;
  const theme = 'light'

  const notifySuccess = (message: string) => {

    if(!toast.isActive(currentToast))
      currentToast = toast.success(message, { position, autoClose, hideProgressBar, theme ,});
  };

  const notifyError = (message: string) => {

    if(!toast.isActive(currentToast))
      currentToast = toast.error(message, { position, autoClose, hideProgressBar, theme });
  };

  return { notifySuccess, notifyError };
};
