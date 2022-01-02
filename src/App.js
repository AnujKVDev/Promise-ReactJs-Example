import { useEffect } from 'react';
import React from 'react';

function App() {
  const [status, setStatus] = React.useState(0);
  useEffect(() => {
    fetchAPI()
  }, []);

  const fetchAPI = async () => {
    await fetch("https://api.sampleapis.com/codingresources/codingResources", {
    }).then((res) => {
      console.log("Promise Success.", res)
      setStatus(res.status)
    }).catch((err) => {
      console.log("Promise Failed.", err)
    })
  }

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: "200px" }}>
        {status}
      </h1>
    </>
  );
}

export default App;