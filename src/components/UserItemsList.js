import React from 'react';

const UserItemsList = props => {
  let items = props.props;


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
          return (
            <ul key={element.name}>
              <li className='useritemNames' > {element.name} </li>

              {description && <li>Description: {description}</li>}

              {price && <li>Price: {price}</li>}

              {make && <li>Make: {make}</li>}

              {model && <li>Model: {model}</li>}

              {dimensions && <li>Dimensions: {dimensions}</li>}
              {console.log({ image })
              
            
            }

              {/* {image && <img src={require(`${image}`)} />} */}

              {image && <img src={`${image}`} />}

              {notes && <li>Notes: {notes}</li>}

            </ul>
          )
        }))}
      </ul>

    </div>

  )
}

export default UserItemsList