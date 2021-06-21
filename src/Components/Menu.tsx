import React from "react";
import Burgers from "./Burgers";
import Gyros from "./Gyros";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const  TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography component={'span'} variant={'body2'}>{children}</Typography>
            </Box>
            )}
        </div>
        );
    

}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

function Menu(props: any) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue:number) => {
        setValue(newValue);
    };
    
    return (
        <>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Burgers" {...a11yProps(0)} />
            <Tab label="Gyros" {...a11yProps(1)} />
            <Tab label="Sides and Drinks" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <div className="menuContainer">
            
            <TabPanel value={value} index={0}>
               <Burgers></Burgers>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Gyros></Gyros>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
        </>
    )
    
}

export default Menu;