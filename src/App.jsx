import './App.css';

import PortfolioImage from "./components/PortfolioImage.jsx";
import GridContainer from "./components/GridContainer.jsx";
import ResponsiveIframe from "./components/ResponsiveIframe.jsx";

import {
  HispSelfIdentify,
  HispChangeByState,
  WhiteRuralityAge,
  MetroNonmetroStayRate,
  BlackGreatMigration,
  RaceByRegion,
  RaceChange,
  NonmetroPlusChange,
  CommunityConnectedness,
  VennDiagram,
  // Maps
  HistoricMexico,
  Meatpacking,
  NativeAmericanLands,
  BlackInfographic,
  AlaskaDots,
  HawaiiDots
} from './img';

const alt_text = "Chart";

let left_graphic_content = (
  <>
    <PortfolioImage src={HispSelfIdentify} alt={alt_text} />
    <PortfolioImage src={RaceByRegion} alt={alt_text} />
    <PortfolioImage src={CommunityConnectedness} alt={alt_text} />
    <PortfolioImage src={BlackGreatMigration} alt={alt_text} />
    {/*<PortfolioImage src={NonmetroPlusChange} alt={alt_text} />*/}
    <PortfolioImage src={VennDiagram} alt={alt_text} />
  </>
);

let right_graphic_content = (
  <>
    <PortfolioImage src={MetroNonmetroStayRate} alt={alt_text} />
    <PortfolioImage src={WhiteRuralityAge} alt={alt_text} />
    <PortfolioImage src={RaceChange} alt={alt_text} />
    <PortfolioImage src={HispChangeByState} alt={alt_text} />
    <PortfolioImage src={NonmetroPlusChange} alt={alt_text} />
  </>
);

let left_map_content = (
  <>
    <PortfolioImage src={HawaiiDots} alt={alt_text} />
    <PortfolioImage src={NativeAmericanLands} alt={alt_text} />
    <PortfolioImage src={AlaskaDots} alt={alt_text} />
  </>
);

let right_map_content = (
  <>
    <PortfolioImage src={BlackInfographic} alt={alt_text} />
    <PortfolioImage src={Meatpacking} alt={alt_text} />
    <PortfolioImage src={HistoricMexico} alt={alt_text} />

  </>
);

function App() {
  return (
    <div className="app-container">
    <div>
      <h1>Data visualization at the Center on Rural Innovation</h1>
      <p>
        The Mapping, Data, and Analytics team provides data, analytics and visualizations to 
        support rural participation in the modern economy.
      </p>
      <p>Interested in learning more? You can reach out to <b>elizabeth.thompson-pohl at ruralinnovation dot us</b>.</p>
      </div>
      <div>
        <h2>Maps</h2>
        <GridContainer left_content={left_map_content} right_content={right_map_content} />
      </div>
      <div>
        <h2>Graphics</h2>
        <GridContainer left_content={left_graphic_content} right_content={right_graphic_content} />
      </div>
      <div class="interactives">
        <h2>Interactives</h2>
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/rap-web-interactives/automation.html"
          padding_top="61.437908496%"
        />
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/racial-ethnic-dot-density/"
          padding_top="70%" //"75.223090592%"
        />
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/rap-web-interactives/tech_employment.html"
          padding_top="35.443510737%"
        />
      </div>
    </div>
  );
}

export default App;
