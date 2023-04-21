import { GlobalStyle } from "./Components/Styles/Global.styled";

const theme = {
  layout: {
    mobile: "375px",
    desktop: "1440px",
  },

  color: {
    primary: {
      lightRed: "hsl(0, 100%, 67%)",
      orangeYellow: "hsl(39, 100%, 56%)",
      greenTeal: "hsl(166, 100%, 37%)",
      cobaltBlue: "hsl(234, 85%, 45%)",
    },
    gradient: {
      lightSlateBlue: "hsl(252, 100%, 67%)",
      lightYoyalBlue: "hsl(241, 81%, 54%)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
    },
  },
};
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
    </>
  );
}

export default App;
