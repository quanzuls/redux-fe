import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store';


import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => { return state.counter.count }
  );

  //event handler
  const handleIncrease = () => {
    //dispatch actions
    // props.increaseCounter1()
    dispatch(increaseCounter())
    // store.dispatch({
    //   type: 'test redux',
    //   payload: ({ name: 'quanzu' })

    // })
  }


  return (
    <div className="App">
      {/* <div>Name: {props.abc}</div>
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button> */}
      <Home />
    </div>
  );
}

// //map state(redux store) to props react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     abc: state.counter.name,
//   }
// }
// //map dispatch (redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter1: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default (App)