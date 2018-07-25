import React, {Component} from 'react';
import classNames from "classnames";
import Todo from "../model/Todo";

export default class header extends Component {
  constructor(props) {
    super(props);
  }

  showFilterList= (event) => {
    //console.log(this.state.todos);
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    this.props.onShowFilterList(statusOfList);

  }

  render(){
    return(
      {/*<div>*/}
        {/*<ul className="filters">*/}
          {/*<li>*/}
            {/*<a*/}
              {/*href="#all"*/}
              {/*onClick={e => this.showFilterList(e)}*/}
              {/*data-filter="all"*/}
              {/*className={classNames({*/}
                {/*selected: this.props.statusOfList === Todo.ALL*/}
              {/*})}*/}
            {/*>*/}
              {/*ALL*/}
            {/*</a>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<a*/}
              {/*href="#active"*/}
              {/*onClick={e => this.showFilterList(e)}*/}
              {/*data-filter="active"*/}
              {/*className={classNames({*/}
                {/*selected: this.props.statusOfList === Todo.ACTIVE*/}
              {/*})}*/}
            {/*>*/}
              {/*Active*/}
            {/*</a>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<a*/}
              {/*href="#completed"*/}
              {/*onClick={e => this.showFilterList(e)}*/}
              {/*data-filter="completed"*/}
              {/*className={classNames({*/}
                {/*selected: this.props.statusOfList === Todo.COMPLETED*/}
              {/*})}*/}
            {/*>*/}
              {/*Complete*/}
            {/*</a>*/}
          {/*</li>*/}
        {/*</ul>*/}
      {/*</div>*/}
    <Router>
      <div>
        <ul id="filters">
          <li>
            <Link to='/'> <a href="#" data-filter="all" className={status == " all" ? " selected" : ""}
                             onClick={e => this.showFilterList(e)}>All</a></Link>
          </li>
          <li>
            <Link to='/active'> <a href="#" data-filter="active"
                                   className={status == " active" ? "selected" : ""}
                                   onClick={e => this.showFilterList(e)}>Active</a></Link>
          </li>
          <li>
            <Link to='/complete'> <a href="#" data-filter="complete"
                                     className={status == " complete" ? "selected" : ""}
                                     onClick={e => this.showFilterList(e)}>Complete</a></Link>
          </li>
        </ul>
      </div>

    </Router>
    );
  }
}