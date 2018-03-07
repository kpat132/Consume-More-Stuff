import React from 'react';
import { Link } from 'react-router-dom';

const CategoryComp = ({name, items}) => {

  return (
    <div className='CategoryRow'>
      <span className='CategoryName'>{name}</span>
      <br />
      <ul className='CategoryItems'>
      {items.map((item)=> {
          return ( <li className='SingleItemFromCateogor' key={item.id}>
          <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
          )
      })}
      </ul>
   </div>
  )
}


export default CategoryComp