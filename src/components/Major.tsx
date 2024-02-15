import { Country } from "../../Interfaces";

const Major = ({ countries }: any) => {
  return (
    <section className="mt-[-150px] mb-[150px]">
      <div className='App'>
        {countries.map((country: Country, index: number) => (
          <div className='w-[267px] bg-white h-[356px] rounded-[10px] flex flex-col dark:bg-[#2B3844] dark:shadow-2xl' key={index}>
            <img className='rounded-[10px] h-[50%] w-full' src={country.flags.svg} alt={`${country.name.common} flag`}/>
            <h1 className='font-bold flex justify-start pt-4 pl-4 text-[18px] dark:text-[white]'>{country.name.common}</h1>
            <div className='pl-4 flex flex-col gap-5 mt-3 text-[12px] text-[#111517] xl:text-[15px] xl:gap-3'>
              <h2 className="dark:text-[white]"><span className="text-[14px]">Population: </span>{country.population}</h2>
              <h2 className="dark:text-[white]"><span className="text-[14px]">Region: </span>{country.region}</h2>
              <h2 className="dark:text-[white]"><span className="text-[14px]">Capital: </span>{country.capital}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Major;
