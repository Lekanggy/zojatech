// toastUtility.js

import { toast } from 'react-toastify';

export const showToast = (message:string, type:string, styleName?: "my_toast") => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position:toast.POSITION.TOP_RIGHT,
        className: styleName,
        toastId: 'success',
        delay: 1000
      });
      break;
    case 'error':
      toast.error(message,{
        position:toast.POSITION.TOP_RIGHT,
        className: styleName,
        toastId: 'error',
        delay: 1000
      });
      break;
    case 'loading':
      toast.dark(message,{
        position:toast.POSITION.TOP_RIGHT,
        className: styleName,
        toastId: 'loading'
      });
      break;
    case 'warning':
      toast.warning(message,{
        position:toast.POSITION.TOP_RIGHT,
        className: styleName,
        toastId: 'warning'
      });
      break;
    default:
      toast(message, {
        position:toast.POSITION.TOP_RIGHT,
        className: styleName
      });
      break;
  }
};


