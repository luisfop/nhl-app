import React from "react";
import PropTypes from "prop-types";

const BOS = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 225.96002 225.96002"
    >
      <path
        d="M112.48,224.96A112.48,112.48,0,1,0,0,112.48,112.48663,112.48663,0,0,0,112.48,224.96Z"
        fill="#fcb514"
      />
      <path
        d="M112.48,220.78568A108.30568,108.30568,0,1,0,4.17433,112.48,108.32334,108.32334,0,0,0,112.48,220.78568Z"
        fill="#111"
      />
      <path
        d="M106.35463,204.45134c2.04179.13611,4.03821.22686,6.12538.22686,2.04179,0,4.08358-.09074,6.08-.22686V174.82269H106.35463Zm48.09553-41.33492,18.7391,18.7391a86.35464,86.35464,0,0,0,8.62089-8.66627l-18.603-18.603Zm3.403-50.63643,6.30686,6.08h40.29133c.13611-1.99642.27223-4.03821.27223-6.08,0-2.08716-.13611-4.129-.22686-6.12538H164.16Zm-89.33971-6.12537H20.46328c-.13612,1.99642-.22687,4.03821-.22687,6.12538,0,2.04179.09075,4.08358.22687,6.08H68.51344Zm-16.74269,75.5009,8.98388-9.02926V155.53911L43.10448,173.18927A86.80822,86.80822,0,0,0,51.77075,181.85553ZM60.75463,52.08835l-9.02925-8.98387a90.94472,90.94472,0,0,0-8.6209,8.6209L60.75463,69.37552ZM118.56,20.46328c-1.99642-.13612-4.03821-.22687-6.08-.22687-2.08716,0-4.08358.09075-6.12538.22687V50.09194H118.56V20.46328Zm63.29552,31.26209a91.438,91.438,0,0,0-8.66626-8.6209l-18.7391,18.7391,8.757,8.53015Z"
        fill="#fcb514"
      />
      <polygon
        points="73.232 145.648 65.473 153.18 65.473 170.104 140.475 170.104 159.487 151.637 159.487 120.602 151.093 112.48 159.487 104.313 159.487 73.323 140.475 54.811 65.473 54.811 65.473 71.735 73.232 79.312 73.232 145.648"
        fill="#fcb514"
      />
      <path
        d="M164.20538,101.31821h39.79225A91.67562,91.67562,0,0,0,185.077,55.62746L164.20538,76.49911ZM101.31821,50.09194V20.96239A91.67589,91.67589,0,0,0,55.62746,39.883L65.88179,50.13731h35.43642Zm62.88717,73.50449v24.86448L185.077,169.28719a91.336,91.336,0,0,0,18.9206-45.69075ZM150.82031,58.34986,169.28717,39.883a91.67586,91.67586,0,0,0-45.69075-18.9206V50.13732H142.3809ZM68.51344,84.25791,39.883,55.62746a92.00741,92.00741,0,0,0-18.966,45.69075H68.51344Zm0,56.39881v-17.0603H20.917a91.79916,91.79916,0,0,0,18.966,45.69075Zm73.86747,34.166H123.59643v29.17494a91.66074,91.66074,0,0,0,45.73612-18.9206l-18.46687-18.46687Zm-41.06269,0H65.8818L55.62747,185.077a91.53481,91.53481,0,0,0,45.69075,18.92059Z"
        fill="#fff"
      />
      <polygon
        points="69.376 154.859 69.376 166.202 138.933 166.202 155.584 149.958 155.584 122.281 145.512 112.48 155.584 102.679 155.584 74.956 138.887 58.758 69.376 58.758 69.376 70.056 77.18 77.633 77.18 147.281 69.376 154.859"
        fill="#111"
      />
      <path
        d="M137.70748,96.917V82.39762l-7.62269-7.44119H93.78628v29.40178h36.25314Zm0,45.64538V127.99762l-7.62269-7.44119H93.78628v29.4018h36.25314Z"
        fill="#fcb514"
      />
      <path
        d="M133.80538,129.67642l-5.30866-5.17253h-30.763v21.55224h30.763l5.30866-5.17253Zm0-45.64538-5.30866-5.17253h-30.763v21.59761h30.763l5.30865-5.17253Z"
        fill="#111"
      />
      <path
        d="M129.08657,138.88718v-7.25971l-2.5409-2.40477H102.45254v12.11462h24.09314Zm0-45.6v-7.2597l-2.5409-2.45015H102.45254v12.16h24.09314Z"
        fill="#fff"
      />
    </svg>
  );
};

BOS.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BOS.defaultProps = {
  size: "100"
};

export default BOS;
