import DarkMode from "../../common/DarkMode.jsx"

const LoadingHome = () => {
  return (
    <>
      <DarkMode display="hidden" />
      <header className="container mx-auto md:max-w-2xl lg:max-w-5xl px-4 dark:bg-slate-800 bg-gray-100">
        <div className="flex items-center justify-between py-4">
          <div className="skeleton w-30 h-8"></div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="skeleton size-4"></div>
            <div className="skeleton w-20 h-4"></div>
            <div className="skeleton w-20 h-4"></div>
            <div className="skeleton w-20 h-4"></div>
            <div className="skeleton w-20 h-4"></div>
            <div className="skeleton w-20 h-4"></div>
          </div>

          <div className="flex lg:hidden gap-2 items-center">
            <div className="skeleton size-6"></div>
            <div className="skeleton h-6 w-12 rounded-full"></div>
            <div className="skeleton size-6"></div>
          </div>

        </div>
      </header>
      <section
        className="w-full py-20 dark:bg-slate-800 bg-gray-100"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl px-4">
          <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-10 lg:gap-0">
            <div className="flex items-center lg:gap-6 gap-4 flex-1 w-full">
              <div className="space-y-1">
                <div className="skeleton size-8"></div>
                <div className="skeleton size-8"></div>
                <div className="skeleton size-8"></div>
              </div>

              <div className="space-y-1">
                <div className="skeleton lg:w-80 w-60 h-8"></div>
                <div className="skeleton lg:w-60 w-40 h-6 my-4"></div>
                <div className="skeleton lg:w-100 w-full h-4"></div>
                <div className="skeleton lg:w-80 w-55 h-4"></div>
                <div className="skeleton lg:w-60 w-40 h-4"></div>
                <div className="skeleton lg:w-40 w-20 h-4"></div>

                <div className="skeleton w-40 h-10 mt-6"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="skeleton size-70 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 dark:bg-slate-800 bg-gray-100">
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl px-4">

          <div className="skeleton w-50 h-8 mx-auto mb-1"></div>
          <div className="skeleton w-30 h-4 mx-auto mb-10"></div>

          <div className="flex items-start justify-between lg:flex-row flex-col gap-10 lg:gap-0">
            <div className="flex-1 mx-auto">
              <div className="skeleton size-70 mx-auto"></div>
            </div>
            <div className="space-y-2 flex-1 w-full">
              <div className="flex gap-2">
                <div className="skeleton lg:w-40 w-full lg:h-30 h-20"></div>
                <div className="skeleton lg:w-40 w-full lg:h-30 h-20"></div>
                <div className="skeleton lg:w-40 w-full lg:h-30 h-20"></div>
              </div>

              <div className="skeleton lg:w-100 w-full h-4"></div>
              <div className="skeleton w-70 h-4"></div>
              <div className="skeleton w-60 h-4"></div>
              <div className="skeleton w-40 h-4"></div>

              <div className="flex justify-between mt-6">
                <div className="skeleton lg:w-40 w-30 h-10"></div>
                <div className="skeleton lg:w-45 w-35 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 dark:bg-slate-800 bg-gray-100">
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl px-4">

          <div className="skeleton w-50 h-8 mx-auto mb-1"></div>
          <div className="skeleton w-30 h-4 mx-auto mb-10"></div>

          <div className="flex gap-4 items-center justify-center mb-10">
            <div className="skeleton w-40 h-8"></div>
            <div className="skeleton w-40 h-8"></div>
          </div>

          <div className="grid gap-5">

            <div className="flex items-start justify-center gap-3">
              <div className="flex-1 hidden lg:block"></div>
              <div className="flex-0 relative z-10">
                <div className="size-2 rounded-full bg-teal-600 absolute top-0 -left-1"></div>
                <div className="divider divider-horizontal h-35 absolute -top-2 -left-6 -z-[1]"></div>
              </div>
              <div className="flex-1">
                <div className="skeleton lg:w-70 w-full h-30"></div>
              </div>
            </div>

            <div className="flex lg:flex-row-reverse items-start justify-center gap-3">
              <div className="flex-1 hidden lg:block"></div>
              <div className="flex-0 relative z-10">
                <div className="size-2 rounded-full bg-teal-600 absolute top-0 -left-1"></div>
                <div className="divider divider-horizontal h-35 absolute -top-2 -left-6 -z-[1]"></div>
              </div>
              <div className="flex-1">
                <div className="skeleton lg:w-70 w-full h-30 lg:ml-auto"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-20 dark:bg-slate-800 bg-gray-100">
        <div className="container">

          <div className="skeleton w-50 h-8 mx-auto mb-1"></div>
          <div className="skeleton w-30 h-4 mx-auto mb-10"></div>

          <div className="hidden items-center gap-3 lg:flex mx-auto md:max-w-2xl lg:max-w-5xl px-6">
            <div className="skeleton w-60 h-4 rotate-90"></div>
            <div className="flex flex-wrap gap-3">
              <div className="skeleton w-20 h-10"></div>
              <div className="skeleton w-40 h-10"></div>
              <div className="skeleton w-35 h-10"></div>
              <div className="skeleton w-30 h-10"></div>
              <div className="skeleton w-25 h-10"></div>
              <div className="skeleton w-40 h-10"></div>
              <div className="skeleton w-45 h-10"></div>
              <div className="skeleton w-55 h-10"></div>
              <div className="skeleton w-45 h-10"></div>
              <div className="skeleton w-35 h-10"></div>
              <div className="skeleton w-20 h-10"></div>
              <div className="skeleton w-50 h-10"></div>
              <div className="skeleton w-30 h-10"></div>
              <div className="skeleton w-40 h-10"></div>
            </div>
          </div>

          <div className="grid gap-4 overflow-hidden lg:hidden">
            <div className="skeleton w-40 h-4 ml-10"></div>
            <div className="flex group overflow-x-hidden">
              <div className="flex gap-3 animate-loop-scroll">
                <div className="skeleton w-20 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
                <div className="skeleton w-35 h-10"></div>
                <div className="skeleton w-30 h-10"></div>
                <div className="skeleton w-25 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
                <div className="skeleton w-45 h-10"></div>
                <div className="skeleton w-55 h-10"></div>
                <div className="skeleton w-45 h-10"></div>
                <div className="skeleton w-35 h-10"></div>
                <div className="skeleton w-20 h-10"></div>
                <div className="skeleton w-50 h-10"></div>
                <div className="skeleton w-30 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
              </div>
            </div>
            <div className="flex group overflow-x-hidden">
              <div className="flex gap-3 animate-loop-scroll-reverse">
                <div className="skeleton w-20 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
                <div className="skeleton w-35 h-10"></div>
                <div className="skeleton w-30 h-10"></div>
                <div className="skeleton w-25 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
                <div className="skeleton w-45 h-10"></div>
                <div className="skeleton w-55 h-10"></div>
                <div className="skeleton w-45 h-10"></div>
                <div className="skeleton w-35 h-10"></div>
                <div className="skeleton w-20 h-10"></div>
                <div className="skeleton w-50 h-10"></div>
                <div className="skeleton w-30 h-10"></div>
                <div className="skeleton w-40 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 dark:bg-slate-800 bg-gray-100">
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl px-4">

          <div className="skeleton w-50 h-8 mx-auto mb-1"></div>
          <div className="skeleton w-30 h-4 mx-auto mb-10"></div>

          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="lg:col-span-4 sm:col-span-6 col-span-12 p-2">
                <div className="skeleton aspect-video"></div>
                <div className="skeleton w-50 h-6 mt-3"></div>
                <div className="skeleton w-60 h-4 mt-2"></div>
                <div className="skeleton w-40 h-4 mt-1"></div>
                <div className="skeleton w-full h-8 mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LoadingHome