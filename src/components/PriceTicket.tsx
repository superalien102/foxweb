import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { PriceTicketStyle } from '../constants/Styles';

interface Props {

    ticketTitle: string;
    ticketPrice: number;
    ticketDesc: string;
    ticketCurrency: string;
    className: string;
}

const PriceTicket = ({ className, ticketTitle, ticketPrice, ticketCurrency, ticketDesc }: Props) => {
    return (
        <Box component='div' className={className} sx={{ ...PriceTicketStyle }}>
            <Typography paragraph={true} sx={{ borderBottom: '5px dotted #ccc', pb: 1 }}>{ticketTitle}</Typography>
            <Typography variant='h3'>{ticketPrice} {ticketCurrency}</Typography>
            <Typography paragraph={true} sx={{ fontSize: '14px', color: '#ccc', m: 0 }}>{ticketDesc}</Typography>
        </Box>
    )
}

export default PriceTicket