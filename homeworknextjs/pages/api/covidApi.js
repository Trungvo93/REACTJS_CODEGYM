import axios from "axios";

export async function getStaticProps() {
  const data = await axios.get(
    `https://api.covid19api.com/total/country/vietnam`
  );
  const list = [];
  for (let i = data.data.length - 1; i >= data.data.length - 10; i--) {
    list.push(data.data[i]);
  }

  return {
    props: {
      covidInfo: list,
    },
  };
}
