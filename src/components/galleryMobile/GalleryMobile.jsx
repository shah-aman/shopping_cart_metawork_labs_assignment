import { useBEM } from "../../customHooks";
import { useRef } from "react";
import useAppStore from "../../app/store"

const GalleryMobile = ({width}) => {

    const [B,E] = useBEM('gallery-mobile')

    const index = useRef(1);
    const imgWindow = useRef();
    const setLightboxShow = useAppStore((state) => state.setLightboxShow)

    // const galHeight = document.querySelector('.gallery-mobile__img-main').clientHeight;

    // console.log(galHeight)

    const pressNext = () => {
        index.current = index.current === 4 ? 1 : index.current + 1;
        imgWindow.current.scrollTo({
            top: 0,
            left: width * (index.current - 1),
            behavior: 'smooth'
        })
    }

    const pressPrev = () => {
        index.current = index.current === 1 ? 4 : index.current - 1;
        imgWindow.current.scrollTo({
            top: 0,
            left: width * (index.current - 1) ,
            behavior: 'smooth'
        })
    }

    return(
        <div className={B()}>
            <section className={E('img-main')}>
                <div style={{'--galHt':`${Math.round(width/2)}px`}} className={E('btn-div')}>
                    <button onClick={pressPrev}>
                        <img src="images/icon-previous.svg" alt="" />
                    </button>
                    <button onClick={pressNext}>
                        <img src="images/icon-next.svg" alt="" />
                    </button>
                </div>
                <div id="img-window" ref={imgWindow} className={E('img-window')}>
                    <div className={E('img-slider')}>
                        <img id="image-1" src="images/image-product-1.jpg" alt="" />
                        <img id="image-2" src="images/image-product-2.jpg" alt="" />
                        <img id="image-3" src="images/image-product-3.jpg" alt="" />
                        <img id="image-4" src="images/image-product-4.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GalleryMobile;
