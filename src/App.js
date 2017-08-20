import React from 'react';
import PlacesData from "./places";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      places: PlacesData,
      currentPlaceIndex: 0
    };
  }

  onClickNextPlace() {
    this.setState({
      currentPlaceIndex: (this.state.currentPlaceIndex + 1) % this.state.places.length
    });
  }

  render() {
    return (
      <div>
        <header>
          <h2>Places in London I like</h2>
        </header>
        <section>
          {this.state.places[this.state.currentPlaceIndex].name}
        </section>
        <footer>
          <button onClick={() => this.onClickNextPlace()}>Next Place</button>
        </footer>
      </div>
    );
  }
}
export default App;
