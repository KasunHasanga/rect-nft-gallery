import "./App.css";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./component/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xe49131070ea03fECff907E0B9082295bfC941c84"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData}/>
    </div>
  );
}

export default App;
