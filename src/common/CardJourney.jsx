import PropTypes from "prop-types";

const CardRight = (props) => {
    const handleDownload = (event, downloadLink) => {
      event.preventDefault();
      const userConfirmed = window.confirm(
        "Apakah Anda ingin mengunduh file ini?"
      );
      if (userConfirmed) {
        window.location.href = downloadLink;
      }
    };
  return (
    <>
      <div className="flex items-start justify-center gap-4 !text-slate-800">
        <div className="hidden w-full p-3 md:block grow">&nbsp;</div>
        <div className="relative flex flex-col items-center justify-center grow-0">
          <span className="w-[10px] h-[10px] rounded-full dark:bg-teal-600 bg-slate-800 block absolute top-2"></span>
          <span className="block w-[2px] h-[145px] bg-slate-400"></span>
        </div>
        <div
          className="w-full p-3 transition-all border border-gray-400 rounded-lg shadow-md grow hover:border-teal-400 dark:text-gray-100"
          data-aos="zoom-in-down"
          data-aos-delay={props.delay}
        >
          <div className="flex items-start justify-between">
            <h1 className="text-base font-semibold lg:text-lg">
              {props.title}
            </h1>
            <div
              className={`tooltip tooltip-left md:tooltip-top tooltip-primary dark:tooltip-accent ${props.display}`}
              data-tip="Download Sertifikat"
            >
              <a
                href={props.download}
                download
                onClick={(event) => handleDownload(event, props.download)}
                className="transition active:scale-90 hover:text-teal-600 hover:dark:text-teal-400 text-slate-800 dark:text-gray-100 "
              >
                <i className="ri-download-2-line"></i>
              </a>
            </div>
          </div>
          <p className="text-sm text-teal-600 dark:text-teal-400">
            {props.elemen}
          </p>
          <p className="mb-4 text-xs">{props.address}</p>

          <p className="text-sm">
            <i className="ri-calendar-line me-3"></i>
            {props.years}
          </p>
        </div>
      </div>
    </>
  );
};

const CardLeft = (props) => {
  return (
    <>
      <div className="flex items-start justify-center md:flex-row-reverse  gap-4 !text-slate-800">
        <div className="hidden md:block grow w-full p-3.5">&nbsp;</div>
        <div className="relative flex flex-col items-center justify-center grow-0">
          <span className="w-[10px] h-[10px] rounded-full dark:bg-teal-600 bg-slate-800 block absolute top-2"></span>
          <span className="block w-[2px] h-[145px] bg-slate-400"></span>
        </div>
        <div
          className="w-full p-3 transition-all border border-gray-400 rounded-lg shadow-md grow hover:border-teal-400 dark:text-gray-100"
          data-aos="zoom-in-down"
          data-aos-delay={props.delay}
        >
          <div className="flex items-start justify-between">
            <h1 className="text-base font-semibold lg:text-lg">
              {props.title}
            </h1>
            <div
              className={`tooltip tooltip-left md:tooltip-top tooltip-primary dark:tooltip-accent ${props.display}`}
              data-tip="Download Sertifikat"
            >
              <a
                href={props.download} download
                className="transition active:scale-95 text-slate-800 dark:text-gray-100 "
              >
                <i className="ri-download-2-line"></i>
              </a>
            </div>
          </div>
          <p className="text-sm text-teal-600 dark:text-teal-400">
            {props.elemen}
          </p>
          <p className="mb-4 text-xs">{props.address}</p>
          <p className="text-sm">
            <i className="ri-calendar-line me-3"></i>
            {props.years}
          </p>
        </div>
      </div>
    </>
  );
};

CardLeft.propTypes = {
  delay: PropTypes.number,
  title: PropTypes.string.isRequired,
  elemen: PropTypes.string,
  address: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  display: PropTypes.string,
  download: PropTypes.string,
};

CardRight.propTypes = {
  delay: PropTypes.number,
  title: PropTypes.string.isRequired,
  elemen: PropTypes.string,
  address: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  display: PropTypes.string,
  download: PropTypes.string,
};

export { CardRight, CardLeft };
