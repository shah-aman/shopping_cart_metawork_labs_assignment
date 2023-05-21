import { useBEM } from "../../customHooks";
import useAppStore from "../../app/store"

const CartItem = ({item}) => {

    const [B,E] = useBEM('cart-item')

    const removeFromCart = useAppStore(state => state.removeFromCart);
    const setNewItems = useAppStore(state => state.setNewItems);

    const removeItem = () => {
        removeFromCart(item.itemId)
        setNewItems(0)
    }

    return(
        <div className={B()}>
            <img src={item.itemImgUrl} alt="" className={E('thumb')}/>
            <section>
                <h2 className={E('name')}>{item.itemName}</h2>
                <span className={E('price-sect')}>
                    {`$${item.itemPrice}.00 x ${item.itemAmt}`}
                    <span className={E('price-total')}>{`$${item.itemPrice * item.itemAmt}.00`}</span>
                </span>
            </section>
            <button onClick={removeItem}>
                <img src="images/icon-delete.svg" alt="" />
            </button>
        </div>
    )
}

export default CartItem;
