
const Header = () => {

  

  return (
    <header className="h-[80px] bg-white flex items-center justify-between pl-4 pr-4 text-[#111517] md:pl-[75px] md:pr-[75px]">
      <h1 className="font-bold text-[14px] md:text-[18px] xl:text-[24px]">Where in the world?</h1>
      <div className="flex items-center gap-2">
        <img src="/assets/Group 3 (4).svg" alt="Moon Img" />
        <h3 className="cursor-pointer text-[12px] text-[#111517] md:text-[16px]  xl:font-bold">Dark Mode</h3>
      </div>
    </header>
  )
}

export default Header