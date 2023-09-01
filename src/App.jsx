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
        The Mapping, Data, and Analytics team produces <a href="#maps">maps</a>, <a href="#graphics">graphics</a>, 
        and <a href="#interactives">interactives</a> to 
        support <a href="#research">research</a> on rural participation in the modern economy.
      </p>
      <p>Interested in learning more? You can reach out to <b>elizabeth.thompson-pohl at ruralinnovation dot us</b>.</p>
      </div>
      <div id="maps">
        <h2>Maps</h2>
        <GridContainer left_content={left_map_content} right_content={right_map_content} />
      </div>
      <div id="graphics">
        <h2>Graphics</h2>
        <GridContainer left_content={left_graphic_content} right_content={right_graphic_content} />
      </div>
      <div id="interactives" class="interactives">
        <h2>Interactives</h2>
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/rap-web-interactives/automation.html"
          padding_top="61.437908496%"
        />
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/rap-web-interactives/tech_employment.html"
          padding_top="35.443510737%"
        />
        <ResponsiveIframe
          src="https://ruralinnovation.github.io/racial-ethnic-dot-density/"
          padding_top="65%" //"75.223090592%"
        />
      </div>
      <div id="research">
        <h2>As seen in our research</h2>
        <p><a target="_blank" href="https://ruralinnovation.us/blog/who-lives-in-rural-america-part-i/">
          Who lives in rural America? How data shapes (and misshapes) conceptions of diversity in rural America
        </a></p>
        <p><a target="_blank" href="https://ruralinnovation.us/blog/who-lives-in-rural-america-part-2/">
          Who lives in rural America? The geography of rural race and ethnicity
        </a></p>
        <p><a target="_blank" href="https://ruralinnovation.us/blog/defining-rural-america/">
          Defining rural America: The consequences of how we count
        </a></p>
        <p><a target="_blank" href="https://ruralinnovation.us/resources/mapping-and-data-analytics/broadband-climate-risk-mitigation-tool/">
          The Broadband Climate Risk Mitigation Tool
        </a></p>
        <p><a target="_blank" target="_blank" href="https://ruralinnovation.us/resources/reports/understanding-disaster-resiliency-factors-broadband-deployments/">
          Report: Understanding disaster resiliency factors for broadband deployments
        </a></p>
        <p><a target="_blank" href="https://ruralinnovation.us/resources/reports/report-geography-of-innovation/">
          Report: The geography of innovation
        </a></p>
        <p><a target="_blank" href="https://ruralinnovation.us/resources/reports/report-automation-in-rural-america/">
          Report: Automation in rural America
        </a></p>

      </div>
    </div>
  );
}

export default App;
