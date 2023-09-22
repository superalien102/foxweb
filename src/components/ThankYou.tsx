import React from 'react'
import { FlexCenter } from '../constants/Styles'
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PrimaryButton from './buttons/PrimaryButton';
import { CardSectionStyles } from '../constants/Styles';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../constants/Theme';

const ThankYou = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component='div'
                sx={{ height: '80vh', ...FlexCenter, textAlign: 'center', flexDirection: 'column', gap: 2, ...CardSectionStyles }}
            >
                <Typography
                    variant='h1'
                    color='primary.main'
                    component={motion.h1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .5 }}
                    sx={{ lineHeight: '5rem', marginBottom: { xs: 3, md: 2 } }}
                >Thank you!</Typography>

                <Typography
                    paragraph={true}
                    component={motion.p}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >Your message was sent to us! We will reply to you soon! ❤</Typography>

                <PrimaryButton
                    text='Back to homepage!'
                    link='/#/'
                    icon='home'
                />


            </Box>
        </ThemeProvider>
    )
}

export default ThankYou