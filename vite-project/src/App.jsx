import './App.css'
import Component from './component'
import ProductTab from './productTab'
function App() {
  return (
    <>
     <h1>Ayush <p> 09-Oct-{1001*2}</p></h1>
     <button>Hello World</button>
    </>
  )
}
function Title(){
  return (
    <>
      <ProductTab/>
      <Component/>
    </>
  )
}
export {App,Title}
