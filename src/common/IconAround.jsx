import "animate.css"

const IconSkills = () => {
  return (
    <>
      <div className="absolute w-[40px] lg:w-[50px] top-0 lg:-top-[70px] left-1/2 lg:-translate-x-[50px] -translate-x-[135px]">
        <img
          src="https://raw.githubusercontent.com/BearAzul/portfolio-hakim/refs/heads/portfolio/src/assets/img/html.png"
          alt="icon html"
          className="block w-full drop-shadow-lg animate__animated animate__bounceInDown animate__delay-1s"
        />
      </div>
      <div className="absolute w-[40px] lg:w-[50px] top-[30px] right-1/2 lg:translate-x-[200px] translate-x-[150px]">
        <img
          src="https://raw.githubusercontent.com/BearAzul/portfolio-hakim/refs/heads/portfolio/src/assets/img/css.png"
          alt="icon css"
          className="block w-full drop-shadow-lg animate__animated animate__bounceInRight animate__delay-1s"
        />
      </div>
      <div className="absolute w-[40px] lg:w-[60px] bottom-1/2 left-1/2 -translate-x-[135px] lg:-translate-x-[165px] lg:translate-y-[165px] translate-y-[85px]">
        <img
          src="https://raw.githubusercontent.com/BearAzul/portfolio-hakim/refs/heads/portfolio/src/assets/img/react.png"
          alt="icon react js"
          className="block w-full drop-shadow-lg animate__animated animate__bounceInUp animate__delay-1s"
        />
      </div>
      <div className="absolute w-[50px] lg:w-[70px] -bottom-1/2 right-1/2 lg:translate-x-[155px] translate-x-[110px] lg:-translate-y-[130px] -translate-y-[85px]">
        <img
          src="https://raw.githubusercontent.com/BearAzul/portfolio-hakim/refs/heads/portfolio/src/assets/img/tailwind.png"
          alt="icon tailwindcss"
          className="block w-full drop-shadow-lg animate__animated animate__bounceInUp animate__delay-1s"
        />
      </div>
      <div className="absolute lg:w-[50px] w-[40px] top-1/2 right-1/2 lg:-translate-x-[165px] translate-x-[40px] lg:-translate-y-[80px] -translate-y-[160px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="icon tailwindcss"
          className="block w-full rounded-md drop-shadow-lg animate__animated animate__bounceInLeft animate__delay-1s"
        />
      </div>
    </>
  );
};

export default IconSkills;
