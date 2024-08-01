// Dependencies
import { Provider } from "react-redux";

// Store
import { store } from "@/redux/store";


const StoreProvider: RPO = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider;