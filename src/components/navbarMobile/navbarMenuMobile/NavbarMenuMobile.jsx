import { useBEM } from "../../customHooks"

const NavigMobileMenu = () => {
    
    const [B,E] = useBEM('mobile-menu')
    
    return (
        <div className={B()}>
        </div>
    )
}

export default NavigMobileMenu