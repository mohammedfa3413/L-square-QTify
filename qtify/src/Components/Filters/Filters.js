import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Filters({ filters, selectedFilterIndex, setselectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setselectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs 
        value={selectedFilterIndex} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)"
          },
        }} 
      >
        {filters.map((ele, index) => (
          <Tab 
            key={`tab-${index}`} // Ensure unique key for each Tab
            className={styles.tab} 
            label={ele.label} 
            {...a11yProps(index)} 
          />
        ))}
      </Tabs>

      {filters.map((ele, index) => (
        <TabPanel 
          key={`tabpanel-${index}`} // Ensure unique key for each TabPanel
          value={selectedFilterIndex} 
          index={index}
        >
          {ele.content}
        </TabPanel>
      ))}
    </div>
  );
}
