import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "./services/request";

function App() {

  axios.get(`${BASE_URL}/employees`).then(response => {
    console.log(response.data);
  });

  return (
    <>
      <h1>Hello Worl</h1>
    </>

  );
}
export default App;
