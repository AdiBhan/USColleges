import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Footers from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/Searchbar";
function App() {
  // Get data from Flask backend

  useEffect(() => {
    axios
      .get("https://flask-backend-6d0i.onrender.com/data/cr/")
      .then((response) => {
        setIsPending(true);
        setCrData(response.data);
      });

    axios
      .get("https://flask-backend-6d0i.onrender.com/data/forbes/")
      .then((response) => {
        setIsPending(true);
        setForbesData(response.data);
      });
    axios
      .get("https://flask-backend-6d0i.onrender.com/data/money/")
      .then((response) => {
        setIsPending(true);
        setMoneyData(fixMoneyData(response.data));
      });
  }, []);

  // Method to fix the money data
  const fixMoneyData = (CollegeName) => {
    CollegeName[0]["Location"] = "MA";
    CollegeName.pop();
    for (let i = 0; i < CollegeName.length; i++) {
      CollegeName[i]["Ranking"] = i + 1;
    }

    return CollegeName;
  };

  //
  const [forbesData, setForbesData] = useState([]);
  const [moneyData, setMoneyData] = useState([]);
  const [crData, setCrData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  return (
    <BrowserRouter>
      <div className="">
        <header className={background}>
          <Switch>
            <Route path="/ComingSoon/">
              <ComingSoon />
            </Route>
            <Route path="/" exact>
              <SearchBar
                background={background}
                forbesData={forbesData}
                moneyData={moneyData}
                crData={crData}
                isPending={isPending}
              />
              <div className={background}>
                <Footers background={background} />
              </div>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

// TAILWIND STYLING
// ----------------------------------------------------------------------------------------------------------------
const background =
  "relative h-screen h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black";
