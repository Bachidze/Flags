import { FilterProps } from "../../Interfaces";

const Filter: React.FC<FilterProps> = ({
  name,
  handleFilter,
  appear,
  show,
  filterByRegion
}) => {
  return (
    <>
      <section className='flex flex-col  items-center md:flex-row justify-between'>
        <div className='flex w-[348px] h-[48px] items-center pl-4 bg-white rounded-[5px] mt-[24px] mb-[40px] md:relative left-[73px] xl:w-[450px] xl:left-[75px] dark:bg-[#2B3844] dark:shadow-lg'>
          <img
            className='pe-4'
            src='/assets/search (1).svg'
            alt='Loop'
          />
          <input
            value={name}
            onChange={handleFilter}
            className='h-[48px] w-[100%] rounded-[5px] dark:bg-[#2B3844] '
            type='text'
            placeholder='Search for a country…'
            maxLength={25}
          />
        </div>
        <div className='relative md:mb-2'>
          <div className='w-[200px] h-[48px] bg-white flex items-center justify-between pl-4 pr-5 rounded-[5px] relative right-[73px] mb-3 xl:rigght-[75px] dark:bg-[#2B3844]'>
            <h2 className="text-[12px] text-[#111517] font-bold dark:text-[white]">Filter by Region</h2>
            <img
              onClick={appear}
              className='w-3 cursor-pointer transform-[180deg] dark:text-white'
              style={{ transform: show ? 'rotate(180deg)' : '', transition: '.5' }}
              src='/assets/Group 2 (7).svg'
              alt='Arrow'
            />
          </div>
          {show && (
            <div className='w-[200px] h-[144px] bg-white flex  justify-between pl-4 pr-5 rounded-[5px] absolute right-[73px] flex-col pt-2 pb-2 cursor-pointer text-[12px] text-[#111517] font-bold dark:text-[white] dark:bg-[#2B3844] '>
              <h3 onClick={() => filterByRegion('Africa')}>Africa</h3>
              <h3 onClick={() => filterByRegion('Americas')}>America</h3>
              <h3 onClick={() => filterByRegion('Asia')}>Asia</h3>
              <h3 onClick={() => filterByRegion('Europe')}>Europe</h3>
              <h3 onClick={() => filterByRegion('Oceania')}>Oceania</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Filter;
