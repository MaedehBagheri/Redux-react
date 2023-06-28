
import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import BookContainer from "./components/BookContainer"
import store from "./Store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
   <Provider store={store}>

<div className='main-part'>
<div className="App">
      <CakeContainer/>
      <BookContainer/>
     <UserContainer/>
    </div>
</div>
   </Provider>
  );
}

export default App;
