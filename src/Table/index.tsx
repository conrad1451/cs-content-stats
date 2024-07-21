import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import App2 from "./betterIndex";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let theListOfOptions = [
  {
    header: [["line2", "Some"]],
    body: [
      ["line10", "Some text"],
      ["line11", "Some text"],
      ["line12", "Some text"]
    ]
  },
  {
    header: [
      [
        "line2",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text"
      ]
    ],
    body: [
      [
        "line10",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text"
      ],
      [
        "line11",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text"
      ],
      [
        "line12",
        "Some text",
        "Some text",
        "Some text Some text Some text Some text Some text"
      ]
    ]
  }
];

root.render(
  <StrictMode>
    {/* CHQ: The following is the originaly stock app */}
    <App />
    {/* CHQ: This is the app that I modified alot */}
    <App2
      {...{
        tableDataSets: {
          data: theListOfOptions
        }
      }}
    />
  </StrictMode>
);
