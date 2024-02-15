import { Country } from "../../Interfaces"

const Major = ({countries}:any) => {
  return (
    <section>
      <div className='App'>
        {countries.map((country: Country, index: number) => (
          <div className='w-[267px] bg-white h-[336px] rounded-[10px] flex flex-col' key={index}>
            <img className='rounded-[10px] h-[50%] w-full' src={country.flags.svg} alt={`${country.name.common} flag`}/>
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

export default Major