import React from 'react'

const City = ({ cities, setCity }) => {

    return (
        <div className='button-container' key={cities}>
            {cities.map((city) => {
                return <button className='city-button' onClick={() => setCity(city)}>{city}</button>
            })}
        </div>
    )
}

export default City