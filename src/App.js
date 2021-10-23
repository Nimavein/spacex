import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import LaunchesContainer from "./components/LaunchesContainer/LaunchesContainer";
import { LaunchesProvider } from "./contextProviders/launchesContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LaunchesProvider>
        <LaunchesContainer />
      </LaunchesProvider>
    </ThemeProvider>
  );
}

export default App;
