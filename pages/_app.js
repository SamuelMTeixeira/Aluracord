// IMPORTA O CSS
import { Component } from "react/cjs/react.production.min";
import "../css/styles.css";

export default function App({ Component, pageProps}) {
    return <Component {... pageProps}/>
}