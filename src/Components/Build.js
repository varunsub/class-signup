import ClassesContext from '../Context/ClassesContext';
import { useContext, useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import SearchResults from './SearchResults';
export default function Build() {
  const { classes, setClasses, sched } = useContext(ClassesContext);
  const [arr, setArr] = useState([[]]);
  const [arr1, setArr1] = useState([[]]);

  useEffect(() => {
    const chunkSize = 3;
    let temp = [];
    if (classes.length === 0) {
      setArr([]);
      return;
    }
    if (classes.length > chunkSize) {
      for (let i = 0; i < classes.length; i += chunkSize) {
        const chunk = classes.slice(i, i + chunkSize);
        temp.push(chunk);
      }
    } else {
      const chunk = classes.slice(0, 0 + chunkSize);
      temp.push(chunk);
    }
    while (temp[temp.length - 1].length < 3) {
      temp[temp.length - 1].push(null);
    }
    console.log(temp);
    setArr(temp);
  }, [classes]);

  useEffect(() => {
    const chunkSize = 3;
    let temp = [];
    console.log('ran');
    if (sched.length === 0) {
      setArr1([]);
      return;
    }
    if (sched.length > chunkSize) {
      for (let i = 0; i < sched.length; i += chunkSize) {
        const chunk = sched.slice(i, i + chunkSize);
        temp.push(chunk);
      }
    } else {
      const chunk = sched.slice(0, 0 + chunkSize);
      temp.push(chunk);
    }
    while (temp[temp.length - 1].length < 3) {
      temp[temp.length - 1].push(null);
    }
    setArr1(temp);
    console.log(temp);
  }, [sched]);

  function shopping(x) {
    return x.map((x, i) => {
      return (
        <div
          className="cardrow2 cardrowpadding"
          key={Math.floor(Math.random() * 1000)}>
          {x.map((y, key) => {
            if (y !== null)
              return (
                <SearchResults res={y} key={Math.floor(Math.random() * 1000)} />
              );
            else
              return (
                <div
                  className="classCard card1"
                  style={{ border: '0px' }}
                  key={Math.floor(Math.random() * 1000)}
                />
              );
          })}
        </div>
      );
    });
  }
  return (
    <div className="col">
      <div className="header1" onClick={() => console.log(arr)}>
        My Classes
      </div>
      {arr1.length > 0 ? (
        arr1.map((x, i) => {
          return (
            <div
              className="cardrow2 cardrowpadding"
              key={Math.floor(Math.random() * 1000)}>
              {x.map((y, key) => {
                if (y !== null)
                  return (
                    <SearchResults
                      res={y}
                      added={true}
                      key={Math.floor(Math.random() * 1000)}
                    />
                  );
                else
                  return (
                    <div
                      className="classCard card1"
                      style={{ border: '0px' }}
                      key={Math.floor(Math.random() * 1000)}
                    />
                  );
              })}
            </div>
          );
        })
      ) : (
        <div className="header2">Nothing added</div>
      )}{' '}
      <div></div>
      {/* {arr1.length === 0 ? (
        <div style={{ paddingLeft: '2%', paddingTop: '1%' }}>
          No classes added
        </div>
      ) : (
        ''
      )} */}
      <div className="header1">Shopping Cart</div>
      {arr.length > 0 ? (
        arr.map((x, i) => {
          return (
            <div
              className="cardrow2 cardrowpadding"
              key={Math.floor(Math.random() * 1000)}>
              {x.map((y, key) => {
                if (y !== null)
                  return (
                    <SearchResults
                      res={y}
                      key={Math.floor(Math.random() * 1000)}
                    />
                  );
                else
                  return (
                    <div
                      className="classCard card1"
                      style={{ border: '0px' }}
                      key={Math.floor(Math.random() * 1000)}
                    />
                  );
              })}
            </div>
          );
        })
      ) : (
        <div className="header2">Nothing added</div>
      )}
    </div>
  );
}
