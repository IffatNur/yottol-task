import React from 'react';
import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from "@fluentui/react-components";
import { Bot24Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    ...shorthands.padding("10px", "20px"),
    rowGap: "20px",
    backgroundColor: "#a79cf1",
    boxShadow: "0 8px 16px rgba(0,0,0,0.14)",
  },
});

const Header = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div style={{ display: "flex", alignItems: "center", color: "#3f3682" }}>
        <Bot24Filled></Bot24Filled>
        <h1 style={{ color: "white" }}>Task</h1>
      </div>
      <div>
        <TabList {...props}>
          <Tab value="tab1">Home</Tab>
          <Tab value="tab2">About</Tab>
          <Tab value="tab4">Contact</Tab>
          <Tab value="tab3">Login / Register</Tab>
        </TabList>
      </div>
    </div>
  );
};

export default Header;
