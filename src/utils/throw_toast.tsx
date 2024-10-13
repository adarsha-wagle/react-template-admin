import { toast, Slide } from 'react-toastify';

// Custom icon for success toast
const SuccessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10 17.2L4.8 12L6.22222 10.6L10 14.4L17.7778 6.60001L19.2 8.00001L10 17.2Z"
      fill="#217442"
    />
  </svg>
);

// Custom icon for error toast
const ErrorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10.2222 4.8H13.7778V11.2H10.2222V4.8ZM13.7778 13.6H10.2222V17.2H13.7778V13.6Z"
      fill="#c62828"
    />
  </svg>
);

export const throwSuccessToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
    icon: <SuccessIcon />, // Custom icon with color
    style: {
      backgroundColor: '#fafafa',
    },
  });
};

export const throwErrorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
    icon: <ErrorIcon />, // Custom icon with color
    style: {
      backgroundColor: '#fafafa',
    },
  });
};
