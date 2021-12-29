import { createBreakpoints } from "@chakra-ui/theme-tools";

import { Breakpoints } from "types/Breakpoints";

export const breakpoints = createBreakpoints<Breakpoints>({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1536px",
});
