import { useMemo, useState } from 'react';
import { useGetBookingsQuery } from 'src/redux/api/booking_api_slice.ts';
import { GridFilterModel, GridSortModel } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import BookingTable from './bookings_table.tsx';

function BookingTableContainer() {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 0, pageSize: 20 });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sort, setSort] = useState<GridSortModel>([]);
  const [sortValue, setSortValue] = useState<string>('');

  const { isLoading, data } = useGetBookingsQuery({
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

  const rows = useMemo(() => data?.bookings || [], [data?.bookings]);
  const totalRows = useMemo(() => data?.totalCount || 0, [data?.totalCount]);
  return (
    <div>
      <Typography variant="h4" sx={{ my: '1rem' }}>
        Contacts
      </Typography>
      <BookingTable
        pagination={pagination}
        setPagination={setPagination}
        isLoading={isLoading}
        rows={rows}
        sort={sort}
        handleSortChange={handleSortChange}
        totalRows={totalRows}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default BookingTableContainer;
