import Cart from "../cartComponent/Cart";

const { useBEM } = require("../../customHooks")

const NavbarDesktop = () => {

    const [B,E] = useBEM('navdesk')


    return(
        <div className={B()}>
            <div>
            <img src="images/logo.svg" alt="website logo" className={E('logo')}/>
            <nav>
                <span className={E('cat')}>Collections</span>
                <span className={E('cat')}>Men</span>
                <span className={E('cat')}>Women</span>
                <span className={E('cat')}>About</span>
                <span className={E('cat')}>Contact</span>
            </nav>
            </div>

            <div className={E('icons')}>
                {/* <img src="images/icon-cart.svg" alt="" /> */}
                <Cart/>
                <img src="images/image-avatar.png" alt="" className={E('avatar')}/>
            </div>
        </div>
    )
}

export default NavbarDesktop;
