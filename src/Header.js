import React from "react";

export default function Header(){
    const imgStyles = {width: "200px", height: "180px"}
    const style = {fontFamily: "sans-serif", fontSize: "20px", color: "#4e24f2"}
    return(
      <div>
        <img 
        src="https://www.pngall.com/wp-content/uploads/2016/03/Challenge-Accepted-Meme-PNG.png" 
        alt="Logo"
        style={imgStyles}/>
      <h1 style={style}>MEME GENERATOR</h1>
      </div>
   
    )
  }