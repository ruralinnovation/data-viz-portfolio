import logo from './logo.svg';
import './App.css';

import PortfolioImage from "./components/PortfolioImage.jsx";
import GridContainer from "./components/GridContainer.jsx";

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
  RuralPlaces,
  VennDiagram
} from './img';

const alt_text = "Chart";

let left_content = (
  <>
    <PortfolioImage src={HispSelfIdentify} alt={alt_text} />
    <PortfolioImage src={RaceByRegion} alt={alt_text} />
    <PortfolioImage src={CommunityConnectedness} alt={alt_text} />
    <PortfolioImage src={BlackGreatMigration} alt={alt_text} />
    {/*<PortfolioImage src={NonmetroPlusChange} alt={alt_text} />*/}
    <PortfolioImage src={VennDiagram} alt={alt_text} />
  </>
);

let right_content = (
  <>
    <PortfolioImage src={MetroNonmetroStayRate} alt={alt_text} />
    <PortfolioImage src={WhiteRuralityAge} alt={alt_text} />
    <PortfolioImage src={RaceChange} alt={alt_text} />
    <PortfolioImage src={HispChangeByState} alt={alt_text} />
    <PortfolioImage src={RuralPlaces} alt={alt_text} />
  </>
);

function App() {
  return (
    <div className="app-container">
    <div>
      <h1>Data visualization at the Center on Rural Innovation</h1>
      <p>
        The Mapping, Data, and Analytics (MDA) team at the Center on Rural Innovation supports novel 
        applications of analysis and visual towards rural economic development.
        visualizations, maps, and interactives to communicate complex topics in data.
      </p>
      <p>Interested in learning more? You can reach us at <b>tech-team at ruralinnovation dot us</b>.</p>
      </div>
      <div>
        <h2>Charts</h2>
        <GridContainer left_content={left_content} right_content={right_content} />
      </div>
      <div>
        <h2>Maps</h2>
        <div></div>
      </div>
      <div>
        <h2>Interactives</h2>
        <div></div>
      </div>
    </div>
  );
}

export default App;
