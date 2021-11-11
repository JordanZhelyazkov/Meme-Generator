import React from "react";
import "./styles.css";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="App">
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    )
    }
    export default App;