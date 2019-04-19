import React from "react";
import ClientHeader from "./ClientHeader";
import NewClass from "./NewClass";
import Loader from "react-loader-spinner";
import AxiosWithAuth from "./axiosWithAuth";
import Footer from "./Footer";
import "./new-class.css";
class FindClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    };
  }
  componentDidMount() {
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/class/all")
      .then(res => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          classes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.classes.length === 0) {
      return (
        <div>
          <ClientHeader welcome="Loading Classes..." />
          <div className="loader">
            <Loader type="Oval" color="black" height={200} width={200} />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <ClientHeader welcome="Join a New Class" />
          <div className="search-container">
            <input
              className="search-bar"
              type="search"
              placeholder=" search by zipcode"
              name="search"
            />
            <button>Search</button>
          </div>
          {this.state.classes.map(newClass => {
            return (
              <NewClass
                addToSchedule={this.props.addToSchedule}
                key={newClass.id}
                classDetails={newClass}
                history={this.props.history}
                addToCart={this.props.addToCart}
                removeClass={this.props.removeClass}
              />
            );
          })}
          <Footer />
        </div>
      );
    }
  }
}
export default FindClass;
// const FindClass = props => {
//   if (!props.classes) {
//     return (
//       <div>
//         <ClientHeader welcome="Loading Classes..." />
//         <div className="loader">
//           <Loader type="Oval" color="black" height={200} width={200} />
//         </div>
//         <Footer />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <ClientHeader welcome="Join a New Class" />
//         <div className="search-container">
//           <input
//             className="search-bar"
//             type="search"
//             placeholder=" search by zipcode"
//             name="search"
//           />
//           <button>Search</button>
//         </div>
//         {props.classes.map(newClass => {
//           return (
//             <NewClass
//               addToSchedule={props.addToSchedule}
//               key={newClass.id}
//               classDetails={newClass}
//               history={props.history}
//               addToCart={props.addToCart}
//               removeClass={props.removeClass}
//             />
//           );
//         })}
//         <Footer />
//       </div>
//     );
//   }
// };
// export default FindClass;
