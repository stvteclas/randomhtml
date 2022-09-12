function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);
  const [color, setColor] = React.useState("#fff");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let ranIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[ranIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#fb6964",
      "#342224",
      "#472e32",
      "#bdbb99",
      "#77b1a9",
      "#73a857",
    ];

    let ranIndex = Math.floor(Math.random() * quotes.length);
    let ranColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[ranIndex]);
    setColor(colors[ranColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card" id="quote-box">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title" id="author">
                    - {randomQuote.author || "No Author"}
                  </h5>
                  <p className="card-text" id="text">
                    &quot;{randomQuote.text}&quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row" id="new-quote">
                <button onClick={getNewQuote} className="btn btn-primary ml-3">
                  New Quote
                </button>
                <a
                  href={
                    "htpps://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuote.text + '"' + randomQuote.author
                    )
                  }
                  target="_blank"
                  className="btn btn-warning"
                  id="tweet-quote"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
