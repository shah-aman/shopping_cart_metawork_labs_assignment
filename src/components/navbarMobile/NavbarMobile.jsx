import { useState } from "react";
import { useBEM } from "../../customHooks";
import Cart from "../cartComponent/Cart";

const NavbarMobile = () => {

    const [B,E] = useBEM('navmobile');
    const [menuSlide, setMenuSlide] = useState(null);

    const openMenu = () => {
        switch(menuSlide){
            case 'open':
                return E('menu', 'open')
            case 'close':
                return E('menu', 'close')
            default:
                return E('menu')
        }
    }

    const openMenuCont = () => {
        switch(menuSlide){
            case 'open':
                return E('menu-cont', 'open')
            case 'close':
                return E('menu-cont', 'close')
            default:
                return E('menu-cont')
        }
    }

    return(
        <div className={B()}>
            <div className={openMenu()}>
                <div className={openMenuCont()}>
                    <button onClick={() => {setMenuSlide('close')}}>
                        <img src="images/icon-close.svg" alt="" />
                    </button>
                    <span>Collections</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            </div>

            <div>
                <button onClick={() => {setMenuSlide('open')}} className={E('menu-btn')}>
                    <img src="images/icon-menu.svg" alt=""/>
                </button>
                <img src="images/logo.svg" alt="" className={E('logo')}/>
            </div> 

            <div>
                <Cart/>
                <img src="images/image-avatar.png" alt="" className={E('avatar')}/>
            </div> 
        </div>
    )
}

export default NavbarMobile;
