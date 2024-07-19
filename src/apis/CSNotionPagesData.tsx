// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";

// const databaseId = process.env.CS_CONTENT;

let tagList = {};

// const theTagList: Record<string, number>;
let theTagList: Record<string, number>;

let theOtherTagList: Map<string, number> = new Map();

interface Page {
  name: string;
  tags: string[];
}

const PagesInfo = () => {
  const [pages, setPages] = useState(Array<Page>);
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get("https://notion-cs-content.onrender.com/").then((res) => {
      const theData = res.data;
      setPages(theData);
      console.log(pages);
      for (let i = 0; i < pages.length; i++) {
        const curPage = pages[i];

        for (let j = 0; j < curPage.tags.length; j++) {
          const curTag = curPage.tags[j];
          if (theOtherTagList[curTag] === undefined) {
            theOtherTagList[curTag] = 1;
          } else {
            theOtherTagList[curTag] += 1;
          }
        }
      }
    });
  }, []);

  return <div>{"Here we return the key-pair values for theOtherTagList"}</div>;
};

// https://www.scaler.com/topics/typescript/typescript-dictionary/

export default PagesInfo;
