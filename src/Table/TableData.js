const getTableData = (locationObj) => {
  const columns = [];
  const data = [];
  for (const key in locationObj) {
    columns.push({
      Header: key,
      accessor: key,
    });
  }

  //simply push this 1 location obj
  data.push(locationObj);

  // push an extra one to test sorting
  data.push({
    number: 9929,
    name: "Random User for sorting test",
    city: "a",
    state: "b",
    country: "c",
    postcode: "d",
    latitude: "e",
    longitude: "f",
    offset: "g",
    description: "h",
  });

  return [columns, data];
};

export default getTableData;
