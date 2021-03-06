import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import News from '../../News/News';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      paddingTop: 15,
    },
  })
);

export default function AddNewsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        className={classes.button}
        edge="end"
        size="small"
      >
        <AddCircleIcon style={{ color: 'white', fontSize: 35 }} />
      </IconButton>
      <Modal open={open} onClose={handleClose} aria-labelledby="news-modal">
        <News handleClose={handleClose} />
      </Modal>
    </div>
  );
}
