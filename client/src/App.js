import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Inventory from './components/Inventory';
import Supercars from './components/Supercars';
import Hypercars from './components/Hypercars'
import OneCar from './components/OneCar';
import Suvs from './components/SUVs'
import AllByMake from './components/AllByMake'
import Cart from './components/Cart'
import Success from './components/Success'
import Admin from './components/Admin'
import SearchResults from './components/SearchResults';
import LuxuryVehicles from './components/LuxuryVehicles';
import MuscleCars from './components/MuscleCars';
import FullInventory from './components/FullInventory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/FullInventory">
          <FullInventory/>
        </Route>
        <Route exact path="/Supercars">
          <Supercars />
        </Route>
        <Route exact path="/Hypercars">
          <Hypercars />
        </Route>
        <Route exact path="/SportsUtilityVehicles">
          <Suvs />
        </Route>
        <Route exact path="/LuxuryVehicles">
          <LuxuryVehicles />
        </Route>
        <Route exact path="/MuscleCars">
          <MuscleCars />
        </Route>
        <Route exact path='/inventory/:cat/:make'>
          <Inventory />
        </Route>
        <Route exact path='/cars/:make'>
          <AllByMake />
        </Route>
        <Route exact path='/car/:id'>
          <OneCar />
        </Route>
        <Route exact path='/search/:query'>
          <SearchResults />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
