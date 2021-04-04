import Layout from "../Components/Layout/Layout";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../Components/Layout/theme";
import "../App.css";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
