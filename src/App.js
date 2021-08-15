import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table/Table";
import getTableData from "./Table/TableData";
import Styles from "./Table/TableStyles";
import flattenObj from "./utility/flatten";

const URL = "https://randomuser.me/api/?results=20%60";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  // make API call to get table data on mount
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);

      //check error - can also wrap API call in try-catch
      if (!res.ok) {
        throw new Error("Error on API call");
      }
      const data = await res.json();
      const { location } = data.results[0];

      //flatten any nested hierarchy
      const flattenedLocation = flattenObj(location);

      //format data for react-table
      const [columns, tableData] = getTableData(flattenedLocation);
      setTableData(tableData);
      setColumns(columns);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Styles>
        <Table columns={columns} data={tableData} />{" "}
      </Styles>
    </div>
  );
};

export default App;
