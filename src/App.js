import "./App.scss";
import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const API_KEY = "Kg4uBwIhiuvJMoYjAa9wjpm5no0tGejhqZUVfhqh";

class App extends React.Component {
  state = {
    data: [],
    DataisLoaded: false,
  };

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

  render() {
    console.log(this.state.data);

    let className = "media";

    if (this.state.data.media_type === "video") {
      className += " media-active";
    }

    return (
      <div className="App">
        <h2>{this.state.data.title}</h2>
        <p>Brought to you by NASA's image API</p>

        <img
          src={this.state.data.url}
          alt="NASA"
          className={className}
          style={{
            visibility:
              this.state.data.media_type === "image" ? "visible" : "hidden",
          }}
        />
        <ReactPlayer
          url={this.state.data.url}
          className={className}
          style={{
            visibility:
              this.state.data.media_type === "video" ? "visible" : "hidden",
          }}
        />
        {/* <video width="750" height="500" controls poster={this.state.data.url}>
          <source src={this.state.data.url} type="video/mp4" />
        </video> */}
        <p>{this.state.data.explanation}</p>
        <p>{this.state.data.date}</p>
        <button>Like</button>

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
      </div>
    );
  }
}

export default App;
