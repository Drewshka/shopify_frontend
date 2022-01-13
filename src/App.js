import "./App.scss";
import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import LikeCounter from "./components/LikeCounter/LikeCounter";
import Spinner from "./components/Spinner/Spinner";

const API_KEY = "Kg4uBwIhiuvJMoYjAa9wjpm5no0tGejhqZUVfhqh";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        console.log("Data: ", response);
        this.setState({
          data: response.data,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) return <Spinner />;

    return (
      <div className="App">
        <h2 className="App_header">Spacetagram</h2>
        <p className="App_para">Brought to you by NASA's image API</p>
        <section className="App_card">
          <img
            src={this.state.data.url}
            alt="NASA telescope shots"
            className="App_img"
            style={{
              display:
                this.state.data.media_type === "image" ? "block" : "none",
            }}
          />
          <ReactPlayer
            url={this.state.data.url}
            alt="NASA telescope footage"
            className="App_vid"
            style={{
              display:
                this.state.data.media_type === "video" ? "block" : "none",
            }}
          />
          <article className="App_container">
            <h2 className="App_titleDate">
              {this.state.data.title} - {this.state.data.date}
            </h2>
            <p className="App_explanation">{this.state.data.explanation}</p>
            <LikeCounter />
          </article>
        </section>
      </div>
    );
  }
}

export default App;
