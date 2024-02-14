import './NavBrand.css'
import { Link } from 'react-router-dom';

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <span>Flipcart </span>
            </h1>
        </div>
     );
}
 
export default NavBrand;