import  { useEffect, useState } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios'
import { Country } from '../Interfaces';
import Major from './components/Major';


function App(): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([])
  const [show,setShow] = useState(false)


  const appear = () => {
    setShow(!show)
  }

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
    <>
    <section className='flex flex-col  items-center md:flex-row justify-between'>
      <div className='flex w-[348px] h-[48px] items-center pl-4 bg-white rounded-[5px] mt-[24px] mb-[40px] md:relative left-[73px]  '>
        <img  className='pe-4' src="/assets/search (1).svg" alt="Loop" />
        <input  className='h-[48px] w-[100%] rounded-[5px]' type="text"  placeholder='Search for a country…' maxLength={25}/>
      </div>
      <div className='relative md:mb-2'>
          <div className='w-[200px] h-[48px] bg-white flex items-center justify-between pl-4 pr-5 rounded-[5px] relative right-[73px] mb-3'> 
            <h2>Filter by Region</h2>
            <img onClick={appear} className='w-3 cursor-pointer transform-[180deg]' style={{transform:show ?'rotate(180deg)':'', transition:'.5'}} src="/assets/Group 2 (7).svg" alt="Arrow" />
          </div>
         {show && <div className='w-[200px] h-[144px] bg-white flex  justify-between pl-4 pr-5 rounded-[5px] absolute right-[73px] flex-col pt-2 pb-2 cursor-pointer'>
            <h3>Africa</h3>
            <h3>America</h3>
            <h3>Asia</h3>
            <h3>Europe</h3>
            <h3>Oceania</h3>
          </div>}
      </div>
    </section>
    <Major
    countries={countries}/>
    </>
  )
}

export default App
