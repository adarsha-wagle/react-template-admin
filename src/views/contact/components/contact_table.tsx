import { useCallback, useState } from 'react';
import { DataGrid, GridColDef, GridFilterModel, GridSlots, GridSortModel } from '@mui/x-data-grid';
import {
  IconButton,
  Tooltip,
  Box,
  Dialog,
  Card,
  CardContent,
  Typography,
  Divider,
  LinearProgress,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import { IContactForm } from 'src/types/common_type.ts';
// import ContactFormStatusPopup from 'src/components/popup/form_status_popup.tsx';
import { useDeleteContactByIdMutation } from 'src/redux/api/contact_api_slice.ts';
import { throwErrorToast, throwSuccessToast } from 'src/utils/throw_toast.tsx';
import DeleteDialog from 'src/components/ui/delete_dialog.tsx';

interface IContactsTable {
  pagination: {
    page: number;
    pageSize: number;
  };
  setPagination: any;
  isLoading: boolean;
  rows: IContactForm[];
  sort: GridSortModel;
  handleSortChange: (model: GridSortModel) => void;
  totalRows: number;
  handleFilterChange: (model: GridFilterModel) => void;
}

export default function ContactsTable({
  pagination,
  setPagination,
  isLoading,
  rows,
  sort,
  handleSortChange,
  totalRows,
  handleFilterChange,
}: IContactsTable) {
  const [open, setOpen] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>('');
  //   const [openStatusChange, setOpenStatusChange] = useState<boolean>(false);
  const [selectedContactForm, setSelectedContactForm] = useState<{
    id: string;
    status: string;
    name: string;
  }>({
    id: '',
    status: '',
    name: '',
  });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  //   eslint-disable-next-line
  const getRowClassName = (params: any) =>
    //   eslint-disable-next-line
    params.indexRelativeToCurrentPage % 2 === 1 ? 'odd-row' : 'even-row';

  //   const [changeReadStatus, { isLoading: loadingReadStatus }] =
  //   useChangeContactFormStatusMutation();
  const [deleteContactById, { isLoading: isDeleteLoading }] = useDeleteContactByIdMutation();

  //   const handleChangeContactFormStatus = useCallback(
  //     async (changedStatus: string) => {
  //       if (!changedStatus) return;
  //       await changeReadStatus({ contactFormId: selectedContactForm.id, status: changedStatus })
  //         .unwrap()
  //         .then(() => {
  //           throwSuccessToast('Read status changed successfully');
  //           setOpenStatusChange(false);
  //         })
  //         .catch((err) => {
  //           const errMsg = err?.data?.message || 'Failed to change read status';
  //           throwErrorToast(errMsg);
  //         });
  //     },
  //     [changeReadStatus, selectedContactForm.id]
  //   );

  const handleDeleteClick = async (id: string) => {
    await deleteContactById({ contactId: id })
      .unwrap()
      .then(() => {
        throwSuccessToast('Contact deleted successfully');
        setIsDeleteDialogOpen(false);
      })
      .catch((err) => {
        const errMsg = err?.data?.message || 'Failed to delete contact';
        throwErrorToast(errMsg);
      });
  };

  const handleDialogOpen = (message: string) => {
    setOpen(true);
    setDialogMessage(message);
  };
  const handleChangeStatus = useCallback((id: string, status: string, name: string) => {
    setSelectedContactForm({ id, status, name });
    // setOpenStatusChange(true);
  }, []);

  const handleDeleteDialogOpen = (id: string, status: string, name: string) => {
    setSelectedContactForm({ id, status, name });
    setIsDeleteDialogOpen(true);
  };
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      filterable: false,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      filterable: false,
    },
    {
      field: 'email',
      headerName: 'Customer Email',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      //  eslint-disable-next-line
    },
    {
      field: 'message',
      headerName: 'Message',
      width: 300,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      filterable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) => <Box>{row?.status}</Box>,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      filterable: false,
      width: 120,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#217442',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteDialogOpen(row?._id, row?.status, row?.name)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="View Message">
            <IconButton onClick={() => handleDialogOpen(row?.message)}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Status">
            <IconButton onClick={() => handleChangeStatus(row?._id, row?.status, row?.name)}>
              <VerifiedUserIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  //   const closeContactFormStatusPopup = () => {
  //     setOpenStatusChange(false);
  //   };
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        getRowClassName={getRowClassName}
        columns={columns}
        rows={rows}
        getRowId={(row) => row._id}
        rowCount={totalRows}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
        paginationModel={pagination}
        onPaginationModelChange={setPagination}
        filterMode="server"
        sortModel={sort}
        onSortModelChange={handleSortChange}
        onFilterModelChange={handleFilterChange}
        filterDebounceMs={750}
        slots={{
          loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
        }}
        disableRowSelectionOnClick
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <Typography
              className="responsive__fontsize25 area-normal-800"
              sx={{ color: 'secondary.dark' }}
            >
              Contact Message :
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography className="responsive__fontsize218 area-normal-600">
              {dialogMessage}
            </Typography>
          </CardContent>
        </Card>
      </Dialog>
      {/* <Dialog open={openStatusChange} onClose={closeContactFormSt
      atusPopup} maxWidth="xs" fullWidth>
        <DialogContent>
          <ContactFormStatusPopup
            handleCloseClick={closeContactFormStatusPopup}
            handleChangeClick={handleChangeContactFormStatus}
            defaultValue={selectedContactForm.status}
            buttonText={loadingReadStatus ? 'Saving...' : 'Save'}
          />
        </DialogContent>
      </Dialog> */}
      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog} maxWidth="xs" fullWidth>
        <DeleteDialog
          deleteMessage={`Are you sure you want to delete contact message by ${selectedContactForm.name} ?`}
          loadingText={isDeleteLoading ? 'Deleting' : 'Delete'}
          handleCloseClick={closeDeleteDialog}
          handleDeleteClick={() => handleDeleteClick(selectedContactForm.id)}
          buttonText="Delete"
          buttonBgColor="error"
        />
      </Dialog>
    </Box>
  );
}
