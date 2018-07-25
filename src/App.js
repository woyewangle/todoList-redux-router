import React, { Component } from 'react';
import './App.css';
import Header from "./container/headerContainer";
import Footer from "./container/FooterContainer";
import TodoList from "./container/TodoListContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <h2>Jquery To Do List</h2>http://localhost:8080/api/todos
            <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
          </div>
          <Header/>
          {/*<TodoList/>*/}
          <Route exact path="/" component={Items} />
          <Route path="/active" component={Items} />
          <Route path="/complete" component={Items} />
          <Footer/>


        </div>
      </Router>

    );
  }
}

export default App;
