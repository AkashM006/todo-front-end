import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App(): JSX.Element {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={"body " + theme}>
      <div className="body__container">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
