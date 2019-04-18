import React from "react";
import InstructorHeader from "./InstructorHeader";
import "./add-class.css";

class AddClass extends React.Component {
  constructor() {
    super();
    this.state = {
      newClass: {
        price: "",
        name: "",
        start_date: "",
        schedule: "",
        location: "",
        zipcode: "",
        description: ""
      }
    };
  }
  onChange = e => {
    this.setState({
      newClass: {
        ...this.state.newClass,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addNewClass(this.state.newClass);
  };
  render() {
    console.log(this.state.newClass);
    return (
      <div className="add-class-container">
        <InstructorHeader welcome="Create a New Class" />
        <div className="add-class">
          <form onSubmit={this.onSubmit}>
            <div id="price-container">
              <label>Punch Pass Price: </label>
              <br />
              <span>$ </span>
              <input
                value={this.state.newClass.price}
                onChange={this.onChange}
                className="price"
                name="price"
                type="number"
              />
            </div>
            <label>Class Name: </label>
            <br />
            <input
              value={this.state.newClass.name}
              onChange={this.onChange}
              type="text"
              name="name"
              placeholder=" Class Name"
            />
            <br />
            <label>Start Date: </label>
            <br />
            <input
              value={this.state.newClass.start_date}
              name="start_date"
              onChange={this.onChange}
              type="date"
            />
            <br />
            <label>Weekly Schedule: </label>
            <br />
            <input
              value={this.state.newClass.schedule}
              onChange={this.onChange}
              type="text"
              name="schedule"
              placeholder=" Class Schedule"
            />
            <br />
            <label>Location: </label>
            <br />
            <input
              value={this.state.newClass.location}
              onChange={this.onChange}
              type="text"
              name="location"
              placeholder=" Location"
            />
            <br />
            {/* <input
              value={this.state.newClass.instructor}
              onChange={this.onChange}
              type="number"
              name="instructor_id"
              placeholder=" Instructor Name"
            />
            <br /> */}
            <label>Zipcode: </label>
            <br />
            <input
              value={this.state.newClass.zipcode}
              onChange={this.onChange}
              type="number"
              name="zipcode"
              placeholder="Zipcode"
              required
            />
            <br />
            <label>Class Description: </label>
            <br />
            <textarea
              value={this.state.newClass.description}
              onChange={this.onChange}
              name="description"
            />
            <br />
            <button type="submit">Create Class</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddClass;
