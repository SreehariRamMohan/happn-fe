import React, { useState } from "react";
import axios from 'axios';

export const NetworkContext = React.createContext();

export const useNetwork = () => React.useContext(NetworkContext);

// const url = "http://localhost:5000/";
// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     'Access-Control-Allow-Origin': '*',
//   }
// }

export const NetworkProvider = (props) => {

  const [idData, setIdData] = useState({});

  const updateIdData = (foo) => { setIdData(foo); };

  // const postRequest = (resource, data) => {
  //   axios.post(url + resource, data, config).then((res) => {
  //     return res.data()
  //   });
  // }

  const providerValues = {
    idData: idData, 
    updateIdData: updateIdData 
  }

  return (
    <NetworkContext.Provider value={providerValues}>
      { props.children }
    </NetworkContext.Provider>
  );
}

export default NetworkProvider;

