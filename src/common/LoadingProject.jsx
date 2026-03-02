export const LoadingProjectById = () => {
  return (
    <section id="detailpage" className="flex items-start justify-center w-full min-h-screen py-10">
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="skeleton h-6 sm:w-100 w-50 mb-3"></div>
        <div className="skeleton h-4 sm:w-50 w-40 mb-6"></div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="skeleton aspect-video"></div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:mr-8">
            <div className="skeleton h-5 w-50 mb-2"></div>
            <div className="skeleton h-4 mb-1"></div>
            <div className="skeleton h-4 mb-1"></div>
            <div className="skeleton h-4 mb-1"></div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2">
            <div className="skeleton h-5 w-50 mb-2"></div>
            <div className="skeleton h-12 mb-1"></div>
            <div className="skeleton h-12 mb-1"></div>
            <div className="skeleton h-12 mb-1"></div>
            <div className="skeleton h-12 mb-1"></div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="skeleton h-5 w-50 mb-2"></div>
            <div className="flex flex-wrap">
              {Array.from({ length: 8 }).map((_, index) => (
                <div className={`skeleton h-4 w-10 m-0.5`} key={index}></div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}