import { useState } from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FunctionalComponent';
import LoadingComponent from './components/LoadingComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <LoadingComponent/>
    </>
  )
}

export default App
