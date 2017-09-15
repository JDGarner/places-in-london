import React from "react";
import { getPlaces } from "../../api/places/places";
import Place from "../../components/place/place";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      places: getPlaces()
      currentPlaceIndex: 0
    };
  }

  onClickNextPlace() {
    this.setState({
      currentPlaceIndex:
        (this.state.currentPlaceIndex + 1) % this.state.places.length
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <h2>Stuff I Like</h2>
        </header>
        <Place name={this.state.places[this.state.currentPlaceIndex].name} />
        <footer>
          <button onClick={() => this.onClickNextPlace()}>Next Place</button>
        </footer>
      </div>
    );
  }
}
export default App;
