import React, { Component } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import './ListBeers.css';

export class ListBeers extends Component {
  state = {
    beers: null,
  };

  redirect = (e) => {
    const id = '/beer/' + e.target.id;
    this.props.history.push(id);
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({
        beers: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.beers === null)
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );

    return (
      <>
        <div className="content">
          <Header />
          <div className="list">
            {this.state.beers.map((beer) => {
              return (
                <div key={beer._id} className="list-item">
                  <div className="img">
                    <img
                      id={beer._id}
                      onClick={this.redirect}
                      src={beer.image_url}
                      alt=""
                    />
                  </div>

                  <div className="list-description">
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <p>
                      <span>Created by: </span>
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ListBeers;
