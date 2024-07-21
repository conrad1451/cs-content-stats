// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

// import { useEffect, useState } from "react";
import { useState } from "react";

import axios from "axios";

// import ReactWordCloudApp from "../WordCloud.tsx";

// import theWords from "../theWords.tsx";

// const databaseId = process.env.CS_CONTENT;

// let tagList = {};

// const theTagList: Record<string, number>;
// let theTagList: Record<string, number>;

type WordFrequencies = {
  text: string;
  value: number;
};

interface Page {
  name: string;
  tags: string[];
}

// async function PageDataTransform(listOfPages: Page[]) { // CHQ: tried this and it made more issuse so comment again
const PageDataTransform = function (listOfPages: Page[]) {
  const theOtherTagList: Map<string, number> = new Map();

  const theThirdTagList: WordFrequencies[] = [];

  const theData: Page[] = listOfPages;

  for (let i = 0; i < theData.length; i++) {
    const curPage = theData[i];

    for (let j = 0; j < curPage.tags.length; j++) {
      const curTag = curPage.tags[j];
      if (theOtherTagList[curTag] === undefined) {
        theOtherTagList[curTag] = 1;
        theThirdTagList[curTag] = 1;
      } else {
        theOtherTagList[curTag] += 1;
        theThirdTagList[curTag] += 1;
      }
    }
  }
  // const lastData: Map<string, number> = JSON.parse(JSON.stringify(theOtherTagList));
  // setTagList(lastData);
  console.log(theThirdTagList);
  // setTagList(JSON.parse(JSON.stringify(theOtherTagList)));
  // setRealTagList(theThirdTagList);
  // return "yes";
  return theThirdTagList;
};

function PagesInfo2() {
  const [theWords, setTheWords] = useState(Array<WordFrequencies>);

  let myData: WordFrequencies[] = [];
  axios.get("https://notion-cs-content.onrender.com/").then((res) => {
    //   const theData: Array<Page> = res.data;
    const theData: Page[] = res.data; // CHQ: trying this way first
    console.log(theData);

    // myData = await PageDataTransform(theData);
    myData = PageDataTransform(theData);
    setTheWords(myData);
  });

  // return myData;
  return theWords;
}

// https://www.scaler.com/topics/typescript/typescript-dictionary/

export default PagesInfo2;
