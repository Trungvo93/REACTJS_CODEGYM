import Link from "next/link";
import InfoCovid from "./components/covid/infoCovid";
import ListCovid from "./components/covid/listCovid";
import Layout from "./components/toolbar/layout";

export default function Home() {
  return <Link href="./components/covid/infoCovid">Go List Covid</Link>;
}
