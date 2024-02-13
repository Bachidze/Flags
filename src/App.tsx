import  { useEffect, useState } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios'

interface Country {
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  population: number
  region: string
  capital: string
}

function App(): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([])

  const fetchData = () => {
    axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
      .then((res: AxiosResponse<Country[]>) => {
        setCountries(res.data)
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      <div className='App'>
        {countries.map((country: Country, index: number) => (
          <div className='w-[267px] bg-white h-[336px] rounded-[10px] flex flex-col' key={index}>
            <img className='rounded-[10px] w-[267px] h-[167px]' src={country.flags.svg} alt={`${country.name.common} flag`}/>
            <h1 className='font-bold flex justify-start pt-4 pl-4'>{country.name.common}</h1>
            <div className='pl-4 flex flex-col gap-2 mt-3'>
              <h2><span>Population: </span>{country.population}</h2>
              <h2><span>Region: </span>{country.region}</h2>
              <h2><span>Capital: </span>{country.capital}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App
