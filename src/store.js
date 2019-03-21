import { createStore, combineReducers } from "redux";
import { stat } from "fs";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "login":
      let stringData = action.payload;
      let data = JSON.parse(stringData);
      state.push(data)
      console.log("am from state", state);
      return state;
    case "getData":
      console.log("state from getdata", state);
      return state;
    default:
      console.log("default chal rha");
      return state;
  }
};

const logoutReducer = (state = {}, action) => {
  switch (action.type) {
    case "logout":
      console.log(action.payload);
      let stringData = action.payload;
      let data = JSON.parse(stringData);
      state.logout = data.logout;
      console.log("am from logoutstate", state);
      return state;
    default:
      return state;
  }
};
const allReducers = combineReducers({
  loginReducer,
  logoutReducer
});

let store = createStore(allReducers);

export default store;

/*

   //actions dispatch

   this.props.dispatch({type : "Deposite_Add", payload :{ depositeChange:depositeChange} })

   //set connection
let mapStateToProps =  (store) => {
  return {  
     data : store.accountReducer
   }
}
export default connect(mapStateToProps)(Deposite);

// import connect
import {connect} from 'react-redux';



// sample reducer
const transactionReducer = (state = [], action) => {
//   switch (action.type) {
//     case "Transactions":
//       //  localStorage.setItem()

//       return transactions;
//     case "Deposite_Add":
//       return transactions;

//     default:
//       return transactions;
//   }
// };

 */
