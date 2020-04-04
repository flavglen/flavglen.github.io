import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './shared/menu';


const Home = lazy(() => import('./Home/components/home'))
const Portal = lazy(() => import('./Portal/components/portal'))

function App() {
  return (
    
    <HashRouter basename='/'>
    {/* <Menu/> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/home" component={Home}/>
        <Route path="/portal" component={Portal}/>
      </Switch>
    </Suspense>
    </HashRouter>
  );
}

export default App;
