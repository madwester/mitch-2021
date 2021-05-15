export const Wave4 = ({
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
      d="M 0,500 C 0,500 0,250 0,250 C 192.40000000000003,272 384.80000000000007,294 525,281 C 665.1999999999999,268 753.2,220 897,209 C 1040.8,198 1240.4,224 1440,250 C 1440,250 1440,500 1440,500 Z"
    />
  </svg>
);
