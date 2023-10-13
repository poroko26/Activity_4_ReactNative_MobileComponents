import * as React from 'react';
import { DataTable } from 'react-native-paper';

const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(2);

  const items = [
    {
      key: 1,
      name: 'AJ Felisilda',
      Age: 20,
      Weight: 42,
    },
    {
      key: 2,
      name: 'NJ Paguican',
      Age: 21,
      Weight: 55,
    },
    {
      key: 3,
      name: 'Rodel Garcia',
      Age: 21,
      Weight: 52,
    },
    {
      key: 4,
      name: 'EM Sarabia',
      Age: 21,
      Weight: 55,
    },
  ];

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setPage(0);
  };

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Student Name</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
        <DataTable.Title numeric>Weight</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.Age}</DataTable.Cell>
          <DataTable.Cell numeric>{item.Weight}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={handlePageChange}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={[2, 3, 4]}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default MyComponent;
