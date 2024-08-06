// Dependencies
import { usePage } from '@inertiajs/react';
import { useEffect, Fragment } from 'react';

// Providers
import { ToastContainer } from "react-toastify";

// Hooks
import useToast from '@/hooks/useToast';

// Types
import { ToastOptions } from 'react-toastify';

// Assets
import 'react-toastify/dist/ReactToastify.css';

const NotificationProvider: RPO = ({ children }) => {
  const { notification } = usePage().props as unknown as PageProps;
  const toast = useToast();

  // Toast main options
  const toastsOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'colored',
  };

  // Render notifications
  useEffect(() => {
    if (notification) {
      toast(notification.message, notification.type);
    }
  }, [notification]);

  return (
    <Fragment>
      {children}
      <ToastContainer {...toastsOptions} />
    </Fragment>
  )
}

export default NotificationProvider;
