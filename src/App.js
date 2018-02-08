import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter // a higher order component
} from 'react-router-dom'
import HomeView from './HomeView'
// import MineView from './MineView'
// import BuyView from './BuyView'
// import SellView from './SellView'
// import LedgerView from './LedgerView'
// import TransactionView from './TransactionView'

const NmTab = (props) => {
  return (
    
    <Route exact={props.exact} path={props.to} children={({match}) => {
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
      <NmTab to={"/products/new"} tabName="Product Creation" />
    </ul>
  </nav>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ButtonGroup />
          <Switch>
            <Route path="/home" component={HomeView} />
            {/* <Route path="/products" component={ProductsView} />
            <Route path="/products/new" component={NewProductView} />
            <Route path="/products/edit/:id" component={EditView} /> */}
        </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

