import React, { useState } from 'react';
const ClassesContext = React.createContext();

function ClassContext(props) {
  const [classes, setClasses] = useState([]);
  const [sched, setSched] = useState([]);

  return (
    <ClassesContext.Provider
      value={{
        classes,
        setClasses,
        sched,
        setSched,
      }}>
      {props.children}
    </ClassesContext.Provider>
  );
}
export default ClassesContext;
export { ClassContext };
