import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      const singleBeer = '/beer/' + data._id.toString();
      this.setState({
          beer: singleBeer,
      })
    
    } catch (e) {
      console.error(e);
    }
  }
  render() {
      if (this.state.beer === null) return <div className="loading"><h1>Loading...</h1></div>
      this.props.history.push(this.state.beer)
      return null
  }
}

export default RandomBeer;
