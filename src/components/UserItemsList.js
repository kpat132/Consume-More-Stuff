import React from 'react';

const UserItemsList = props => {
  let items = props.props;
  console.log('THESE ARE YO PROPS', items);
  console.log(localStorage.id);

  return (
    <div className='UserItemsList'>
      <ul className='ItemsList'>
        {items.map((element => {
          const name = element.name;
          const description = element.description;
          const price = element.price;
          const dimensions = element.dimensions;
          const image = element.image;
          const make = element.make;
          const model = element.model;
          const notes = element.notes;
          console.log('NAME', name)
          return (
            <ul key={element.name}>
              <li  className='useritemName' > {element.name} </li>
              <br />
              {description && <li>Description: {description}</li>}
              <br />
              {price && <li>Price: {price}</li>}
              <br />
              {make && <li>Make: {make}</li>}
              <br />
              {model && <li>Model: {model}</li>}
              <br />
              {dimensions && <li>Dimensions: {dimensions}</li>}
              <br />
              {image && <li>Image: {image}</li>}
              <br />
              {notes && <li>Notes: {notes}</li>}

            </ul>
          )
        }))}
      </ul>

    </div>

  )
}

export default UserItemsList