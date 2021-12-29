import { extendTheme } from "@chakra-ui/react";

// import { breakpoints } from "./breakpoints";
import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  // breakpoints,
  components: {
    Button,
  },
});

export default customTheme;
