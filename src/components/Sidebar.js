import React from 'react';
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { Image, makeStyles, shorthands, Tab, TabList } from "@fluentui/react-components";


const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
    backgroundColor:'#d2ccf8',
    height: '100vh'
  },
});

const Sidebar = () => {
    const styles = useStyles();
    const renderTabs = () => {
      return (
        <>
          <Tab icon={<CalendarMonth />} value="tab1">
            Skills
          </Tab>
          <Tab icon={<CalendarMonth />} value="tab2">
            Job Experience
          </Tab>
          <Tab icon={<CalendarMonth />} value="tab3">
            Projects
          </Tab>
          <Tab icon={<CalendarMonth />} value="tab4">
            Portfolio
          </Tab>
        </>
      );
    };
    return (
      <div className={styles.root}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceBetween",
          }}
        >
          <Image
            alt="Erik's avatar"
            shape="circular"
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
            height={60}
            width={60}
          />
          <div style={{marginLeft: '25px'}}>
            <h3>John Doe</h3>
            <small>Web Developer</small>
          </div>
        </div>
        <TabList defaultSelectedValue="tab2" vertical>
          {renderTabs()}
        </TabList>
      </div>
    );
};
Sidebar.parameters = {
  docs: {
    description: {
      story:
        "A tab has an `icon` slot to display an icon before the tab content.",
    },
  },
};

export default Sidebar;