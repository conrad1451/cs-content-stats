// sources:

// https://www.learnbestcoding.com/post/98/3-ways-to-pass-object-props-to-react-functional-component

import React from "react";

import { ComponentToPrint } from "../components";

import { useState } from "react";

import styles from "./index.module.scss";

// following line no longer needed
// import data from "../helpers/data.json";

// interface DisplayTableProps {
//   name: string;
//   salary: number;
//   position: string;
// }
interface DisplayTableProps {
  // data: Object;
  data: Array<Object>;
}
type Props = {
  theTableDatasets: DisplayTableProps;
};

const allCategories = ["misc", "sleep"];

// const App = () => {
const TheTable = ({ theTableDatasets }: Props) => {
  const [theChoice, setTheChoice] = useState(0);
  const [theData, setTheData] = useState({
    header: [["line2", "Some"]],
    body: [
      ["line10", "Some text"],
      ["line11", "Some text"],
      ["line12", "Some text"]
    ]
  });

  // Handle selection....
  const handleDataChange = (event) => {
    event.preventDefault();

    if (theChoice === 0) {
      setTheData(data);
    } else if (theChoice === 1) {
      setTheData(testData);
    }
  };

  const changeDataSource = (event) => {
    event.preventDefault();
    // let newChoice = (theChoice + 1) % 2;
    let newChoice = (theChoice + 1) % theTableDatasets.data.length;
    setTheChoice(newChoice);
    console.log("the choice is now", newChoice);
    // handleDataChange(theChoice);
  };

  // CHQ: causes undesired page refreshing
  // const changeDataSource = () => {
  //   let newChoice = (theChoice + 1) % (theTableDatasets.data.length);
  //   // setTheChoice(newChoice);
  //   handleDataChange(newChoice);
  //   console.log("the choice is now", newChoice);
  // };

  return (
    <div className={styles.app}>
      <form style={{ marginTop: 30 }} onSubmit={changeDataSource}>
        {/* <form style={{ marginTop: 30 }} onSubmit={handleDataChange}> */}
        <select name="cat" required>
          <option>Category</option>

          {/* this line works */}
          {/* {randomList.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))} */}

          {/* this line works */}
          {allCategories.map((item) => (
            <option key={item}>{item}</option>
          ))}

          {/* this line does not work */}
          {/* {["cheese", "pickes"]} */}
        </select>

        <button type="submit">Change Data Source</button>
      </form>

      <ComponentToPrint data={theTableDatasets.data[theChoice]} />
    </div>
  );
};

export default TheTable;
