import React from "react";
import "./App.css";
import Profile from "./components/Profile";

import "./App.scss";
// Bootstrap Components
// import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      {/* Profile Details */}
      <Profile />

      {/* Main Body */}
      <SearchBar />
      <Locations />

      {/* Footer */}
    </div>
  );
}

export default App;
