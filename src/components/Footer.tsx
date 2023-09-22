import { Box, Typography, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ContainerBoxStyles } from '../constants/Styles';
import { theme } from '../constants/Theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    const icons = [<FacebookIcon />, <InstagramIcon />, <TwitterIcon />];
    const footerLinkStyles = {

        transition: 'all .2s ease',
        '&:hover': {

            color: 'secondary.main'
        }
    };

    const iconLinkStyles = {

        position: 'relative',
        borderRadius: '50%',
        border: '1px solid #0e4627',
        width: '40px',
        height: '40px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        transition: 'all .2s ease',

        '&:hover': {

            transform: 'translateY(-5px)',
            boxShadow: '0px 10px 10px rgba(249, 188, 96, .35)',
            color: '#f9bc60'
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                component='footer'
                color='primary.main'
                sx={{ p: 3, borderTop: '1px solid #0e4627' }}
            >
                <Box
                    component='div'
                    sx={{
                        ...ContainerBoxStyles,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        rowGap: 3,
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >

                    <Typography
                        paragraph={true}
                        sx={{ textAlign: 'center', mb: 0 }}
                    >
                        Szűcs Tamás &copy; / 2022
                    </Typography>

                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            gap: 3,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}
                    >

                        <Link
                            href='/about'
                            underline='none'
                            sx={{ ...footerLinkStyles }}
                        >
                            About us
                        </Link>

                        <Link
                            href='/contact'
                            underline='none'
                            sx={{ ...footerLinkStyles }}
                        >
                            Contact us
                        </Link>

                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >

                            {icons.map((icon, index) => {

                                return (

                                    <Link
                                        href='#'
                                        key={index}
                                        sx={{ ...iconLinkStyles }}>
                                        {icon}
                                    </Link>
                                )

                            })}

                        </Box>

                    </Box>
                </Box>

            </Box>
        </ThemeProvider>
    )
}

export default Footer