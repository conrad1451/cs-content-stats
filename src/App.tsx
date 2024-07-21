// sources:
// [1]: https://stackoverflow.com/questions/72584569/property-results-does-not-exist-on-type-axiosresponseany-any-with-axios
// [2]: https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/

// import { useEffect, useState } from "react";
import { useState } from "react";
// import ReactWordcloud from "react-wordcloud";
// import axios from "axios";

import ReactWordCloudApp from "./WordCloud.tsx";
import CSNotionPages from "./apis/CSNotionPages.tsx";
// import CSNotionPagesV2 from "./apis/CSNotionPagesV2.tsx";
// import CSNotionPagesV3 from "./apis/CSNotionCloudDataCoexist.tsx";
// import CSNotionPagesData from "./apis/CSNotionPagesData.tsx";
// import PagesList from "./PagesList.tsx";

// import PagesInfo from "./moduleapi.ts";
// import PagesInfo2 from "./ModuleAgain.tsx";

// import TheTable from "./Table/NewTable/App";

// const { data } = await axios.get(
//   `https://notion-cs-content.onrender.com/users`
// );

// const axios = require('axios');

import "./App.css";

// import altWords from "./altWords";
import theWords from "./theWords";

// const broFunc = async () => {
//   // const res = await axios.get(`https://notion-cs-content.onrender.com/users`);
//   const results = data.results;
//   const theOutput = results.map((pager: any) => {
//     return {
//       id: pager.id,
//       tags: pager.tags.map((tag: any) => tag.name),
//     };
//   });

//   return theOutput[0];
// };

// return <ReactWordCloudApp height={400} width={600} words={realTagList} />;
let theListOfOptions: Object[] = [
  {
    header: [["line2", "Some"]],
    body: [
      ["line10", "Some text"],
      ["line11", "Some text"],
      ["line12", "Some text"],
    ],
  },
  {
    header: [
      [
        "line2",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text",
      ],
    ],
    body: [
      [
        "line10",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text",
      ],
      [
        "line11",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text",
      ],
      [
        "line12",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text",
      ],
    ],
  },
];
let theOptionNames: string[] = ["filler 1", "filler 2"];

function PageView(key) {
  switch (key) {
    case 0:
      return <ReactWordCloudApp height={400} width={600} words={theWords} />;
    // return <>{PagesInfo()}</>;
    case 1:
      return <CSNotionPages />;

    // return <p>{"PagesInfo2"}</p>;

    case 2:
      // return (
      //   <TheTable
      //     {...{
      //       theTableDatasets: {
      //         data: theListOfOptions,
      //       },
      //       theTablePageTitles: {
      //         data: theOptionNames,
      //       },
      //     }}
      //   />
      // );
      return <p>{"PagesInfo2"}</p>;

    // case 3:
    // return <p>{"PagesInfo2"}</p>;
    // return <p>{<PagesInfo2 />}</p>;
    default:
      return <p>No selection made.</p>;
    // return <ReactWordCloudApp height={400} width={600} words={theWords} />;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const [myObj, setMyObj] = useState({});

  const [curPage, setCurPage] = useState(0);

  // let numOptions = 2;
  const numOptions = 3;

  const handlePageChange = (event: any) => {
    event.preventDefault();
    setCurPage((curPage + 1) % numOptions);
  };

  return (
    <>
      <div>
        {/* <h2>Word Cloud!</h2> */}
        {/* I'm surprised that the import from the JS file still worked without typesetting */}
        {/* <ReactWordCloudApp height={400} width={600} words={altWords} /> */}
        {/* <CSNotionPages /> */}
        {/* <PagesList /> */}
        {/* <ReactWordCloudApp height={400} width={600} words={theWords} /> */}
        {/* The below worked - Nice! */}
        {PageView(curPage)}
        <button type="submit" onClick={handlePageChange}>
          Change View
        </button>
      </div>
    </>
  );
}

export default App;
