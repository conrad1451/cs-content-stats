import React from "react";
import ReactDOM from "react-dom";
import "./NewTable/index.css";
import App from "./NewTable/App";
import * as serviceWorker from "./NewTable/serviceWorker";

interface DisplayTableProps {
  data: Object;
}
type Props = {
  tableDataSets: DisplayTableProps;
};

// export default function App2() {

// const App2 = () => {
const App2 = ({ tableDataSets }: Props) => {
  // let theListOfOptions = [
  //   {
  //     header: [["line2", "Some"]],
  //     body: [
  //       ["line10", "Some text"],
  //       ["line11", "Some text"],
  //       ["line12", "Some text"]
  //     ]
  //   },
  //   {
  //     header: [
  //       [
  //         "line2",
  //         "Some text",
  //         "Some text",
  //         "Some text Some text Some text Some text Some text"
  //       ]
  //     ],
  //     body: [
  //       [
  //         "line10",
  //         "Some text",
  //         "Some text",
  //         "Some text Some text Some text Some text Some text"
  //       ],
  //       [
  //         "line11",
  //         "Some text",
  //         "Some text",
  //         "Some text Some text Some text Some text Some text"
  //       ],
  //       [
  //         "line12",
  //         "Some text",
  //         "Some text",
  //         "Some text Some text Some text Some text Some text"
  //       ]
  //     ]
  //   }
  // ];

  return (
    // <App
    //   {...{
    //     table: {
    //       name: "Tomoyuki",
    //       salary: 140000,
    //       position: "Engineering Manager"
    //     }
    //   }}
    // />
    <App
      {...{
        theTableDatasets: {
          data: tableDataSets.data
        }
      }}
    />
  );
};

export default App2;
