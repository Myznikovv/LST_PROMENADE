import "./App.css";
import AppRouterProvider from "./RouterProvider";
import AppThemeProvider from "./ThemeProvider";

function App() {
  return (
    <>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </>
  );
}

export default App;
