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
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if (comments != null) {
      const com = comments.map(comData => {
        return (
          <li key={comData.id}>
            <p>{comData.comment}</p>
            <p>
              -- {comData.author}, {comData.date.slice(0, 10)}
            </p>
          </li>
        );
      });
      return <div>{com}</div>;
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="list-unstyled">
              {this.renderComments(dish.comments)}
            </ul>
          </div>
        </div>
      );
    else {
      return <div></div>;
    }
  }

  render() {
    return <div>{this.renderDish(this.props.SelectedDish)}</div>;
  }
}

export default DishDetail;
