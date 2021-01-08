import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LaunchIcon from '@material-ui/icons/Launch';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArchiveIcon from '@material-ui/icons/Archive';
import { Link } from "react-router-dom";
import styles from '../style.module.css'; 


export const mainListItems = (
  <div>
    <Link to="/home"  className={styles.defaultLink}> 
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>

    {/* <Link to="/estoque"  className={styles.defaultLink}> 
        <ListItem button>
            <ListItemIcon>
                <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Estoque" />
        </ListItem>
    </Link>

     <Link to="/lancamentos"  className={styles.defaultLink}> 
        <ListItem button>
            <ListItemIcon>
                <LaunchIcon />
            </ListItemIcon>
            <ListItemText primary="Lançametos" />
        </ListItem>
    </Link> */}
{/*
    <Link to="/tacos"  className={styles.defaultLink}> 
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
    </Link>

    <Link  className={styles.defaultLink}>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
    </Link>

    <Link  className={styles.defaultLink}>
        <ListItem button>
            <ListItemIcon>
            <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </Link> */}
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);