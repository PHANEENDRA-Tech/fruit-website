import React from 'react'


const FruitCard = ({fruit})=> {
  return (
    <div className='fruit-card'>
    <div className='fruit-image'>
      <span>{fruit.emoji}</span>
      </div>
      <div
      className="fruit-details">
        <h3>{fruit.name}</h3>
          <p>{fruit.family}</p>
          <p>price:{fruit.price}/kg</p>
          <button onClick={()=>alert(`You ordered ${fruit.name}!`)}> 🛒 Order Now</button>
          <div className='nutrition'>
            <div>
              <strong>{fruit.calories}</strong>
              <small>calories</small>
              </div>
              <div>
                <strong>{fruit.sugar}</strong>
                <small>sugat</small>
                </div>
                <div>
                  <strong>{fruit.protein}</strong>
                  <small>protien</small>
                </div>
                </div>
                </div>
                </div>
  );
      }





export default FruitCard;