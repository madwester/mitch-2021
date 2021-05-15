import styled from "@emotion/styled";

interface Props {
  height?: number;
}

export const Gap = styled.div<Props>(({ height = 64 }) => ({
  display: "block",
  height,
  width: "100%",
}));
