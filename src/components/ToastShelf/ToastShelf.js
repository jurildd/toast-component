import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';

import useEscapeKey from '../../hooks/use-escape-key';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);
  useEscapeKey(dismissAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
    {toasts.map(({ id, message, variant }) => (
      <li
        key={id}
        className={styles.toastWrapper}
      >
        <Toast
          id={id}
          variant={variant}
        >
          {message
        }</Toast>
      </li>
    ))}
    </ol>
  );
}

export default ToastShelf;
