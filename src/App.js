import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './Home'
import { About } from './About'
import { Post } from './Post'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/posts/:id" exact component={Post} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
    </BrowserRouter>
    
     
  )
}

export default App;

// exact = only renders what path the address exactly is
// Switch = Makes sure only one route is shown at once
// You can render JSX Inline
// Using just one / is a good way to take care of a 404 route

