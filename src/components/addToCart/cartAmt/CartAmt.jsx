const { useBEM } = require("../../../customHooks")

const CartAmt = ({amt, setAmt}) => {

    const [B,E] = useBEM('cart-amt')

    const incAmt = () => {
        let cAmt = amt;
        setAmt(cAmt + 1);
    }

    const decAmt = () => {
        let cAmt = amt;
        if (cAmt > 0) {
            setAmt(cAmt - 1);
        }
    }

    return(
        <div className={B()}>
            <button onClick={decAmt}>-</button>
            <span>{amt}</span>
            <button onClick={incAmt}>+</button>
        </div>
    )
}

export default CartAmt;
