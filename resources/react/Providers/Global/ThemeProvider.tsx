// Dependencies
import { Fragment, useEffect } from 'react'

// Redux Deps
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store';


// Global styling
import "@/styles/style.scss";

const ThemeProvider: RPO = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.layoutSettingsSlice);

  // Setup theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ThemeProvider;