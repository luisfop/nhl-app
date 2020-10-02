import React from "react";
import PropTypes from "prop-types";

const DAL = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 279.96002 230.04379"
    >
      <path
        d="M42.01094,178.99823H19.08562L50.31149,126.654,0,86.11114H74.592l7.96175-13.439h23.65939L150.14394,0l7.34062,73.06742c12.36612,1.24226,22.4736,5.7031,29.47543,13.04372h93l-88.3698,47.31877c-1.0164,2.14572-2.14572,4.29144-3.33151,6.32423a72.22778,72.22778,0,0,1-21.6266,23.94172l6.2113,61.66121L115.02189,178.7159c-2.76685.16939-5.64663.28233-8.46995.28233L11.18033,230.04379Z"
        fill="#006847"
      />
      <path
        d="M50.53736,174.14212H27.55556l29.08015-48.6175L13.66485,90.91077H77.30239l8.01822-13.38252h23.60292L146.756,14.85064l6.32423,62.73408c13.94719.62113,24.90164,5.1949,31.73407,13.32605H260.705L187.807,129.929a76.94969,76.94969,0,0,1-3.78325,7.45355,68.18146,68.18146,0,0,1-22.53006,23.94172l5.3643,53.02187-50.31148-40.54282c-3.61384.22587-7.39709.3388-11.29326.3388L24.39345,217.45179Z"
        fill="#111"
      />
      <path
        d="M222.25144,100.56652H179.73229C175.215,92.2095,164.82519,87.184,149.97454,87.184h-5.59017l-4.29144-42.5756L114.40076,87.184H90.79784l-8.01821,13.38252H40.99455L69.22771,123.266,44.60839,164.48639H84.98181l-20.66667,5.59017L50.81969,192.38075l52.06195-27.89436h2.14572c5.25137,0,10.10747-.22587,14.62478-.56467l35.29145,28.459-3.10565-29.64482c-9.54281,1.0164-18.74682.22587-23.03825.11293,24.84517-4.0091,37.8889-14.85064,46.92351-30.32241,6.15482-10.50274,7.84881-19.98908,5.816-27.44263a26.4064,26.4064,0,0,1,6.04189,14.22952Z"
        fill="#fff"
      />
      <path
        d="M184.7578,109.93992a25.24388,25.24388,0,0,1,2.82332,9.37341l34.67032-18.74682Zm-5.0255-9.37341-14.79418,7.22769c.95993,2.541,2.31513,8.52641-1.35519,17.44809-4.17851,10.2204-16.65756,28.23316-50.76322,28.23316H67.13845L44.60839,164.48639H84.98181l-5.1949,1.41166L50.81969,192.32428l52.06195-27.8379h2.14572c5.25137,0,10.10747-.22587,14.62478-.56467l9.14754-1.12932c24.84517-3.95264,37.8889-14.79418,46.92351-30.266,6.15482-10.5592,7.84881-19.98908,5.816-27.4991a31.93242,31.93242,0,0,0-1.80692-4.46083Zm-81.93263,7.34062h34.95265c10.051,0,16.09291,1.86339,17.61749,7.00183l14.56831-7.11475c-3.95264-9.26047-15.30237-10.27687-22.41714-10.27687H100.56652l-.05646-.05646-33.3716,56.01458L89.725,142.40806l16.827-27.4991ZM76.22953,111.521l-35.235-10.95447L69.22771,123.266Zm63.86341-66.91259L129.98546,87.12753h14.39891Zm11.745,118.07107,3.10565,29.64482-15.41531-29.13663A93.14354,93.14354,0,0,0,151.83793,162.67947Z"
        fill="#8f8f8c"
      />
      <path
        d="M132.75231,107.90711H97.79966l8.75228,7.00183L89.725,142.408h23.15119c7.73589,0,16.6011-.28233,24.05465-4.63024,9.31694-5.5337,14.9071-15.18944,13.60839-21.96539C149.46635,109.93992,143.368,107.90711,132.75231,107.90711Z"
        fill="#111"
      />
    </svg>
  );
};

DAL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DAL.defaultProps = {
  size: "100"
};

export default DAL;
