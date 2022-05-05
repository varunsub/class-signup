import './App.css';
import { Link, AppBar, Container, Toolbar } from '@mui/material';
import Register from './Components/Register';
import { createClass } from './Services/ClassService';
import { useState, useEffect } from 'react';
import Switcher from './Components/Switcher';

import { ClassContext } from './Context/ClassesContext';

function App() {
  let [classes, setClasses] = useState([]);
  let [selected, setSelected] = useState('REGISTER');
  let arr = ['CSC', 'XYZ', 'PSY', 'BUI', 'WTW', 'YUT', 'DS', 'MNM', 'WEB'];

  useEffect(() => {
    let obj = createClass();
    console.log(obj);
    setClasses(obj);
  }, []);

  return (
    <ClassContext>
      <div className="App">
        <header className="App-header"> </header>
        <AppBar position="static">
          <Container maxWidth="xl" style={{ backgroundColor: '#7682EC' }}>
            <Toolbar disableGutters style={{ height: '6vh' }}>
              <img src="arizona.png" className="logo" />
              <div className="menucont">
                <p
                  className={`menu ${
                    selected === 'REGISTER' ? 'selected' : ''
                  }`}
                  onClick={() => setSelected('REGISTER')}>
                  REGISTER
                </p>
              </div>
              <div className="menucont">
                <p
                  className={`menu build ${
                    selected === 'BUILD' ? 'selected' : ''
                  }`}
                  onClick={() => setSelected('BUILD')}>
                  BUILD SCHEDULE
                </p>
              </div>
              <div className="menucont">
                <p
                  className={`menu ${
                    selected === 'ADVISING' ? 'selected' : ''
                  }`}
                  onClick={() => setSelected('ADVISING')}>
                  ADVISING
                </p>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        <Switcher data={selected} classes={classes} />
      </div>
    </ClassContext>
  );
}

export default App;
