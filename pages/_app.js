import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useRouter} from "next/router";
import {useEffect} from "react";
// import "../styles/mediumish.module.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
  }, [router.events]);

  return <Component {...pageProps} />
}
