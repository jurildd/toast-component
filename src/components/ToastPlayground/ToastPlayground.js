import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');
  const { toasts, createToast } = React.useContext(ToastContext);

  return (
      <div className={styles.wrapper}>
          <header>
              <img alt='Cute toast mascot' src='/toast.png' />
              <h1>Toast Playground</h1>
          </header>
          {toasts.length > 0 && <ToastShelf />}
          <form
              className={styles.controlsWrapper}
              onSubmit={(event) => {
                  event.preventDefault();
                  createToast(message, variant);
                  setMessage('');
                  setVariant(VARIANT_OPTIONS[0]);
              }}
          >
              <div className={styles.row}>
                  <label
                      htmlFor='message'
                      className={styles.label}
                      style={{ alignSelf: 'baseline' }}
                  >
                      Message
                  </label>
                  <div className={styles.inputWrapper}>
                      <textarea
                          id='message'
                          className={styles.messageInput}
                          value={message}
                          onChange={(event) => {
                              setMessage(event.target.value);
                          }}
                      />
                  </div>
              </div>

              <div className={styles.row}>
                  <div className={styles.label}>Variant</div>
                  <div
                      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  >
                      {VARIANT_OPTIONS.map((option) => (
                          <label
                              key={`variant-${option}`}
                              htmlFor={`variant-${option}`}
                          >
                              <input
                                  id={`variant-${option}`}
                                  type='radio'
                                  name='variant'
                                  value={option}
                                  checked={option === variant}
                                  onChange={(event) => {
                                      setVariant(event.target.value);
                                  }}
                              />
                              {option}
                          </label>
                      ))}
                  </div>
              </div>

              <div className={styles.row}>
                  <div className={styles.label} />
                  <div
                      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  >
                      <Button>Pop Toast!</Button>
                  </div>
              </div>
          </form>
      </div>
  );
}

export default ToastPlayground;
