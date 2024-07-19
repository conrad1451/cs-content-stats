import { useEffect, useState } from "react";
import axios from "axios";

// const databaseId = process.env.CS_CONTENT;

interface Page {
  name: string;
  tags: string[];
}

const CSPagesRawOutput = () => {
  const [pages, setPages] = useState(Array<Page>);
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get("https://notion-cs-content.onrender.com/").then((res) => {
      const theData = res.data;
      setPages(theData);
      console.log(pages);
      localStorage.setPage("pages", JSON.stringify(pages));
    });
  }, []);

  return pages;
};

export default CSPagesRawOutput;
