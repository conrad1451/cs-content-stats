// import { useEffect, useState } from "react";
import { useState } from "react";

import CSPagesRawOutput from "./apis/CSNotionPagesAlt.tsx";

import "./App.css";
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

interface Page {
  name: string;
  tags: string[];
}

function PagesList() {
  const [pages, setPages] = useState(Array<Page>);
  setPages(CSPagesRawOutput);

  // const [count, setCount] = useState(0);
  // const [myObj, setMyObj] = useState({});
  // useEffect(() => {
  //   axios.get(`https://notion-cs-content.onrender.com/users`).then((res) => {
  //     setMyObj(res);
  //   });
  // }, []);

  console.log("Here is is");
  console.log(pages);

  return (
    <div>
      {pages.map((page) => (
        <>
          <p>Name: {page.name}:</p>
          <text>
            {page.tags.map((tag) => (
              <>
                <text>Tags: {tag + " || "}</text>
                {/* <text> ___________________________ </text> */}
              </>
            ))}
          </text>
          <br />
          <br />
        </>
      ))}
    </div>
  );
}

export default PagesList;
