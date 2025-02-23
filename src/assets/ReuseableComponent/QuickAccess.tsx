interface QuickAccessProps {
    Name: string;
    image: string;
  }








export default function QuickAccess({image, Name}:QuickAccessProps ) {
  return (
    <>
      <div className="Dashboard__quickAccesscard  lg:w-full flex items-center gap-1.5 cursor-pointer">
                  <span>
                    <img src={image} alt="" className="ml-4 max-sm:ml-1 max-xl:ml-1 max-md:ml-1"/>
                  </span>
                  <span className="ml-3 max-sm:ml-[0.5px] max-sm:text-[0.8rem] max-xl:text-[0.9rem] max-md:text-[0.8rem] max-xl:ml-[0.5px] max-ml-[0.5px]">
                    <h2>{Name}</h2>
                  </span>
                  <span>
                    <img src="/Images/icons/chevron-right.png" alt="" />
                  </span>
                </div>
    </>
  )
}
