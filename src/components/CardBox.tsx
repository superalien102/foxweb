import { Typography, Box, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CardButton from './buttons/CardButton';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {

    cardImgSrc: string;
    cardTextH4: string;
    cardTextParagraph: string;
    cardButtonLink: string;
    transitionDelay: any;
    cardBoxColor: string;
    cardTypoColor: string;
}

const CardBox = ({ cardImgSrc, cardTextH4, cardTextParagraph, cardButtonLink, transitionDelay, cardBoxColor, cardTypoColor }: Props) => {

    const [hover, setHover] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Link
                component={motion.a}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}

                transition={{ duration: .5, delay: transitionDelay }}
                href={cardButtonLink}
                sx={{
                    flex: '1',
                    flexGrow: '1',
                    minWidth: { xs: '100%', md: '300px' }
                }}
                underline='none'
            >
                <Box
                    component={motion.div}
                    sx={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        border: `8px solid ${cardBoxColor}`,
                        transition: 'all .2s ease',
                        height: { xs: 'auto', sm: '100%' },
                        '&:hover': {
                            transform: 'translateY(-5px)',
                        }
                    }}
                    bgcolor={cardBoxColor}
                >
                    <Box
                        component='div'
                        sx={{
                            height: '50%',
                            overflow: 'hidden'
                        }}
                    >
                        <Box
                            component='img'
                            src={cardImgSrc}
                            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        ></Box>

                    </Box>

                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'left',
                            flexDirection: 'column',
                            pl: { xs: 0, sm: 3 },
                            py: { xs: 0, sm: 2 }
                        }}
                    >

                        <Typography
                            color={cardTypoColor}
                            variant='h4'
                            sx={{
                                mb: 2,
                                pt: { xs: 3, sm: 0 },
                                pl: { xs: 2, sm: 0 },
                                transition: 'all .2s ease',
                                ...(hover === true && {
                                    color: '#f9bc60',
                                }),
                            }}
                        >
                            {cardTextH4}
                        </Typography>

                        <Typography
                            paragraph={true}
                            color={cardTypoColor}
                            sx={{
                                pl: { xs: 2, sm: 0 }
                            }}
                        >
                            {cardTextParagraph}
                        </Typography>

                        <CardButton
                            text='Watch it!'
                            link={cardButtonLink}
                            icon='rightarrow'
                        />
                    </Box>
                </Box>
            </Link>

        </ThemeProvider>
    )
}

export default CardBox