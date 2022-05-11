import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Layout from "../components/Layout";
import theme from "../theme.js";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { app } from "../utils/firebase";
import { AuthProvider } from "../hook/AuthContext";
import OnAuthChange from "../layouts/loading";
app;
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
        <OnAuthChange>
          <Layout>
            <ColorModeProvider
              options={{
                initialColorMode: "light",
                useSystemColorMode: true,
              }}
            >
              <Component {...pageProps} />
            </ColorModeProvider>
          </Layout>
        </OnAuthChange>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
