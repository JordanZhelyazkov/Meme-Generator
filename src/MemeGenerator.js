export default function MemeGenerator() {

  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  })
  const [randomImg, setRandomImg] = useState(
    "https://www.pngall.com/wp-content/uploads/2016/03/Mother-Of-God-Meme-PNG.png"
  );
  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const { memes } = res.data;
        setImagesArr(memes);
      });
  });

  function handleChange(event){
    const {name,value} = event.target;
    setText(prevText => {
      return {
      ...prevText,
       [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    let len = imagesArr.length;
    const randNum = Math.floor(Math.random() * len);
    const randomMeme = imagesArr[randNum].url;
    setRandomImg(randomMeme);
    setText(prevText => {
      return {
      topText: "",
      bottomText: "",
      }
    });
  }

  return (

    <div>

      <form className="form" onSubmit={handleSubmit}>

        <input
          name="topText"
          type="text"
          value={text.topText}
          placeholder="type something"
          onChange={handleChange}
        />

        <input
          name="bottomText"
          type="text"
          value={text.bottomText}
          placeholder="type something"
          onChange={handleChange}
        />

        <button>Generate</button>

      </form>
      
      <div className="meme">
        <img className="img-meme" src={randomImg} alt="meme" />
        <h3 className="top">{text.topText}</h3>
        <h3 className="bottom">{text.bottomText}</h3>
      </div>
    </div>
  );
}
