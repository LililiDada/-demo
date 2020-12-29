import { Link } from 'react-router-dom'
import {router} from "./util"
function App() {
  return (
    <div className="App">
      <h1>小demo</h1>
      {
        router.map(item => <Link to={item.path} key={item.path}>{item.name}</Link>)
      }
    </div>
  );
}

export default App;
