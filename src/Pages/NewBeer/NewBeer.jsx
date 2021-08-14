import axios from 'axios';
import React, { Component } from 'react';
import './NewBeer.css';
import Header from '../../components/Header'

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postResult = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );
      this.props.history.push('/beers')
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <>
      <Header/>
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name:&nbsp;
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="tagline">
              Tag line:&nbsp;
              <input
                type="text"
                name="tagline"
                id="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="description">
              Description:&nbsp;
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="first_brewed">
              First brew:&nbsp;
              <input
                type="text"
                name="first_brewed"
                id="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="brewers_tips">
              Brewer's Tips:&nbsp;
              <input
                type="text"
                name="brewers_tips"
                id="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="attenuation_level">
              Attenuation level:&nbsp;
              <input
                type="number"
                name="attenuation_level"
                id="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
                min='0'
              />
            </label>

            <label htmlFor="contributed_by">
              Contributed by:&nbsp;
              <input
                type="text"
                name="contributed_by"
                id="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </label>

            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default NewBeer;
