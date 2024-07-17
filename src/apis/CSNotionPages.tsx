// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";

// const databaseId = process.env.CS_CONTENT;

interface Page {
  name: string;
  tags: string[];
}

const AxiosOutput = () => {
  const [pages, setPages] = useState(Array<Page>);
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get("https://notion-cs-content.onrender.com/").then((res) => {
      const theData = res.data;
      setPages(theData);
      console.log(pages);
    });
  }, []);

  return (
    <div>
      {pages.map((page) => (
        <>
          <p>page.name</p>
          <p>
            {page.tags.map((tag) => (
              <>
                <text>{tag}</text>
                <text> ___ </text>
              </>
            ))}
          </p>
        </>
      ))}
    </div>
  );
};

export default AxiosOutput;
