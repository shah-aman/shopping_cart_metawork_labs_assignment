import { useRef } from "react"
import { useEffect } from "react"
import { useBEM } from "../../../customHooks"
import useAppStore from "../../../app/store"

const LightboxGallery = () => {

    const [B,E] = useBEM('lb-gallery')

    const setLightboxShow = useAppStore((state) => state.setLightboxShow)

    const lbIndex = useRef(1);
    
    const lbImgWindow = useRef();

    const selectImg = (ind) => {
        lbIndex.current = ind;
        lbImgWindow.current.scrollTo({
            top: 0,
            left: 480 * (lbIndex.current - 1) ,
            behavior: 'smooth'
        })
    }

    return(
        <div className={B()}>
            <button onClick={() => {setLightboxShow(false)}} className={E('close')}>
                <img src="images/icon-close.svg" alt=""/>
            </button>
            <section className={E('img-main')}>
                <div id="img-window" ref={lbImgWindow} className={E('img-window')}>
                    <div className={E('img-slider')}>
                        <img id="image-1" src="images/image-product-1.jpg" alt="" />
                        <img id="image-2" src="images/image-product-2.jpg" alt="" />
                        <img id="image-3" src="images/image-product-3.jpg" alt="" />
                        <img id="image-4" src="images/image-product-4.jpg" alt="" />
                    </div>
                </div>
            </section>
            <div className={E('thumbs')}>
                <img onClick={() => {selectImg(1)}} src="images/image-product-1-thumbnail.jpg" alt="" />
                <img onClick={() => {selectImg(2)}} src="images/image-product-2-thumbnail.jpg" alt="" />
                <img onClick={() => {selectImg(3)}} src="images/image-product-3-thumbnail.jpg" alt="" />
                <img onClick={() => {selectImg(4)}} src="images/image-product-4-thumbnail.jpg" alt="" />
            </div>
        </div>
    )
}

export default LightboxGallery;
