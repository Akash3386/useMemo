import logo from './logo.svg';
import './App.css';

import React,{useState, useCallback, useMemo} from 'react';
import Button from './Components/UI/Button';
// import DemoOutput from './Components/Demo/DemoOutput';
import DemoList from './Components/DemoList/DemoList';
// import { useCallback, useMemo, useState } from 'react';

function App() {

  // const [showparagraph,setShowparagraph] = useState(false)
  // const [allowToggle,setAllowToggle] = useState(false)

  // console.log('App Running')

  // const showParagraphHandler = useCallback(() => {
  //   if(allowToggle){
  //   setShowparagraph(prevShowParagraph => !prevShowParagraph)
  //   }
  // },[allowToggle])

  // const allowToggleHandler = () => {
  //   setAllowToggle(true)
  // }

  // return (
  //   <div className="App">
  //     <h1>Hi there</h1>
  //     <DemoOutput show={showparagraph}/>
  //     <Button onClick={allowToggleHandler}>Allow Toggle</Button>
  //     <Button onClick={showParagraphHandler}>Toggle paragraph</Button>
  //   </div>
  // );

  const [listTitle, setListTitle] = useState('MyList')
  const [buttonTitle,setButtonTitle] = useState('Change List to descending order')
  const [sortedOrder, setSortedOrder] = useState(true)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  },[])

  const changeSortingHandler = useCallback(() => {
    setSortedOrder(false)
    setButtonTitle('Change List to ascending order')
    // setSortedOrder(true)
  },[])
 
  return (
    <div>
    <DemoList title={listTitle} order={sortedOrder} item={useMemo(() => [5,4,8,2,3])}></DemoList>
    <Button onClick={changeTitleHandler}>Change List Title</Button>
    <Button onClick={changeSortingHandler} >{buttonTitle}</Button>
    </div>
  )


   

}

export default App;
