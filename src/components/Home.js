import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'

import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import ModeloPieGraph from './graphs/dashboard/ModeloPieGraph';
import UserPieGraph from './graphs/dashboard/UserPieGraph';
import LancamentosLineGraph from './graphs/dashboard/LancamentosLineGraph';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Home() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <React.Fragment>
        <div style={{display:"flex", flexDirection:"column"}}>
            {/* <LinearDeterminate />    */}
            <div style={{height:"100%", width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                
                <Paper style={{height:"90vh", width:"45vw", padding:"1rem"}} elevation={1} >
                    <Typography style={{textAlign:"center"}}>
                        Seu Resumo Atual (R$):
                    </Typography>
                    <div style={{height:"70%"}}>
                        <UserPieGraph />
                    </div>
                    {/* <Typography style={{textAlign:"center"}}>
                        Lançamentos
                    </Typography> */}
                    {/* <div style={{display:"flex", justifyContent:"center", alignContent:"center", height:"35vh"}}>
                        <LancamentosLineGraph />
                    </div> */}

                </Paper>

                <Paper style={{height:"45vh", width:"30vw", padding:"1rem"}} elevation={1} >
                    <Typography style={{textAlign:"center"}}>
                        Modelo de Gastos Ideal (%):
                    </Typography>
                    <ModeloPieGraph />
                </Paper>

                
                {/* <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Resumo de Contas
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> */}
            </div>
        </div>
    </React.Fragment>
  );
}

export function LinearDeterminate() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    );
  }