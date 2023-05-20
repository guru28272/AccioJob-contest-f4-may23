import { useEffect } from "react";

const GetData = ({ setFunc }) => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const jsonData = await res.json();
      //   console.log(jsonData);

      setFunc(jsonData);
    };
    fetchData();
  }, []);

  //   optional way--- prop drilling

  // const [data, setData] = useState();

  //   return (
  //     <div>
  //       <TableRow data={data} />
  //     </div>
  //   );
};
export default GetData;
