// Providers
import StoreProvider from "./Providers/Global/StoreProvider";
import ThemeProvider from "./Providers/Global/ThemeProvider";

const App: RPO = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
