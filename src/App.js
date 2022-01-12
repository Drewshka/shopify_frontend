import "./App.scss";
import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import LikeCounter from "./components/LikeCounter/LikeCounter";
import Spinner from "./components/Spinner/Spinner";
// import Loader from "react-loader-spinner";

const API_KEY = "Kg4uBwIhiuvJMoYjAa9wjpm5no0tGejhqZUVfhqh";

class App extends React.Component {
  // state = {
  //   data: [],
  //   loading: true,
  // };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  // componentDidMount() {
  //   axios.get(`https://epic.gsfc.nasa.gov/api/natural`).then((response) => {
  //     console.log("Data: ", response);
  //     this.setState({
  //       data: response.data,
  //     });
  //   });
  // }

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`
  //     )
  //     .then((response) => {
  //       console.log("Data: ", response);
  //       this.setState({
  //         data: response.data.photos,
  //       });
  //     });
  // }

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
    console.log(this.state);
    console.log(this.state.data);

    if (this.state.loading) return <Spinner />;

    return (
      <div className="App">
        <h2 className="App_header">Spacetagram</h2>
        <p className="App_para">Brought to you by NASA's image API</p>
        <section className="App_card">
          <img
            src={this.state.data.url}
            alt="NASA"
            className="App_img"
            style={{
              display:
                this.state.data.media_type === "image" ? "block" : "none",
            }}
          />
          <ReactPlayer
            url={this.state.data.url}
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
