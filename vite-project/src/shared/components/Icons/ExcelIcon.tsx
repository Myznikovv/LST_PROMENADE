import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const ExcelIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0242 1.58398H7.08794C6.82491 1.58398 6.57266 1.68847 6.38667 1.87446C6.20068 2.06045 6.09619 2.31271 6.09619 2.57574V6.79199L15.0242 12L19.4882 13.8838L23.9522 12V6.79199L15.0242 1.58398Z"
          fill="#21A366"
        />
        <path d="M6.09619 6.79199H15.0242V12H6.09619V6.79199Z" fill="#107C41" />
        <path
          d="M22.9602 1.58398H15.0239V6.79198H23.9519V2.57574C23.9519 2.31271 23.8474 2.06045 23.6614 1.87446C23.4755 1.68847 23.2232 1.58398 22.9602 1.58398Z"
          fill="#33C481"
        />
        <path
          d="M15.0242 12H6.09619V21.4242C6.09619 21.6873 6.20068 21.9395 6.38667 22.1255C6.57266 22.3115 6.82491 22.416 7.08794 22.416H22.9604C23.2235 22.416 23.4757 22.3115 23.6617 22.1255C23.8477 21.9395 23.9522 21.6873 23.9522 21.4242V17.208L15.0242 12Z"
          fill="#185C37"
        />
        <path d="M15.0239 12H23.9519V17.208H15.0239V12Z" fill="#107C41" />
        <path
          opacity="0.1"
          d="M12.5444 5.30396H6.09619V19.44H12.5444C12.8072 19.4392 13.059 19.3344 13.2448 19.1486C13.4307 18.9628 13.5354 18.711 13.5362 18.4482V6.29571C13.5354 6.03292 13.4307 5.78112 13.2448 5.5953C13.059 5.40948 12.8072 5.30474 12.5444 5.30396Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M11.8004 6.04785H6.09619V20.1839H11.8004C12.0632 20.1831 12.315 20.0783 12.5008 19.8925C12.6867 19.7067 12.7914 19.4549 12.7922 19.1921V7.0396C12.7914 6.77682 12.6867 6.52502 12.5008 6.3392C12.315 6.15338 12.0632 6.04864 11.8004 6.04785Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M11.8004 6.04785H6.09619V18.6959H11.8004C12.0632 18.6951 12.315 18.5903 12.5008 18.4045C12.6867 18.2187 12.7914 17.9669 12.7922 17.7041V7.0396C12.7914 6.77682 12.6867 6.52502 12.5008 6.3392C12.315 6.15338 12.0632 6.04864 11.8004 6.04785Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M11.0564 6.04785H6.09619V18.6959H11.0564C11.3192 18.6951 11.571 18.5903 11.7568 18.4045C11.9427 18.2187 12.0474 17.9669 12.0482 17.7041V7.0396C12.0474 6.77682 11.9427 6.52502 11.7568 6.3392C11.571 6.15338 11.3192 6.04864 11.0564 6.04785Z"
          fill="black"
        />
        <path
          d="M1.13579 6.04785H11.0563C11.3193 6.04785 11.5716 6.15234 11.7576 6.33833C11.9436 6.52432 12.048 6.77657 12.048 7.0396V16.9601C12.048 17.2231 11.9436 17.4754 11.7576 17.6614C11.5716 17.8474 11.3193 17.9519 11.0563 17.9519H1.13579C0.872766 17.9519 0.62051 17.8474 0.43452 17.6614C0.248531 17.4754 0.144043 17.2231 0.144043 16.9601L0.144043 7.0396C0.144043 6.77657 0.248531 6.52432 0.43452 6.33833C0.62051 6.15234 0.872766 6.04785 1.13579 6.04785Z"
          fill="#107C41"
        />
        <path
          d="M2.77246 15.72L5.18005 11.9896L2.97483 8.28003H4.74927L5.95306 10.6512C6.06367 10.8758 6.1398 11.0435 6.18147 11.1541H6.19709C6.27645 10.9745 6.35953 10.8 6.44633 10.6303L7.73271 8.28003H9.36133L7.09957 11.9688L9.41861 15.72H7.68509L6.29456 13.116C6.22905 13.0051 6.17352 12.8886 6.12864 12.7678H6.10781C6.06723 12.8859 6.01332 12.999 5.94711 13.1049L4.5164 15.72H2.77246Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
);

export default ExcelIcon;
