import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const Calculator=()=>{
// }
// const validate =()=>{

//     //playing with inputs :)

//     if (num1 === ""){
//         setError("Error:Num1 cant be empty")
//         setResult="";     // in order to clear the error message
//         return false ;
//     }
//     if (num2 === ""){
//         setError("Error:Num2 cant be empty")
//         setResult="";
//         return false ;
//     }
//     if (isNaN(num1) || isNaN(num2)) {       // NaN is not a number 
//       setError('Please enter valid numbers');
//        setResult("")
//         return false;
//     }
// setError("");  // in order to error message if any 
// return true;  
// }

// // result Claculate karna ka liya :)