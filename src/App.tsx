import { ResultSummaryComponent } from "./Components/ResultSummaryComponent";
import { GlobalStyle } from "./Components/Styles/Global.styled";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ResultSummaryComponent></ResultSummaryComponent>
      </div>
    </>
  );
}

export default App;
