import React from 'react'

const City = ({ cities, setCity }) => {

    return (
        <div key={cities}>
            {cities.map((city) => {
                return <button onClick={() => setCity(city)}>{city}</button>
            })}
        </div>
    )
}

export default City