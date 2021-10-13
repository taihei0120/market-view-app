import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "gray.200"
      }
    }
  }
});
export default theme;
