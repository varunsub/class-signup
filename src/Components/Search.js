import './Register.css';
import { useState } from 'react';
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from '@mui/material';
import SearchResults from './SearchResults';

export default function Search({ classes }) {
  const [num, setNum] = useState('');
  const [cat, setCat] = useState('');
  const [res, setRes] = useState([]);
  const [res1, setRes1] = useState([]);
  const [noRes, setNoRes] = useState(null);

  let arr = ['', 'CSC', 'XYZ', 'PSY', 'BUI', 'WTW', 'YUT', 'DS', 'MNM', 'WEB'];
  function options() {
    return arr.map((item, i) => (
      <option value={item} key={i}>
        {item}
      </option>
    ));
  }

  function onNumChange(e) {
    e.preventDefault();
    setNum(e.target.value);
  }

  function onCatChange(e) {
    e.preventDefault();
    setCat(e.target.value);
  }

  function showResults(arr) {
    const chunkSize = 3;
    let temp = [];
    if (arr.length === 0) {
      setNoRes(true);
      return;
    }
    if (arr.length > chunkSize) {
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        temp.push(chunk);
      }
    } else {
      const chunk = arr.slice(0, 0 + chunkSize);
      temp.push(chunk);
    }
    while (temp[temp.length - 1].length < 3) {
      temp[temp.length - 1].push(null);
    }
    console.log(temp);
    setRes1(temp);
  }

  function handleSearch() {
    let arr = [];
    setNoRes(false);
    setRes1([]);
    console.log(num);
    if (cat === '') {
      if (num === '') arr = classes;
      else {
        for (let i = 0; i < classes.length; i++) {
          if (classes[i].number === parseInt(num)) {
            arr.push(classes[i]);
          }
        }
        setRes(arr);
        showResults(arr);
      }
      showResults(arr);

      return;
    }
    if (num === '') {
      let arr = [];
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].category === cat) {
          arr.push(classes[i]);
        }
      }
      setRes(arr);
      showResults(arr);
      return;
    }

    for (let i = 0; i < classes.length; i++) {
      if (classes[i].category === cat && classes[i].number === parseInt(num)) {
        arr.push(classes[i]);
      }
    }
    setRes(arr);
    showResults(arr);
  }

  return (
    <div>
      <div className="header1">Class Search</div>
      <div className="cardrow2">
        <div className="card1">
          <select
            className="round"
            id="demo-simple-select"
            // value={cat}
            onChange={onCatChange}
            label="Section">
            {options()}
          </select>
        </div>
        <input
          className="input"
          fullWidth
          id="standard-basic"
          label="Number"
          variant="standard"
          type="number"
          inputclasses={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={num}
          onChange={onNumChange}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{
            backgroundColor: '#5464f1',
            marginLeft: '2%',
          }}>
          Search
        </Button>

        {/* <SearchResults {...classes} res={res} /> */}
        <div className="card1"></div>
      </div>
      {noRes === true ? (
        <div style={{ paddingLeft: '2%' }}>No results found</div>
      ) : (
        ''
      )}
      {res1.map((x, i) => {
        return (
          <div className="cardrow2 cardrowpadding" key={i}>
            {x.map((y, key) => {
              if (y !== null)
                return (
                  <SearchResults
                    res={y}
                    key={key}
                    type="search"
                    className="nowrap"
                  />
                );
              else
                return (
                  <div
                    className="classCard card1"
                    style={{ border: '0px' }}
                    key={key}
                  />
                );
            })}
          </div>
        );
      })}
    </div>
  );
}
