import React, { forwardRef } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        "&:hover": {
            textDecoration: "none"
        },
        marginRight: theme.spacing(2),
        marginTop: "12px",
        textDecoration: "none",
        color: "black"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo: {
        background: `url("/logo.png")`,
        height: "50px",
        width: "50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover"
    }
}));

export default function App() {
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const CustomRouterLink = forwardRef((props, ref) => (
        <div
            ref={ref}
        >
            <Link {...props} />
        </div>
    ))


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/" variant="subtitle1" style={{textDecoration:"none"}}>Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/property" style={{textDecoration:"none"}}>Properties</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link>
            </MenuItem>
        </Menu>
    );

    return (

        <div className={classes.grow}>
            <AppBar position="static" color="transparent">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        </IconButton>

                        <img src="/logo.png" alt="..." width="145" height="59" />

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Typography className={classes.title} variant="subtitle1" noWrap component={CustomRouterLink} to="/">
                                Home
                            </Typography>
                            <Typography className={classes.title} variant="subtitle1" noWrap component={CustomRouterLink} to="/property">
                                Properties
                            </Typography>
                            <Typography className={classes.title} variant="subtitle1" noWrap component={CustomRouterLink} to="/contact">
                                Contact Us
                            </Typography>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </div>

    );
}

