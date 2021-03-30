import React, { Component } from "react";
import { Link } from "react-router-dom";

import { data } from "./data"; //mocked state
export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: data };
  }
  render() {
    const carNode = this.state.cars.map((car) => {
      return (
        <div>
          <img src={car.media} width="100" />
          <Link className="nav" to={"carDetails/" + car.id} key={car.id}>
            {car.name}-{car.email}-({car.phone})
          </Link>
        </div>
      );
    });
    return (
      <div>
        <h1>Choose your Person</h1>
        <div className="list-group">{carNode}</div>
      </div>
    );
  }
}
