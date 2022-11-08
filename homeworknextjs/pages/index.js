import Link from "next/link";
import InfoCovid from "./components/covid/infoCovid";
import ListCovid from "./components/covid/listCovid";
import Layout from "./components/toolbar/layout";
import LayoutWeather from "./components/weather/layoutWeather";
import ShowWeather from "./components/weather/showWeather";

export default function Home() {
  return <ShowWeather></ShowWeather>;
}
