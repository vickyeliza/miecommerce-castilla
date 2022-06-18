import React, {useState} from "react";
import logo from "../../assets/logoTiendaOnline.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { flexbox } from "@mui/system";

const Header =() =>{
const [first, setfirst] = useState(second)

    width: document.documentElement.clientWidth;
    height: document.documentElement.clientHeight;

    return (
    <header style={styles.container} >
         <img style={styles.imagen} src={logo} alt="" />
         <h1>Mi Ecommerce</h1>
         <nav>
           <a style={styles.anchors} href="">Categoria 1</a>
           <a style={styles.anchors} href="">Categoria 2</a>
           <a style={styles.anchors} href="">Categoria 3</a>
         </nav>
         <ShoppingCartIcon color="success" fontSize="large" />
    </header>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
        width: viewport.width > 900 ? '45%' : '100%'
    },
    imagen: {
        with: '5%',
    },
    anchors: {
        padding: 10
    },
}

export default Header

if (this.state.viewport.width > 900) {
    style = {width: '45%' , margin: '2.5%'};
   }
   else {
       style = {width: '100%' , margin: '0'};
   }

