import React from "react";
import { useEffect, useState } from "react";
export default function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState(
    "https://www.pngall.com/wp-content/uploads/2016/03/Mother-Of-God-Meme-PNG.png"
  );
  const [imagesArr, setImagesArr] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const { memes } = res.data;
        setImagesArr(memes);
      });
  }, [imagesArr]);

  function handleSubmit(e) {
    e.preventDefault();
    let len = imagesArr.length;
    const randNum = Math.floor(Math.random() * len);
    const randomMeme = imagesArr[randNum].url;
    setRandomImg(randomMeme);
    setTopText("");
    setBottomText("");
  }

  return (

    <div>

      <form className="form" onSubmit={handleSubmit}>

        <input
          type="text"
          value={topText}
          placeholder="type something"
          onChange={(e) => setTopText(e.target.value)}
        />

        <input
          type="text"
          value={bottomText}
          placeholder="type something"
          onChange={(e) => setBottomText(e.target.value)}
        />

        <button>Generate</button>

      </form>
      
      <div className="meme">
        <img className="img-meme" src={randomImg} alt="meme" />
        <h3 className="top">{topText}</h3>
        <h3 className="bottom">{bottomText}</h3>
      </div>
    </div>
  );
}
