import { useState } from "react";
import GetData from "./components/GetData";
import TableRow from "./components/TableRow";

function App() {
  const [data, setData] = useState();

  return (
    <div>
      <GetData setFunc={setData} />
      <TableRow data={data} />
    </div>
  );
}

export default App;
