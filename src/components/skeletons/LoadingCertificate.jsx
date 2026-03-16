

const LoadingCertificate = () => {
  return (
    <section id="certificate" className="flex items-start justify-center w-full min-h-screen py-10">
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="skeleton w-6 h-6"></div>
            <div className="skeleton w-20 h-6"></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="skeleton w-6 h-6"></div>
            <div className="skeleton w-10 h-6"></div>
          </div>


        </div>
        <div className="mt-8 mb-4 flex justify-center items-center flex-col">
          <div className="skeleton h-8 w-40 md:w-60"></div>
          <div className="skeleton h-3 w-80 md:w-120 mt-4"></div>
          <div className="skeleton h-3 w-60 mt-1 md:hidden inline-block"></div>
        </div>

        <div className="flex-wrap items-center justify-center w-full gap-1 mb-4 hidden md:flex">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="skeleton w-25 h-10 md:h-8" key={index}></div>
          ))}
        </div>

        <div className="flex-wrap items-center justify-center w-full gap-1 mb-4 md:hidden flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="skeleton w-25 h-10 md:h-8" key={index}></div>
          ))}
        </div>

        <div className="mb-8 sm:mb-8 flex items-center justify-center">
          <div className="skeleton w-180 h-10"></div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="col-span-12 space-y-2 md:col-span-6 lg:col-span-4" key={index}
            >
              <div className="flex flex-col h-full ">
                <div className="skeleton aspect-video"></div>
                <div className="skeleton h-6 w-60 mt-2"></div>

                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="skeleton h-3 w-30"></div>
                    <div className="skeleton h-3 w-20"></div>
                  </div>
                  <div className="flex py-2 items-center justify-between">
                    <div className="skeleton w-40 h-3"></div>
                    <div className="skeleton w-30 h-3"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 mt-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="skeleton w-8 h-8" key={i}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoadingCertificate