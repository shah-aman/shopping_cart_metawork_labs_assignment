import { useRef } from "react"
import { useEffect } from "react"
import { useBEM } from "../../customHooks"
import GalleryThumb from "./GalleryThumb"
import useAppStore from "../../app/store"

const Gallery = () => {

    const [B,E] = useBEM('gallery')
    const setLightboxShow = useAppStore((state) => state.setLightboxShow)

    const index = useRef(1);
    
    const imgWindow = useRef();
        
    useEffect(()=>{
        setInterval(() => {
            imgWindow.current.scrollTo({
              top: 0,
              left: 400 * (index.current - 1) ,
              behavior: 'smooth'
            })
            console.log(index.current)
            index.current = index.current === 4 ? 1 : index.current + 1;
        
        },5000)
    },[])

    const selectThumb = ind => {
        if (index.current === ind) return E('thumb', 'showing')
        return E('thumb')
    }

    const selectImg = (ind) => {
        index.current = ind;
        imgWindow.current.scrollTo({
            top: 0,
            left: 400 * (index.current - 1) ,
            behavior: 'smooth'
        })
    }

    return(
        <div className={B()}>
            {/* <img src={displayImg()} alt="" /> */}
            <section className={E('img-main')}>
                <div onClick={() => {setLightboxShow(true)}} id="img-window" ref={imgWindow} className={E('img-window')}>
                    <div className={E('img-slider')}>
                        <img id="image-1" src="images/image-product-1.jpg" alt="" />
                        <img id="image-2" src="images/image-product-2.jpg" alt="" />
                        <img id="image-3" src="images/image-product-3.jpg" alt="" />
                        <img id="image-4" src="images/image-product-4.jpg" alt="" />
                    </div>
                </div>
            </section>
            <div className={E('thumbs')}>
                <GalleryThumb index={index} ind={1} imgWindow={imgWindow} isSelected={index.current === 1}/>
                <GalleryThumb index={index} ind={2} imgWindow={imgWindow} isSelected={index.current === 2}/>
                <GalleryThumb index={index} ind={3} imgWindow={imgWindow} isSelected={index.current === 3}/>
                <GalleryThumb index={index} ind={4} imgWindow={imgWindow} isSelected={index.current === 4}/>
                {/* <img onClick={() => {selectImg(1)}} src="images/image-product-1-thumbnail.jpg" alt="" className={selectThumb(1)}/>
                <img onClick={() => {selectImg(2)}} src="images/image-product-2-thumbnail.jpg" alt="" className={selectThumb(2)}/>
                <img onClick={() => {selectImg(3)}} src="images/image-product-3-thumbnail.jpg" alt="" className={selectThumb(3)}/>
                <img onClick={() => {selectImg(4)}} src="images/image-product-4-thumbnail.jpg" alt="" className={selectThumb(4)}/> */}
            </div>
        </div>
    )
}

export default Gallery;
