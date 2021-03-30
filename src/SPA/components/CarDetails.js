import React, { Component } from "react";

export default class CarDetails extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    //we can replace below code with above code
    alert("person details : ", this.props.match.params.carId);

    // axios.get(`/api/cars/${params.carId}`).then(({ data }) => {
    //   console.log(data);
    //   this.setState({ cars: data });
    // });
  }
  render() {
    return (
      <div>
        <h1>Display person details after making ajax calls</h1>
      </div>
    );
  }
}
