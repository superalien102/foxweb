import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import Logo from './Logo';
import { useScrollPosition } from '../hooks/useScrollPosition';

const pages = ['Homepage', 'Events', 'Discover', 'Prices', 'About us', 'Contact us'];
const pagesLinks = ['/foxvillage/', '/foxvillage/#/events', '/foxvillage/#/discover', '/#prices', '/#about', '/#contact'];
const subPages = ['Night Trip', 'Animal Shows', 'Close Up', 'Animals', 'Poultry Yard', 'Fox Forest'];
const subPagesLinks = ['/foxvillage/#/events/night-trip', '/foxvillage/#/events/animal-show', '/foxvillage/#/events/close-up', '/foxvillage/#/discover/animals', '/foxvillage/#/discover/poultry-yard', '/foxvillage/#/discover/fox-forest'];

const Navbar = () => {

    const scrollPosition = useScrollPosition();

    let [isVisible, setIsVisible] = useState(0);
    let [hover, setHover] = useState(false);

    const [hamburgerRightMenu, setHamburgerRightMenu] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                color="primary"
                style={{
                    position: 'static',
                    ...(scrollPosition > 0 && {
                        position: 'sticky',
                        top: 0,
                        borderBottom: '6px solid #fff'
                    }),
                    zIndex: '99999',
                    boxShadow: 'none'
                }}
            >
                <Container maxWidth="xl" sx={{ my: 2 }}>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', position: 'static' }}>
                        <Link
                            href={pagesLinks[0]}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Logo
                                width={150}
                                fill={hover === true ? '#f9bc60' : '#fff'}
                            />
                        </Link>

                        <Box sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', md: 'none' },
                        }}>
                            <IconButton
                                size="large"
                                aria-label="menu-appbar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => setHamburgerRightMenu(true)}
                                color="inherit"
                            >
                                <MenuIcon sx={{ fontSize: '1.75rem' }} />
                            </IconButton>

                            {/* here goes rightmenu in hamburger */}
                            <AnimatePresence>
                                {hamburgerRightMenu && (
                                    <Box
                                        component={motion.div}
                                        initial={{ x: 200, opacity: 0, }}
                                        animate={{ x: 0, opacity: 1, }}
                                        exit={{ x: 200, opacity: 0, }}
                                        sx={{
                                            width: '200px',
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            backgroundColor: 'secondary.main',
                                            color: 'primary.main',
                                            padding: 2,
                                            borderRadius: '0px 0px 0px 10px'
                                        }}
                                        className="dropdown-content">

                                        <Box
                                            component='span'
                                            sx={{

                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: 'primary.main',
                                                borderRadius: '50%',
                                                margin: '.5rem'
                                            }}
                                        >
                                            <KeyboardArrowRightIcon
                                                sx={{ color: 'secondary.light' }}
                                                onClick={() => setHamburgerRightMenu(false)}
                                            />
                                        </Box>
                                        <Box
                                            component='div'
                                            sx={{
                                                display: 'block',
                                            }}
                                        >
                                            {pages.map((page, index) => (
                                                <Link
                                                    underline="none"
                                                    href={pagesLinks[index]}
                                                    key={index}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            color: 'primary.main',
                                                            backgroundColor: 'transparent',
                                                            padding: '16px',
                                                            '&:focus': {
                                                                backgroundColor: 'transparent'
                                                            }
                                                        }}
                                                        key={`firstMobileLink${index}`}
                                                        className="dropbtn"
                                                        disableElevation>
                                                        {page}
                                                    </Button>
                                                </Link>
                                            )).slice(0, 1)}

                                            <Box className="dropdown" onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}>
                                                <Button
                                                    variant="contained"
                                                    className="dropbtn"
                                                    sx={{

                                                        color: '#0e4627!important',
                                                        '&:hover': {

                                                            color: '#fff!important'
                                                        }
                                                    }}
                                                    disableElevation>
                                                    Events
                                                </Button>
                                                <AnimatePresence>
                                                    {isVisible === 1 && (
                                                        <Box
                                                            component={motion.div}
                                                            initial={{ y: -10, opacity: 0, }}
                                                            whileInView={{
                                                                y: 0,
                                                                opacity: 1,
                                                                transition: { duration: .2 }
                                                            }}
                                                            exit={{ y: -10, opacity: 0, }}
                                                            sx={{
                                                                backgroundColor: '#fff!important',
                                                                width: '100%',
                                                                borderRadius: '0px 0px 0px 10px!important'
                                                            }}
                                                            className="dropdown-content">
                                                            {subPages.map((subPage, index) => (

                                                                <Link
                                                                    underline="none"
                                                                    style={{ textDecoration: "none" }}
                                                                    href={subPagesLinks[index]}
                                                                    key={index}
                                                                >
                                                                    {subPage}
                                                                </Link>
                                                            )).slice(0, 3)}
                                                        </Box>)}
                                                </AnimatePresence>
                                            </Box>

                                            <Box className="dropdown" onMouseEnter={() => setIsVisible(2)} onMouseLeave={() => setIsVisible(0)}>
                                                <Button
                                                    variant="contained"
                                                    className="dropbtn"
                                                    sx={{

                                                        color: '#0e4627!important',
                                                        '&:hover': {

                                                            color: '#fff!important'
                                                        }
                                                    }}
                                                    disableElevation>
                                                    Discover
                                                </Button>
                                                <AnimatePresence>
                                                    {isVisible === 2 && (
                                                        <Box
                                                            component={motion.div}
                                                            initial={{ y: -10, opacity: 0, }}
                                                            whileInView={{
                                                                y: 0,
                                                                opacity: 1,
                                                                transition: { duration: .2 }
                                                            }}
                                                            exit={{ y: -10, opacity: 0, }}
                                                            sx={{
                                                                backgroundColor: '#fff!important',
                                                                width: '100%',
                                                                borderRadius: '0px 0px 0px 10px!important'
                                                            }}
                                                            className="dropdown-content">
                                                            {subPages.map((subPage, index) => (

                                                                <Link
                                                                    underline="none"
                                                                    style={{ textDecoration: "none" }}
                                                                    href={subPagesLinks[index]}
                                                                    key={index}
                                                                >
                                                                    {subPage}
                                                                </Link>
                                                            )).slice(3, subPages.length)}
                                                        </Box>
                                                    )}
                                                </AnimatePresence>
                                            </Box>

                                            {pages.map((page, index) => (

                                                <Link
                                                    underline="none"
                                                    color="secondary.light"
                                                    href={pagesLinks[index]}
                                                    key={page}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            color: 'primary.main',
                                                            backgroundColor: 'transparent',
                                                            padding: '16px',
                                                            '&:focus': {
                                                                backgroundColor: 'transparent'
                                                            }
                                                        }}
                                                        key={`lastTwoMobileLinksInHeader${index}`}
                                                        className="dropbtn"
                                                        disableElevation>
                                                        {page}
                                                    </Button>
                                                </Link>
                                            )).slice(4, pages.length)}


                                        </Box>
                                    </Box>
                                )}
                            </AnimatePresence>

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>

                            <Box component='div' sx={{ display: 'flex' }}>
                                {pages.map((page, index) => (
                                    <Button
                                        variant="contained"
                                        key={`firstDesktopLink${index}`}
                                        disableElevation>
                                        <Link
                                            underline="none"
                                            color="secondary.light"
                                            href={pagesLinks[index]}
                                        >
                                            {page}
                                        </Link>
                                    </Button>
                                )).slice(0, 1)}

                                <Box className="dropdown" onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}>
                                    <Button
                                        variant="contained"
                                        className="dropbtn"
                                        key={'b'}
                                        disableElevation>
                                        Events
                                    </Button>
                                    <AnimatePresence>
                                        {isVisible === 1 && (
                                            <Box
                                                component={motion.div}
                                                initial={{ y: -10, opacity: 0, }}
                                                whileInView={{
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: { duration: .2 }
                                                }}
                                                exit={{ y: -10, opacity: 0, }}
                                                className="dropdown-content">
                                                {subPages.map((subPage, index) => (

                                                    <Link
                                                        underline="none"
                                                        style={{ textDecoration: "none" }}
                                                        href={subPagesLinks[index]}
                                                        key={subPage}
                                                    >
                                                        {subPage}
                                                    </Link>
                                                )).slice(0, 3)}
                                            </Box>)}
                                    </AnimatePresence>
                                </Box>

                                <Box className="dropdown" onMouseEnter={() => setIsVisible(2)} onMouseLeave={() => setIsVisible(0)}>
                                    <Button variant="contained" className="dropbtn" disableElevation>
                                        Discover
                                    </Button>
                                    <AnimatePresence>
                                        {isVisible === 2 && (
                                            <Box
                                                component={motion.div}
                                                initial={{ y: -10, opacity: 0, }}
                                                whileInView={{
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: { duration: .2 }
                                                }}
                                                exit={{ y: -10, opacity: 0, }}
                                                className="dropdown-content">
                                                {subPages.map((subPage, index) => (

                                                    <Link
                                                        underline="none"
                                                        style={{ textDecoration: "none" }}
                                                        href={subPagesLinks[index]}
                                                        key={subPage}
                                                    >
                                                        {subPage}
                                                    </Link>
                                                )).slice(3, subPages.length)}
                                            </Box>
                                        )}
                                    </AnimatePresence>
                                </Box>
                            </Box>

                            <Link
                                href={pagesLinks[0]}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            >
                                <Logo
                                    width={150}
                                    fill={hover === true ? '#f9bc60' : '#fff'}
                                />
                            </Link>

                            <Box component='div' sx={{ display: 'flex' }}>
                                {pages.map((page, index) => (
                                    <Button
                                        variant="contained"
                                        key={`lastDesktopLinks${index}`}
                                        disableElevation>
                                        <RouterLink
                                            style={{ color: '#fff', textDecoration: 'none' }}
                                            to={pagesLinks[index]}

                                        >
                                            {page}
                                        </RouterLink>
                                    </Button>
                                )).slice(3, pages.length)}
                            </Box>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider >
    )
}

export default Navbar;
