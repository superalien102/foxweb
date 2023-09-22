import React from 'react';
import { Box } from '@mui/material';
import PriceTicket from './PriceTicket';
import { motion } from 'framer-motion';

interface Props {

    currency: string;
    priceListArray: Array<{}>;
}

const PriceListRow = ({ currency, priceListArray }: Props) => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, height: '0%', y: -30 }}
            animate={{ opacity: 1, height: '100%', y: 0 }}
            exit={{ opacity: 0, height: '0%', y: -30 }}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: { xs: 2, md: 6 },
                width: '100%',
                flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            {
                priceListArray.map((ticket: any, index: number) => {

                    const EUR_TO_HUF_CHANGE = 402;
                    const EUR_TO_USD_CHANGE = 0.99;

                    switch (currency) {
                        case '€':
                            return (
                                <PriceTicket
                                    className='pricelist-row-ticket'
                                    key={index}
                                    ticketTitle={ticket.title}
                                    ticketPrice={Math.trunc(ticket.price)}
                                    ticketCurrency={currency}
                                    ticketDesc={ticket.desc}
                                />
                            )
                        case 'Ft':
                            return (
                                <PriceTicket
                                    className='pricelist-row-ticket'
                                    key={index}
                                    ticketTitle={ticket.title}
                                    ticketPrice={Math.round((Math.round(ticket.price * EUR_TO_HUF_CHANGE)) / 10) * 10}
                                    ticketCurrency={currency}
                                    ticketDesc={ticket.desc}
                                />
                            )
                        case '$':
                            return (
                                <PriceTicket
                                    className='pricelist-row-ticket'
                                    key={index}
                                    ticketTitle={ticket.title}
                                    ticketPrice={Math.trunc(ticket.price * EUR_TO_USD_CHANGE)}
                                    ticketCurrency={currency}
                                    ticketDesc={ticket.desc}
                                />
                            )
                    }

                    return ticket;
                })

            }

        </Box>
    )
}

export default PriceListRow