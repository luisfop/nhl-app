import React from "react";
import PropTypes from "prop-types";

const WPG = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 248.49334 248.49334"
    >
      <path
        d="M247.49334,123.74667A123.74667,123.74667,0,1,1,123.74667,0,123.754,123.754,0,0,1,247.49334,123.74667Z"
        fill="#8e9090"
      />
      <path
        d="M239.157,123.74667A115.43532,115.43532,0,1,1,123.74667,8.28639,115.40285,115.40285,0,0,1,239.157,123.74667Z"
        fill="#041e41"
      />
      <path
        d="M134.92829,39.33536,123.74667,11.23154,111.91611,39.33536A85.3554,85.3554,0,0,0,38.08742,123.8465c0,47.12257,38.53668,85.30982,85.65925,85.30982a85.30175,85.30175,0,0,0,11.18162-169.821Z"
        fill="#fff"
      />
      <path
        d="M116.6084,170.22031l.89853,1.99671ZM94.59457,171.618v12.87883l20.31662-10.03351,1.54746-3.84368,7.288,35.24209,7.33794-35.5416,1.64729,4.14319,20.36653,10.03351V171.618l-7.58753-10.88212.14975.14975,11.93039-1.9468L152.15,152.15l9.28475-8.08671,9.43449-.64893,5.09164,2.54583v-14.626L189.888,119.20413l-13.62761-.09983,9.23483-25.60792-25.30843,9.58425L159.73753,89.453,142.416,106.72463c.44926-2.69557,6.58917-38.73635,6.58917-38.73635l-16.423,10.73237Zm37.98758-92.89736-8.83548,3.94352-8.68573-4.04335L98.8376,67.98829s6.53926,38.68643,6.53926,38.73635L88.10523,89.453l-.49918,13.62761L62.29764,93.49636l9.23482,25.60792-13.62761.09983,13.82728,12.03024v14.7258l5.09164-2.54581,9.58426.599,9.28475,8.08671-5.491,6.78885,9.135,1.49754Z"
        fill="#7b303e"
      />
      <path
        d="M183.5484,95.543l-24.16031,9.135-7.08836,12.2299,4.842,2.29622ZM147.30795,70.43426,132.83174,79.9686l1.59737,7.4877Zm-86.3581,49.86807,10.73237,9.38458V120.2524Zm57.55543,54.21091,5.24139,26.55636v-14.576ZM105.37685,108.322l-.04992-.04992L89.15351,92.14859,88.65433,104.678,64.44411,95.543l23.66112,24.80924,19.86736-9.48441Zm9.43449-28.50316L100.435,70.38435v.14975l11.48114,28.004.74876-8.83548Zm-5.491,65.742L88.255,144.16313l8.93532,7.78721c-.14975.34942-4.842,6.13992-4.842,6.13992l10.38294,1.69721,6.58917-9.43449Z"
        fill="#ac162c"
      />
      <polygon
        points="175.861 107.573 168.972 124.845 136.725 109.47 134.978 89.703 123.747 38.337 112.715 89.703 110.968 109.47 78.721 124.845 71.632 107.823 71.682 116.209 71.682 145.96 76.824 143.414 109.32 145.561 109.32 150.403 94.595 171.618 94.595 184.497 114.961 174.463 116.608 170.22 123.747 186.494 131.085 170.22 132.732 174.463 153.098 184.497 153.098 171.618 138.373 150.403 138.373 145.561 170.869 143.414 176.011 145.96 176.011 116.209 175.861 107.573"
        fill="#55565a"
      />
      <polygon
        points="114.911 90.002 113.064 110.918 112.066 122.748 109.969 112.415 77.573 127.89 73.929 119.154 73.929 142.366 76.375 141.118 111.567 143.464 111.567 151.102 96.791 172.317 96.791 180.903 113.164 172.866 115.71 166.476 114.312 159.388 116.708 164.929 123.747 180.953 123.747 47.372 114.911 90.002"
        fill="#8e9090"
      />
    </svg>
  );
};

WPG.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WPG.defaultProps = {
  size: "100"
};

export default WPG;
