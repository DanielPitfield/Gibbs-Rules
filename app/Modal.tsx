import React from "react";

import styles from "/styles/Modal.module.scss";

interface ModalProps {
  name: string;
  mode: "default" | "info" | "success" | "error";
  title: React.ReactNode;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className={styles.outerWrapper} data-modal-name={props.name}>
      <div className={styles.innerWrapper}>
        <div className={styles.header} data-mode={props.mode}>
          <h3 className={styles.title}>{props.title}</h3>
          <button onClick={props.onClose}>
            X
          </button>
        </div>
        <div className={styles.body}>{props.children}</div>
      </div>
    </div>
  );
};
