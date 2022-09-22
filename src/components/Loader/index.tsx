import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import Loading from "../../assets/images/loading.gif";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gif: {
    width: "50px",
  },
});

interface Props {
  isLoading: boolean;
}

const Loader: FC<Props> = ({ isLoading }) => {
  const classes = useStyles();
  return (
    <>
      {isLoading && (
        <div className={classes.root}>
          {/* <LoaderGif /> */}
          <img className={classes.gif} src={Loading} />
        </div>
      )}
    </>
  );
};

export default Loader;
