import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import { HeroSectionStyles, ContainerBoxStyles } from '../constants/Styles';

interface Props {
    h1TextFirstSlice: string;
    h1Color: string;
    h1Span: string;
    h1TextSecondSlice: string;
    pText: string;
    pColor: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    primaryBtnIcon: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    secondaryBtnIcon: string;
    videoBackground: string;
    brTrue: boolean;
}

const HeroSectionVideo = ({ h1TextFirstSlice, h1Color, h1Span, h1TextSecondSlice, pText, pColor, primaryBtnText, primaryBtnLink, primaryBtnIcon, secondaryBtnText, secondaryBtnLink, secondaryBtnIcon, videoBackground, brTrue }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.section}
                transition={{ delay: .25, duration: .25, ease: 'easeInOut', }}
                sx={{
                    ...HeroSectionStyles,
                    position: 'relative',
                    overflow: 'hidden'
                }
                }
            >
                <Box
                    component={motion.div}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: .75, duration: .5, ease: 'easeInOut', }}
                    sx={{
                        ...ContainerBoxStyles
                    }}
                >
                    <Typography variant='h1' color={h1Color}
                        sx={{
                            width: { xs: '100%', md: '70%' },
                            textAlign: 'left',
                            mb: 4,
                            textShadow: '0px 10px 20px rgba(0, 0, 0, .8)',
                        }}
                    >
                        {h1TextFirstSlice}

                        {brTrue === true ? <br /> : ''}
                        <Box component={motion.span} color='secondary.main'> {h1Span} </Box>
                        {h1TextSecondSlice}
                    </Typography>
                    <Typography paragraph={true}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: pColor,
                            textShadow: '0px 4px 8px rgba(0, 0, 0, .8)',
                        }}
                    >
                        {pText}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        gap: 1.75
                    }}>
                        <PrimaryButton
                            text={primaryBtnText}
                            link={primaryBtnLink}
                            icon={primaryBtnIcon}
                        />
                        <SecondaryButton
                            text={secondaryBtnText}
                            link={secondaryBtnLink}
                            icon={secondaryBtnIcon}
                        />
                    </Box>
                </Box>

                <Box
                    component={motion.video}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    autoPlay loop muted
                    sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: -200,
                        minWidth: '100%',
                        minHeight: '100%',
                        objectFit: 'cover',
                        zIndex: -1
                    }}>
                    <Box component='source' src={videoBackground} type='video/mp4' sx={{ objectFit: 'cover' }} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HeroSectionVideo