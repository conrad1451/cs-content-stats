// sources:
// [1]: https://stackoverflow.com/questions/72584569/property-results-does-not-exist-on-type-axiosresponseany-any-with-axios
// [2]: https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/

// import { useEffect, useState } from "react";
// import ReactWordcloud from "react-wordcloud";
// import axios from "axios";

import ReactWordCloudApp from "./WordCloud.tsx";
import CSNotionPages from "./apis/CSNotionPages.tsx";
import PagesList from "./PagesList.tsx";

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

function PageView(key) {
  switch (key) {
    case 0:
      return <ReactWordCloudApp height={400} width={600} words={theWords} />;
    case 1:
      return <PagesList />;
    case 2:
      return <CSNotionPages />;

    default:
      return <p>No selection made.</p>;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const [myObj, setMyObj] = useState({});
  // useEffect(() => {
  //   axios.get(`https://notion-cs-content.onrender.com/users`).then((res) => {
  //     setMyObj(res);
  //   });
  // }, []);

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
        {PageView(0)}
      </div>
    </>
  );
}

export default App;
