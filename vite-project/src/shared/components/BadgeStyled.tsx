import { typographyMobile } from "../config/typography";
import { palette } from "../config/palette";

export default function BadgeStyled({
  badgeContent,
  status,
}: {
  badgeContent: string;
  status: "success" | "warning" | "danger" | "white" | "gray";
}) {
  return (
    <div
      style={{
        borderRadius: "1.25rem",
        background: palette.badgeStatus[status].background,
        padding: "0.125rem 0.75rem",
      }}
    >
      <span
        style={{
          ...typographyMobile.caption,
          fontWeight: 500,
          color: palette.badgeStatus[status].text,
        }}
      >
        {badgeContent}
      </span>
    </div>
  );
}
