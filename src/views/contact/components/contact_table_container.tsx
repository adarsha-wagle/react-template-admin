import { useMemo, useState } from 'react';
import { Typography } from '@mui/material';
import { GridFilterModel, GridSortModel } from '@mui/x-data-grid';

import { useGetContactsQuery } from 'src/redux/api/contact_api_slice.ts';
import ContactsTable from './contact_table.tsx';

const ContactTableContainer = () => {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 0, pageSize: 20 });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sort, setSort] = useState<GridSortModel>([]);
  const [sortValue, setSortValue] = useState<string>('');

  const { isLoading, data } = useGetContactsQuery({
    pagination: {
      page: pagination.page + 1,
      limit: pagination.pageSize,
    },
    search: searchQuery,
    sort: sortValue,
  });

  const handleSortChange = (model: GridSortModel) => {
    setSort(model);
    const item = model[0];
    if (item) {
      setSortValue(item.sort || '');
    }
  };

  const handleFilterChange = (model: GridFilterModel) => {
    const item = model.items[0];

    if (item) {
      setSearchQuery(item.value);
    }
  };

  const rows = useMemo(() => data?.contactForms || [], [data?.contactForms]);
  const totalRows = useMemo(() => data?.totalCount || 0, [data?.totalCount]);
  return (
    <>
      <Typography variant="h4" sx={{ my: '1rem' }}>
        Contacts
      </Typography>
      <ContactsTable
        pagination={pagination}
        setPagination={setPagination}
        isLoading={isLoading}
        rows={rows}
        sort={sort}
        handleSortChange={handleSortChange}
        totalRows={totalRows}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
};

export default ContactTableContainer;
