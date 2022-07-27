import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router';
import { useLocation } from "react-router";
import ListItems from './listItems';
import styles from "../styles/paginaPrincipal.module.css"
import logoNDN from "../imagenes/nadieDiceNada.png"
import GalanNeoGalan from "./GalanNeoGalan/GalanNeoGalan";
import RataRana from "./RataRana";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#FF2939',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      backgroundColor: '#FF2939',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
const mdTheme = createTheme();

export default function Principal(props) {



  const [opcion, setOpcion] = React.useState(0);
  const [pagina, setPagina] = React.useState();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const toggleDrawer = () => {
    setOpen(!open);
  };


  React.useEffect(() => {
    switch (opcion) {
      case 0:
        setPagina(<GalanNeoGalan />)
        break;
      case 1:
        setPagina(<RataRana />)
        break;
    }
  }, [opcion])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{maxHeight: '80px'}}>
        
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed}
            }}
          >
            
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              
              <MenuIcon htmlColor="#F9C206"/>

            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {opcion == 0 ? <h5>DESCUBRÍ SI SOS GALAN O NEOGALAN</h5> : <h5>ENTRENA TUS HABILIDADES PARA DIFERENCIAR QUE PERSONAS SON RATAS O RANAS!</h5>}
            </Typography>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <img src={logoNDN} alt='logoNDN' width="80%" height="80%" ></img>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon fontSize="large" htmlColor="#F9C206"/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems Opcion={opcion} SetOpcion={setOpcion} />
            <Divider sx={{ my: 3 }} />
          </List>
        </Drawer>
        <Box
        style={{textAlign: "center"}}
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >

          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            {pagina}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}