import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import Navbar2 from "./components/Navbar2";


function App() {
  
  const cards = data.map(cardData => {
    return(
      
      <Card data={cardData}/>
    )
  })
  
  
/*
  function cardsFunction(){
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log("element",element);
      return(
        <Card data={element} />
      )
    }
  }
  const cardsConstFunction = () =>{
    
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log("element",element);
      return(
        <Card data={element} />
      )
    }
  } 
  */
  /**
   * 
   *    <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} />
   */




  return (
  <>
  <div className="App">
      <Navbar />
      <Navbar2 />
      <Hero />
      <section className="cards-list">
       {cards}
        {/*cardsFunction()*/}
          {/*cardsConstFunction()*/}
      </section> 
  </div>
  </>
  )}

export default App;


