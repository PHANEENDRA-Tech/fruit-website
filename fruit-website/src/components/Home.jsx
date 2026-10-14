import {useState}from 'react';
import FruitCard from "./FruitCard";
const fruits=[
  {
    name:"Apple",
    emoji:" 🍎 ",
    calories:52,
    sugar:10.4,
    protein:0.3,
    price:"100",
    family:"Rosaceae",
  },
  {
    name:"Banana",
    emoji:" 🍌 ",
    price:"$60",
    calories:96,
    sugar:17.2,
    protein:"1",
    family:"Musaceae",
  },
  {
    name:"Orange",
    emoji:" 🍊 ",
    calories:43,
    sugar:8.2,
    protein:1,
    price:"70",
    family:"Rutaceae",
  },
  {
    name:"Mango",
    emoji:" 🍊 ",
    calories:60,
    sugar:13.7,
    protein:0.8,
    price:"100",
    family:"Anacarddiaceae",
  },
  {
    name:"Strawberry",
    emoji:" 🍓 ",
    calories:32,
    sugar:4.9,
    protein:0.7,
    price:"80",
    family:"Rosaceae",
  },
  {
    name:"pineapple",
    emoji:" 🍍 ",
    calories:50,
    sugar:9.9,
    price:"30",
    protein:0.5,
    family:"Bromeliaceae",
  },
];
 function Home(){
  const [search,setSearch]=useState("")
  const filteredFruits = fruits.filter((fruit)=>
  fruit.name.toLowerCase().includes(search.toLowerCase())
  );
  return(
    <main>
      <section className='hero'>
        <p className='tagline'>A FRESHER WAY TO EAT WELL</p>
        <h1>
          Good food,
          <br/>
          <span>Good mood.</span>
          <br/>
          Great fruit.
        </h1>
<p className='description'>Discover your
   favourite fruits and explore their nutritational befits</p>
     <a href='#fruit-library'
     className='explore-button'>Explore fruits</a>
    
    <div className='hero-fruits'> 🍎  🍌  🥭  🍊  🍐 </div>
      </section>
      <section id="fruit-library"
      className='fruit-section'>
        <h2>A bowl full of goodness.</h2>
        <p>Find your favourites and discover what's inside .</p>
        <input
        className='search-input'
        type="text"
        placeholder='search a fruit..' value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
        <div className='fruit-grid'>
          {filteredFruits.map((fruit)=>(
            <FruitCard key={fruit.name} fruit={fruit}/>
          ))}
          {filteredFruits.length===0 &&(<div><p>no fruits found.</p>
           <p> try another name!</p></div>
        
        )}
        </div>
      </section>
    </main>
  )
 }
export default Home;