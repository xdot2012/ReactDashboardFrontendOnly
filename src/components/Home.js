import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ModeloPieGraph from './graphs/dashboard/ModeloPieGraph';
import UserPieGraph from './graphs/dashboard/UserPieGraph';
import LancamentosLineGraph from './graphs/dashboard/LancamentosLineGraph';
import UserCalendarGraph from './graphs/dashboard/UserCalendarGraph';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  canvas: {
    height: '35vh',
    textAlign: "center",
    marginTop: "1rem"
  },
  paper: {
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={classes.canvas}>
            <Typography variant="h6">Situação Atual (R$)</Typography>
            <UserPieGraph />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" >Bem Vindo Fulano</Typography>
            <Typography> Aqui Teremos algumas informações relevantes ou atalhos</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.canvas}>
            <Typography variant="h6">Modelo de Finança (%)</Typography>
            <ModeloPieGraph />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.canvas}>
            <Typography variant="h6">Calendário de Consumo</Typography>
          {/* <LancamentosLineGraph /> */}
          <UserCalendarGraph />
          </div>
        </Grid>
      </Grid>
    </div>         
  );
}
