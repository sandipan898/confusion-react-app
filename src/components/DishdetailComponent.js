import React, { Component } from "react";
import {
  Card,
  CardImg,
  //   CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  componentDidMount() {
    console.log("DishDetail Component componentDidMount is invoked");
  }

  componentDidUpdate() {
    console.log("DishDetail Component componentDidUpdate is invoked");
  }

  renderComments(comments) {
    const com = comments.map(comData => {
      return (
        <div key={comData.id}>
          <li>
            <p>{comData.comment}</p>
            <p>
              -- {comData.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                date: "2-digit"
              }).format(new Date(Date.parse(comData.date)))}
            </p>
          </li>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h1>Comments</h1>
        <ul className="list-unstyled">{com}</ul>
      </div>
    );
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card key={dish.id}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        {/* <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="list-unstyled">
              {this.renderComments(dish.comments)}
            </ul>
          </div> */}
      </div>
    );
  }

  render() {
    console.log("DishDetail Component render is invoked");

    if (this.props.dish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
