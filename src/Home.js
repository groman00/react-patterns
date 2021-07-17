import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Common React Patterns</h1>
    <ul>
      <li>
        <Link to="/patterns/functional">Functional Components</Link>
      </li>
      <li>
        <Link to="/patterns/use-state">Hooks: useState()</Link>
      </li>
      <li>
        <Link to="/patterns/hoc">Higher Order Components</Link>
      </li>
      <li>
        <Link to="/patterns/render-props">Render Props</Link>
      </li>
      <li>
        <Link to="/patterns/use-effect">Hooks: useEffect()</Link>
      </li>
      <li>
        <Link to="/patterns/use-callback">Hooks: useCallback()</Link>
      </li>
      <li>
        <Link to="/patterns/custom-hook">Custom Hooks</Link>
      </li>
    </ul>
  </div>
);

export default Home;