import { useEffect, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import { Country } from '../Interfaces';
import Major from './components/Major';
import Filter from './components/Filter';
import Header from './components/Header';

function App(): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
 

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setName(inputValue);
    const filterData = countries.filter((el) =>
      el.name.common.toLowerCase().includes(inputValue)
    );
    setFilteredCountries(filterData);
  };

  const appear = () => {
    setShow(!show);
  };

  const filterByRegion = (region: string) => {
    const filterData = countries.filter((el) =>
      el.region.toLowerCase() === region.toLowerCase()
    );
    setFilteredCountries(filterData);
    setName('');
  };

  const fetchData = () => {
    axios
      .get<Country[]>(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
      )
      .then((res: AxiosResponse<Country[]>) => {
        setCountries(res.data);
        setFilteredCountries(res.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className='dark:bg-[#2B3844]'>
      <Header
      />
      <Filter
      appear={appear}
      filterByRegion={filterByRegion}
      handleFilter={handleFilter}
      name={name}
      show={show}
      
      />
      <Major countries={filteredCountries} />
      </div>
    </>
  );
}

export default App;
