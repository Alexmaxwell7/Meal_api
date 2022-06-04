import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Home from './components/home';
import ItemDetails from './components/itemdetails';
import Shipping from './components/shipping';
import Orderpurchase from './components/order';
import Demo from './components/demo';
import Register from './components/register';
import StudentForm from './components/form';
import Task from './components/task';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
function App() {
  //  const [user,setuser]=useState([]);
  // var number=[1,2,3,4,5,6,7,8,9,10]
  // const filter_data = ()=>{
  // }
  //  function checkeven(number){
  //    if(number %2==0){
  //      return true
  //    }else{
  //      return false
  //    }
  //  }
   
  //  let result_data= number.filter(checkeven);
  //  console.log("resutl",result_data);

  //  const double= num=>num*2

  //  [1,2,3,4].map(double) // [2,4,6,8]

  //  let person={
  //    name:'max',
  //    qualification:'ug',
  //    address:'try'
  //  }

  //  console.log(person.qualification);

  // const iterator = person.key();

  // for (let key of iterator){
  //   console.log("key",key);
  // }

  // const rev ="hello world";

  // function reverse(rev){
  //   let result_data="";
  //   for (i=rev.length-1; i>=0;i--){
  //     result_data += rev[i]
  //   }
  //   return result_data;
  // }

 

  // const result = reverse(rev);
  // console.log(result);

//filter duplicat element in array
  // const arry=[1,3,4,5,5,5,6,7]
  // const duplicatelement=arry=>arry.filter((item,index)=>arry.indexOf(item)!==index)
  // const result= duplicatelement(arry);
  // console.log("result",result);
  //
  let routes = useRoutes([
    { path:"/", element: <Task /> },
    // { path:"/", element: <StudentForm /> },
    // { path:"/", element: <Demo /> },
    // { path:"/", element: <Register /> },
    // { path:"/selecteditem/:idMeal", element: <ItemDetails /> },
    // { path:"/shipping", element: <Shipping /> },
    // { path:"/purchase", element: <Orderpurchase /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
  

export default AppWrapper;
