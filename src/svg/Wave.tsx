const Wave = ({
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
  >
    <path
      fill={color}
      d="M0 64l60 5.3C120 75 240 85 360 80s240-27 360-32 240 5 360 5.3c120-.3 240-10.3 300-16l60-5.3v288H0z"
    />
  </svg>
);

export default Wave;
