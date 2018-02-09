import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import {
  Router,
  Route,
  Link,
  Switch,
  withRouter // a higher order component
} from 'react-router-dom'
import HomeView from './HomeView'
import ProductsView from './ProductsView'
import EditView from './EditView'
import NewProductView from './NewProductView'
import history from './history'
 

const NmTab = (props) => {
  return (
    
    <Route exact={props.exact} path={props.to} children={({match}) => {
      console.log(props);
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link to={props.to}>{props.tabName}</Link>
        </li>
      )}
    } />
  )
}

const ButtonGroup = props => (
  <nav className='NavBar'>
  <h3 align='left'>PPM - Project Product Management</h3>
    <ul className="tabs">
      {/* calling NmTab to generate the Route, circumvents NM styling and Anchor tags */}
      <NmTab to={"/home"} tabName="Home" />
      <NmTab exact={true} to={"/products"} tabName="Product List" />
      <NmTab exact={true} to={"/products/new"} tabName="Product Creation" />
    </ul>
  </nav>
)

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <ButtonGroup />
          <Switch>
            <Route path="/home" component={HomeView} />
            <Route exact path="/products" component={ProductsView} />
            <Route path="/products/new" component={NewProductView} />
            <Route path="/products/edit/:id" component={EditView} />
            <Route path="/products/edit/" component={EditView} />

        </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

