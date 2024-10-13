import { Card, CardContent, Divider, Typography } from '@mui/material';
import { IBooking } from 'src/types/common_type.ts';

type TBookingDetailsDialogProps = {
  bookingDetails: IBooking;
};

function BookingDetailsDialog({ bookingDetails }: TBookingDetailsDialogProps) {
  console.log(bookingDetails);
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <Typography
          className="responsive__fontsize25 area-normal-800"
          sx={{ color: 'secondary.dark' }}
        >
          Booking Details :
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography className="responsive__fontsize218 area-normal-600">
          {bookingDetails.id}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookingDetailsDialog;
