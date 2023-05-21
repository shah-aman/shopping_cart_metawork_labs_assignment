import { useRef } from "react"
import { useState } from "react"
import useAppStore from "../../app/store"
import { useBEM } from "../../customHooks"
import CartAmt from "./cartAmt/CartAmt"

const AddToCart = () => {

    const tOrderId = useRef(1);

    const [B,E] = useBEM('addtocart')
    const [amt, setAmt] = useState(0)

    const addToCart = useAppStore(state => state.addToCart)
    const setNewItems = useAppStore(state => state.setNewItems)

    const addItem = () => {
        if(amt !== 0){
            addToCart(
                {
                    itemId: tOrderId.current,
                    itemName: 'Fall Limited Edition Sneakers',
                    itemImgUrl: 'images/image-product-1-thumbnail.jpg',
                    itemPrice: 125.00,
                    itemAmt: amt,
                }
            )
    
            setNewItems(amt)

            tOrderId.current += 1;
        }
    }

    return(
        <div className={B()}>
            <CartAmt amt={amt} setAmt={setAmt}/>
            <button onClick={addItem} className={E('btn')}>
                <img src="images/icon-cart.svg" alt="" />
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart;
