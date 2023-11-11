import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const EmployeeIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      {...props}
      ref={ref}
      sx={{
        width: "24px",
        height: "24px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2.3999 18.2168C3.49855 16.3843 5.90641 15.1301 9.66302 15.1301C13.4196 15.1301 15.8275 16.3843 16.9261 18.2168M17.6211 13.7406C19.6105 14.7352 20.6052 15.7299 21.5999 17.7193M15.5521 6.1376C16.4882 6.64115 17.1245 7.62991 17.1245 8.7673C17.1245 9.87183 16.5244 10.8362 15.6325 11.3522M12.6471 8.76727C12.6471 10.4153 11.3111 11.7513 9.66302 11.7513C8.01496 11.7513 6.67895 10.4153 6.67895 8.76727C6.67895 7.11922 8.01496 5.7832 9.66302 5.7832C11.3111 5.7832 12.6471 7.11922 12.6471 8.76727Z"
          stroke="#616161"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  )
);

export default EmployeeIcon;
