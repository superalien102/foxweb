import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import { HeroSectionStyles, ContainerBoxStyles } from '../constants/Styles';

interface Props {
    backgroundImage: string;
    h1TextFirstSlice: string;
    h1Span: string;
    h1TextSecondSlice: string;
    pText: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    primaryBtnIcon: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    secondaryBtnIcon: string;
}

const HeroSection = ({ backgroundImage, h1TextFirstSlice, h1Span, h1TextSecondSlice, pText, primaryBtnText, primaryBtnLink, primaryBtnIcon, secondaryBtnText, secondaryBtnLink, secondaryBtnIcon }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.section}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .25, duration: .25, ease: 'easeInOut', }}
                sx={{
                    ...HeroSectionStyles,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: { xs: 'center', md: '0% 0%' }
                }
                }
            >
                <Box
                    component={motion.div}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .75, duration: .5, ease: 'easeInOut', }}
                    sx={{
                        ...ContainerBoxStyles
                    }}
                >
                    <Typography variant='h1' color='primary'
                        sx={{
                            width: { xs: '100%', md: '70%' },
                            textAlign: 'left',
                            mb: 4,
                        }}
                    >
                        {h1TextFirstSlice}
                        <Box component={motion.span} color='secondary.main'> {h1Span} </Box>
                        {h1TextSecondSlice}
                    </Typography>
                    <Typography paragraph={true} color='main'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: { xs: 'secondary.light', xl: '#272727' },
                            textShadow: { xs: '0px 4px 8px rgba(0, 0, 0, .8)', xl: 'none' },
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
            </Box>
        </ThemeProvider >
    )
}

export default HeroSection