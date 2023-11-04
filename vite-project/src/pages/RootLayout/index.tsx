import useMediaSize from "../../shared/hooks/useMediaSize";

export default function RootLayout() {
  const mediaSize = useMediaSize();

  return (
    <div>
      {mediaSize.isMobile} {mediaSize.size}
    </div>
  );
}
