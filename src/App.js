import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
)

export default App
