import React, { useEffect } from "react";
import AOS from "aos";
import Routings from "./Routes"
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    Promise.all([
      import('bootstrap/dist/js/bootstrap.js'),
    ]).then(() => {
      AOS.init();
    });
  }, []);

  return (
    <div>
      <Routings />
    </div>
  );
};

export default App;