import "./App.scss";
import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import LikeCounter from "./components/LikeCounter/LikeCounter";

const API_KEY = "Kg4uBwIhiuvJMoYjAa9wjpm5no0tGejhqZUVfhqh";

class App extends React.Component {
  state = {
    data: [],
    // loading: false,
  };
  // constructor() {
  //   super();
  //   this.state = JSON.parse(window.localStorage.getItem("state")) || {
  //     count: 0,
  //     data: [],
  //   };
  // }

  // setState(state) {
  //   window.localStorage.setItem("state", JSON.stringify(state));
  //   super.setState(state);
  // }

  // increaseCount = () => {
  //   return this.setState({ ...this.state, count: this.state.count + 1 });
  // };
  // decreaseCount = () => {
  //   return this.setState({ ...this.state, count: this.state.count - 1 });
  // };

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
        });
      });
  }

  // incrementMe = () => {
  //   let newCount = this.state.count + 1;
  //   this.setState({
  //     count: newCount,
  //   });
  // };

  render() {
    console.log(this.state);
    console.log(this.state.data);

    if (this.state.data === null) {
      return <p>Loading...</p>;
    }

    // const { loading } = this.state;

    // if (loading) {
    //   // if your component doesn't have to wait for an async action, remove this block
    //   return <p>Loading...</p>; // render null when app is not ready
    // }

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
            <LikeCounter
              style={{
                backgroundColor: "white",
              }}
            />
          </article>
          {/* <h1> Count {this.state.count} </h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button> */}
          {/* <button onClick={this.incrementMe}>Likes: {this.state.count}</button> */}
          {/* {this.state.data.map((img, index) => {
          return (
            <div className="app_container-card" key={index}>
              <h2>{img.caption}</h2>
              <p>Brought to you by NASA's image API</p>
              <img src={img.image} alt="NASA" />
              <p>{img.date}</p>
              <button>Like</button>
            </div>
          );
        })} */}
          {/* <video width="750" height="500" controls poster={this.state.data.url}>
                <source src={this.state.data.url} type="video/mp4" />
              </video> */}
        </section>
      </div>
    );
  }
}

export default App;
