import { Modal } from "@mui/material";
import React, { FC, useState } from "react";
import Loading from "../../assets/images/loading.gif";

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gif: {
    width: "100px",
  },
};

interface Props { 
    isOpen: boolean
}

const ModalLoader:FC<Props> = ({isOpen}) => {
  return (
    <div>
      <Modal sx={styles.modal} open={isOpen}>
        <img style={styles.gif} src={Loading} />
      </Modal>
    </div>
  );
};

export default ModalLoader;
