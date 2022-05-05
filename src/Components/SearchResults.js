import { Button, Box, Typography, Modal } from '@material-ui/core';
import './Register.css';
import ClassesContext from '../Context/ClassesContext';
import { useContext, useState } from 'react';
export default function SearchResults(props) {
  const { classes, setClasses, sched, setSched } = useContext(ClassesContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [s, ss] = useState('');
  function removeClass() {
    let newClass = [...sched];
    let index = newClass.indexOf(props.res);
    if (newClass.length === 1) {
      setSched([]);
      return;
    }
    newClass.splice(index, 1);

    setSched(newClass);
  }
  function addClass() {
    console.log(!sched.includes(props.res));
    console.log(classes.length);
    console.log(props.type);
    if (props.type === 'search') {
      console.log(2);
      if (classes.includes(props.res) || sched.includes(props.res)) return;
      let temp = [...classes];
      temp.push(props.res);
      setClasses(temp);
    } else if (!sched.includes(props.res) && !(sched.length === 6)) {
      console.log(1);
      let temp = [...sched];
      temp.push(props.res);
      let newClass = [...classes];
      console.log(3);
      if (newClass.length === 1) {
        setClasses([]);
        setSched(temp);
        return;
      }
      let index = newClass.indexOf(props.res);
      newClass.splice(index, 1);
      //   console.log
      setClasses(newClass);
      setSched(temp);
    }
    console.log(4);
  }
  function printer() {
    if (props.type === 'search') {
      console.log(classes);
    } else console.log(sched);
    // setClasses([]);
  }
  return (
    <span
      className="card1 classCard"
      style={{
        backgroundColor: classes.includes(props.res) ? '#adffb6' : 'white',
      }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="classNum">{props.res.category}</span>
            {'      '}
            <span className="classCat">{props.res.number}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{' '}
          </Typography>
        </Box>
      </Modal>
      <span>
        <span className="classNum">{props.res.category}</span>
        <span className="classCat">{props.res.number}</span>
      </span>
      <Button className="classButton" onClick={handleOpen}>
        More info
      </Button>
      {props.added !== true ? (
        <Button className="classButton" onClick={addClass}>
          Add class
        </Button>
      ) : (
        <Button className="classButton" onClick={removeClass}>
          Drop class
        </Button>
      )}
    </span>
  );
}
