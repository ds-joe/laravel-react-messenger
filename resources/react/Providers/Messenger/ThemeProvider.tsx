// Dependencies
import { Fragment } from "react";

// Assets
import "@/styles/style.scss";

const ThemeProvider: RPO = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ThemeProvider;
