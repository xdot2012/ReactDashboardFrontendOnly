import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  canvas: {
    height: '35vh',
    textAlign: "center",
    marginTop: "1rem"
  },
  table: {
    minWidth: 500,
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  mainIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  button: {
    marginTop: '1rem',
    marginBottom: '0.5rem',
    width: '50%'
  }
}));

function createData(name, value, qtd, total_value) {
  return { name, value, qtd, total_value };
}

const rows = [
  createData('Frozen yoghurt', 10, 5, 50),
  createData('Ice cream sandwich', 20, 3, 60),
  createData('Eclair', 50, 1, 50),
  createData('Cupcake', 30, 5, 150),
  createData('Gingerbread', 5, 30, 150),
];


export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style={{textAlign:"center"}}>Não sei se isso seria realmente útil</Typography>
      <Grid container spacing={3} className={classes.canvas}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GetAppOutlinedIcon className={classes.mainIcon}/>
            <Typography variant="h5">Entradas</Typography>
              <Divider variant="middle"/>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Produto </TableCell>
                    <TableCell align="right">Valor&nbsp;(R$)</TableCell>
                    <TableCell align="right">Qtd</TableCell>
                    <TableCell align="right">Total&nbsp;(R$)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.qtd}</TableCell>
                      <TableCell align="right">{row.total_value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className={classes.button} size="large" variant="outlined" color="primary">Adicionar</Button>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <PublishOutlinedIcon className={classes.mainIcon}/>
            <Typography variant="h5">Saídas</Typography>
            <Divider variant="middle"/>

              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Produto </TableCell>
                    <TableCell align="right">Valor&nbsp;(R$)</TableCell>
                    <TableCell align="right">Qtd</TableCell>
                    <TableCell align="right">Total&nbsp;(R$)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.qtd}</TableCell>
                      <TableCell align="right">{row.total_value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className={classes.button} size="large" variant="outlined" color="primary">Adicionar</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
