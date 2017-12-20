// // Greeter.js
// module.exports = function() {
//   let greet = document.createElement('div');
//   let config = require('./config.json');
//   greet.textContent = config.text;
//   return greet;
// };

//Greeter,js react
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.text}
      </div>
    );
  }
}

export default Greeter