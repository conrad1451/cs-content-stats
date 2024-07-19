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
  // const parseStringifiedDataProof = JSON.parse(JSON.stringify(altWords));
  //   let parseStringifiedDataProof = JSON.parse(JSON.stringify(altWords));
  //   let parseStringifiedDataProof = JSON.parse(JSON.stringify(props.words));

  // let theFontSizes: number[] = [5, 60];
  // CHQ: I think the format is [min, max]
  let altFontSizes: [number, number] = [5, 60];
  let theColors: string[] = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
  ];
  // let theRotationAngles: number[] = [0, 90];
  // let theRotationAngles: number[] = [0, 45, 60];

  // let theRotationAngles: number[] = [0, 45, 90];
  // CHQ: I think the format is [min, max]
  let altRotationAngles: [number, number] = [0, 90];

  // let theRotationAngles: number[] = [0, 45, 60, 90];

  // Cannot find name 'OptionsProp'.ts(2304)
  // const options: OptionsProp = {
  const options = {
    colors: theColors,
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: altFontSizes,
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: altRotationAngles,
    // scale: "sqrt",
    // spiral: "archimedean",
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
