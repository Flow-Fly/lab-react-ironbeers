import React, { Component } from 'react';
import './SingleBeer.css';
import axios from 'axios';
import Header from '../../components/Header';

export class SingleBeer extends Component {
  state = {
    beer: null,
  };

  async componentDidMount() {
    console.log(this.props)
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      const id = this.props.match.params.id;
      const filtered = data.find((beer) => beer._id.toString() === id);

      this.setState({
        beer: filtered,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.beer === null)
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    const beer = this.state.beer;
    return (
      <>
        <div className="content">
          <Header />
          <div className="single-card">
            <img src={beer.image_url} alt="" />
            <div className="desc">
              <div className="main-infos">
                <h1>{beer.name}</h1>
                <span>{beer.attenuation_level}</span>
              </div>
              <div className="side-infos">
                <h4>{beer.tagline}</h4>
                <span>{beer.first_brewed}</span>
              </div>
              <div className="single-description">
                <p>{beer.description}</p>
              </div>
              <div className="creator">
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleBeer;
