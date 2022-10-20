// import React, { Component } from "react";
// import PropTypes  from "prop-types";

// const Student = props => {
     //       return(
 //         <div>
 //             <h1> Hello , { props.name} </h1>
 //             <h2>Your Roll No. : { props.roll} </h2>
 //         </div>
// //       );
// // };

// class Student extends Component{
//     render(){
//  return( <div>
//                  <h1> Hello , {this.props.name} </h1>
//                  <h2>Your Roll No. : {this.props.roll} </h2>
//              </div>
//     );
//     }
// } 

// Student.propTypes = {
//     name : PropTypes.string.isRequired,
// };

// Student.defaultProps ={
//     name : ' Rajashree'
// }

//export default Student;

import React, { Component } from "react";

//Functional components
// const Student = props => {
//      return <h1> Hello Resham</h1>;
// };

// class Student extends Component{
//     render(){
//         return <h1> Hello Rajashree {this.props.children}</h1>; 
//     }
// }

// directly inside class
// class Student extends Component{
                      // state - here it is a class property
//     state = {
//         name : "Raj",
//         roll : this.props.roll
//     }
//     render(){
//         return <h1> Hello {this.state.name}  Your roll no is {this.state.roll}</h1>; 
//     }
// }

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
        name : "Rajani",
        roll : this.props.roll
    };
}
    render(){
        return (<h1> Hello {this.state.name}  Your roll no is {this.state.roll}</h1>); 
    }
}

export default  Student;