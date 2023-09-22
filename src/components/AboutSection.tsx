import React from 'react';
import { Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    xDirection: number;
    aboutSectionIconLightColor: string;
    aboutSectionIconDarkColor: string;
    aboutSectionFirstIllu: string;
    aboutSectionSecondIllu: string;
    aboutSectionIlluWidth: number;
    aboutSectionIlluWidthOnSmallScreen: number;
    aboutSectionIlluInvert: number;
}

const AboutSection = ({ xDirection, aboutSectionIconLightColor, aboutSectionIconDarkColor, aboutSectionFirstIllu, aboutSectionSecondIllu, aboutSectionIlluWidth, aboutSectionIlluWidthOnSmallScreen, aboutSectionIlluInvert }: Props) => {

    const cardSectionIlluStyleLeft = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        maxWidth: { xs: aboutSectionIlluWidthOnSmallScreen, lg: aboutSectionIlluWidth },
        maxHeight: `${aboutSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `brightness(${aboutSectionIlluInvert}%)`
    };

    const cardSectionIlluStyleRight = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        maxWidth: { xs: aboutSectionIlluWidthOnSmallScreen, lg: aboutSectionIlluWidth },
        maxHeight: `${aboutSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `brightness(${aboutSectionIlluInvert}%)`
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                id='about'
                bgcolor='secondary.light'
                component={motion.section}
                sx={{
                    ...CardSectionStyles,
                    position: 'relative'
                }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: xDirection }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color='primary.main'
                        >

                            About us
                        </Typography>
                        <FavoriteIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [aboutSectionIconLightColor, aboutSectionIconDarkColor, aboutSectionIconDarkColor, aboutSectionIconDarkColor, aboutSectionIconLightColor,],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            sx={{
                                fontSize: '3rem',
                                transformOrigin: 'center!important',
                                transformBox: 'fill-box',
                            }}
                        ></FavoriteIcon>
                    </Box>
                </Box>

                <Box
                    component={motion.img}
                    src={aboutSectionFirstIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...cardSectionIlluStyleLeft }}
                />
                <Box
                    component={motion.img}
                    src={aboutSectionSecondIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...cardSectionIlluStyleRight }}
                />
            </Box>
        </ThemeProvider>
    )
}

export default AboutSection