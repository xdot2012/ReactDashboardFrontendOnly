import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    buttonCreate: {
        marginTop: "1rem",
    },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreationModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button className={classes.buttonCreate} onClick={handleOpen} variant="outlined" color="primary">Adicionar Lançamento </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Novo Lançamento</h2>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField onSubmit={handleSave} id="standard-number" label="Valor" type="number" variant="outlined" InputLabelProps={{shrink: true}}/>
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" onClick={handleSave} variant="outlined" color="primary">Adicionar</Button>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}