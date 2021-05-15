export const Wave2 = ({
  color,
  height,
  width,
}: {
  color: string;
  height: string;
  width: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    width={width}
    height={height}
    style={{width: "100%"}}
  >
    <path
    style={{width: "100%"}}
      fill={color}
      d="M0 224l21.8 10.7C43.6 245 87 267 131 240c43.5-27 87-101 131-101.3 43.5.3 87 74.3 131 80 43.4 5.3 87-58.7 131-74.7 43.3-16 87 16 131 48 43.2 32 87 64 130 58.7 44.1-5.7 88-47.7 131-58.7 44-11 88 11 131-10.7 43.9-21.3 88-85.3 131-85.3 43.8 0 87 64 131 85.3 43.7 21.7 87-.3 109-10.6l22-10.7v160H0z"
    />
  </svg>
);
