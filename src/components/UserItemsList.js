import React from 'react';

const UserItemsList = props => {
  let items = props.props;
  console.log('THESE ARE YO PROPS', items);
  console.log(localStorage.id);
  return (
    <div className='UserItemsList'>
      <ul className='ItemsList'>
        {items.map((element => {
          return (

            <li className='useritemName' > {element.name} </li>
          )

        }))}



      </ul>

    </div>

  )
}

export default UserItemsList