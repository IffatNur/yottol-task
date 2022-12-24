import React from 'react';
import {
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...shorthands.padding("10px", "20px"),
    backgroundColor: "#202427",
    color: "#a79cf1",
  },
});

const Footer = () => {
  const styles = useStyles();
    return (
    <div className={styles.root}>
        <h5>Copyright Reserved.</h5>
    </div>
    );
};

export default Footer;