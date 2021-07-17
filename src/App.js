import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { FunctionalComponent } from './patterns/functional';
import {
  UseCallback,
  UseEffect,
  UseState,
  CustomHook
} from './patterns/hooks';
import {
  HigherOrderComponent,
  RenderPropsComponent
} from './patterns/hoc';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/patterns/functional" component={FunctionalComponent}/>
          <Route path="/patterns/use-state" component={UseState}/>
          <Route path="/patterns/use-effect" component={UseEffect}/>
          <Route path="/patterns/use-callback" component={UseCallback}/>
          <Route path="/patterns/custom-hook" component={CustomHook}/>
          <Route path="/patterns/render-props" component={RenderPropsComponent}/>
          <Route path="/patterns/hoc" component={HigherOrderComponent}/>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
