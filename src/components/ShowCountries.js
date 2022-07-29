import React from 'react'

const ShowCountries = ({countries}) => {
  return (
    <div>
        {
            countries.map(country => (
                <li>
                    {country.title}
                    
                </li>
            ))
        }
    </div>
  )
}

export default ShowCountries