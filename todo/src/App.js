import React, {Component} from 'react';
// import logo from './logo.svg';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import AddToDo from './containers/AddTodo';
import ToDoListContainer from './containers/ToDoListContainer';
import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';

class App extends Component{
  render() {
    return(
      <div>
        <NavigationContainer/>
        <Route exact path="/" component={ToDoListContainer} />
        <Route exact path="/new-item" component={AddToDo} />
        <Route exact path="/callback" component={Callback} />
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
