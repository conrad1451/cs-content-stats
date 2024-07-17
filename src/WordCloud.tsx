import ReactWordcloud from "react-wordcloud";

import "./App.css";

// import altWords from "./altWords";

type WordFrequencies = {
  text: string;
  value: number;
};

type Props = {
  height: number;
  width: number;
  words: WordFrequencies[];
};

const ReactWordCloudApp = (props: Props) => {
  // const sourceToParse =
  let sourceToParse =
    '[{"text":"dance","value":2},{"text":"never","value":4},{"text":"this","value":2},{"text":"that","value":2}]';
  // const parseStringifiedDataProof = JSON.parse(JSON.stringify(altWords));
  //   let parseStringifiedDataProof = JSON.parse(JSON.stringify(altWords));
  //   let parseStringifiedDataProof = JSON.parse(JSON.stringify(props.words));

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return (
    <>
      <div>
        <h2>Word Cloud!</h2>
        {/* <div style={{ height: 400, width: 600 }}>
          <ReactWordcloud options={options} words={parseStringifiedDataProof} />
        </div> */}
        <div style={{ height: props.height, width: props.width }}>
          <ReactWordcloud options={options} words={props.words} />
        </div>
      </div>
    </>
  );
};

export default ReactWordCloudApp;
