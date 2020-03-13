// Code snippet to populate row of data for a table

const id = (function*() {
    let id = 0;
    while (true) {
      id += 1;
      yield id;
    }
  })();
const rowData = (name, calories, fat, carbs, protein) => ({
    id: id.next().value,
    name,
    calories,
    fat,
    carbs,
    protein
  });
  
  const rows = [
    rowData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    rowData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    rowData('Eclair', 262, 16.0, 24, 6.0),
    rowData('Cupcake', 305, 3.7, 67, 4.3),
    rowData('Gingerbread', 356, 16.0, 49, 3.9)
  ];

  console.log(rows)