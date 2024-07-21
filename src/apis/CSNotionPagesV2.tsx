// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";

import ReactWordCloudApp from "../WordCloud.tsx";

import theWords from "../theWords.tsx";

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

const PagesInfo = () => {
  // const [tagList, setTagList] = useState(Map<string, number>);
  const [realTagList, setRealTagList] = useState(Array<WordFrequencies>);

  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get("https://notion-cs-content.onrender.com/").then((res) => {
      //   const theData: Array<Page> = res.data;
      const theData: Page[] = res.data; // CHQ: trying this way first
      // setPages(theData);
      console.log(theData);

      setRealTagList(PageDataTransform(theData));

      // console.log(tagList);
    });

    // fetch("https://notion-cs-content.onrender.com/")
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("SUCCESS");
    //       return res.json;
    //     } else {
    //       console.log("NOT SUCCESSFUL");
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);

    //     PageDataTransform(data);
    //   })
    //   .catch((error) => console.log("ERROR"));
  }, []);

  // return <div>{"Here we return the key-pair values for theOtherTagList"}</div>;
  // return <>`${theOtherTagList}`</>;
  //   return theOtherTagList;
  //   return <ReactWordCloudApp height={400} width={600} words={theThirdTagList} />;
  return <ReactWordCloudApp height={400} width={600} words={realTagList} />;
};

// https://www.scaler.com/topics/typescript/typescript-dictionary/

export default PagesInfo;
