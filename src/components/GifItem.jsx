import React from 'react'

export const GifItem = ( { title, url } ) => {


  return (
    <div className='card'>
        <img className='card img' src={ url } alt={ title } />
        <h3 className='h3'>{ title }</h3>
    </div>
  )
}
