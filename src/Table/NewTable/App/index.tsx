// sources:

// https://www.learnbestcoding.com/post/98/3-ways-to-pass-object-props-to-react-functional-component

// import React from "react";

import { ComponentToPrint } from "../components";

import { useState } from "react";

import styles from "./index.module.scss";

interface DisplayTableProps {
  // data: Object;
  data: Array<Object>;
}
type Props = {
  theTableDatasets: DisplayTableProps;
};

const TheTable = ({ theTableDatasets }: Props) => {
  const [theChoice, setTheChoice] = useState(0);

  const changeDataSource = (event) => {
    event.preventDefault();
    let newChoice = (theChoice + 1) % theTableDatasets.data.length;
    setTheChoice(newChoice);
    console.log("The current page number for the table is: ", newChoice);
  };

  return (
    <div className={styles.app}>
      <form style={{ marginTop: 30 }} onSubmit={changeDataSource}>
        <button type="submit">Change Data Source</button>
      </form>

      <ComponentToPrint data={theTableDatasets.data[theChoice]} />
    </div>
  );
};

export default TheTable;
