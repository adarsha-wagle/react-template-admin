import { Box, Button, Card, Divider, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import ButtonLoading from './button_loading.tsx';

type TDeleteDialogProps = {
  handleDeleteClick: () => void;
  handleCloseClick: () => void;
  deleteMessage: string;
  buttonText?: string;
  buttonBgColor?: 'info' | 'error';
  loadingText?: string;
  isLoading?: boolean;
};

function DeleteDialog({
  handleDeleteClick,
  handleCloseClick,
  deleteMessage,
  buttonText = 'Delete',
  buttonBgColor = 'error',
  loadingText = '',
  isLoading = false,
}: TDeleteDialogProps) {
  return (
    <Card sx={{ p: '0.75rem' }}>
      <Typography variant="subtitle1">Confirm {buttonText}</Typography>
      <Divider />
      <Box sx={{ mt: '0.5rem' }}>
        <Typography variant="subtitle2">{deleteMessage}</Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.5rem',
            mt: '0.75rem',
          }}
        >
          <Button sx={{ color: 'warning.contrastText' }} onClick={handleCloseClick}>
            Cancel
          </Button>
          <ButtonLoading
            isLoading={isLoading}
            loadingText={loadingText}
            buttonText={buttonText}
            sx={{
              backgroundColor: `${buttonBgColor}.dark`,
              color: 'white',
              '&:hover': {
                backgroundColor: `${buttonBgColor}.darker`,
              },
            }}
            onClick={handleDeleteClick}
            initialIcon={<Delete />}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default DeleteDialog;
