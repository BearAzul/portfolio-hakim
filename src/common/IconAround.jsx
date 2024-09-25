import "animate.css"

const IconSkills = () => {
  return (
    <>
      <div className="absolute w-[40px] lg:w-[55px] -top-0 lg:-top-[65px] left-1/2 lg:-translate-x-[50px] -translate-x-[120px]">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          alt="icon html"
          className="block w-full drop-shadow-md animate__animated animate__bounceInDown animate__delay-1s"
        />
      </div>
      <div className="absolute w-[40px] lg:w-[55px] top-[30px] right-1/2 lg:translate-x-[195px] translate-x-[136px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          alt="icon css"
          className="block w-full drop-shadow-md animate__animated animate__bounceInRight animate__delay-1s"
        />
      </div>
      <div className="absolute w-[40px] lg:w-[60px] bottom-1/2 left-1/2 -translate-x-[130px] lg:-translate-x-[160px] lg:translate-y-[160px] translate-y-[80px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="icon react js"
          className="block w-full drop-shadow-md animate__animated animate__bounceInUp animate__delay-1s"
        />
      </div>
      <div className="absolute w-[50px] lg:w-[70px] -bottom-1/2 right-1/2 lg:translate-x-[150px] translate-x-[100px] lg:-translate-y-[130px] -translate-y-[85px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          alt="icon tailwindcss"
          className="block w-full drop-shadow-md animate__animated animate__bounceInUp animate__delay-1s"
        />
      </div>
      <div className="absolute lg:w-[50px] w-[40px] top-1/2 right-1/2 lg:-translate-x-[160px] translate-x-[40px] lg:-translate-y-[80px] -translate-y-[150px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="icon tailwindcss"
          className="block w-full rounded-md drop-shadow-md animate__animated animate__bounceInLeft animate__delay-1s"
        />
      </div>
    </>
  );
};

export default IconSkills;
