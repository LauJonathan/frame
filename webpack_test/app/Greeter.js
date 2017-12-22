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
import styles from './Greeter.css'; // css-loader, 放心使用把，相同的类名也不会造成不同组件之间的污染。

class Greeter extends Component{
  render() {
    return (
      <div className={'styles.rootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootrootroot}> // 使用cssModule添加类名的方法
        {config.text}
      </div>
    );
  }
}

export default Greeter