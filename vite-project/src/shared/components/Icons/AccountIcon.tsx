import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const AccountIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      {...props}
      ref={ref}
      sx={{
        width: "24px",
        height: "24px",
        marginLeft: "5px",
        marginTop: "5px",
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
          d="M2.3999 20.5124C2.3999 16.7369 5.55419 13.6762 11.9999 13.6762C18.4456 13.6762 21.5999 16.7369 21.5999 20.5124C21.5999 21.1131 21.1617 21.6 20.6211 21.6H3.37873C2.83814 21.6 2.3999 21.1131 2.3999 20.5124Z"
          stroke="#999999"
          stroke-width="2"
        />
        <path
          d="M15.5999 6.00002C15.5999 7.98825 13.9881 9.60002 11.9999 9.60002C10.0117 9.60002 8.3999 7.98825 8.3999 6.00002C8.3999 4.0118 10.0117 2.40002 11.9999 2.40002C13.9881 2.40002 15.5999 4.0118 15.5999 6.00002Z"
          stroke="#999999"
          stroke-width="2"
        />
      </svg>
    </SvgIcon>
  )
);

export default AccountIcon;
