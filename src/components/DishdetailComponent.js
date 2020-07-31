import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import { Control, LocalForm, Errors } from "react-redux-form";

/*
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    alert("Current state is: " + JSON.stringify(values));
    console.log("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-md"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <FormGroup>
                <Label htmlFor="rating">Ratings</Label>
                <Control.select
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="yourname">Your Name</Label>
                <Control.text
                  model=".yourname"
                  id="yourname"
                  name="yourname"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourname"
                  show="touched"
                  messages={{
                    required: "Should not be blank",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be of 15 characteres or less"
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="yourname">Comments</Label>
                <Control.textarea
                  model=".comments"
                  id="comments"
                  name="comments"
                  placeholder="Comments"
                  className="form-control"
                  rows="6"
                  validators={{
                    required
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".comments"
                  show="touched"
                  messages={{
                    required: "Should not be blank"
                  }}
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
*/

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
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
        <ul className="list-unstyled">
          {com}
          <li>
            <CommentForm dishId={dishId} addComment={addComment} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3> No comments found</h3>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card key={dish.id}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div>Dish is not available</div>;
  }
}

const DishDetail = props => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
