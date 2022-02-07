import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcc13",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
