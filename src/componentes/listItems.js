import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { GiRat, GiBowTie, GiSunglasses } from 'react-icons/gi';
import { FaFrog } from 'react-icons/fa';
import { TbMinusVertical } from 'react-icons/tb';
import "../styles/paginaPrincipal.module.css"

export default function ListItems(props) {

  return (
    <>
      <React.Fragment>
        <ListItemButton onClick={() => { props.SetOpcion(0) }} className='itemButtom' style={{paddingLeft: "5%", paddingTop: "15px"}}>
          <ListItemIcon >
            <GiBowTie size={18} color='#F9C206' /><TbMinusVertical size={18} color='#F9C206' />< GiSunglasses size={18} color='#F9C206' />
          </ListItemIcon>
          <ListItemText primary="Galan o NeoGalan" color='#F9C206' style={{paddingLeft:"15px"}}/>
        </ListItemButton>

        <ListItemButton onClick={() => { props.SetOpcion(1) }} style={{paddingLeft: "5%"}}>
          <ListItemIcon>
            <FaFrog size={18} color='#F9C206' /><TbMinusVertical size={18} color='#F9C206' /><GiRat size={18} color='#F9C206' />
          </ListItemIcon>
          <ListItemText primary="Rana o Rata" color='#F9C206' style={{paddingLeft:"15px"}}/>
        </ListItemButton>
      </React.Fragment>
    </>
  );
}

