import { useState } from "react";
import { useEffect } from "react";
import { useBEM } from "../../customHooks";

const GalleryThumb = ({ind, index, imgWindow}) => {

    const [B,E] = useBEM('gallery-thumb')
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (index.current === ind) {
            setIsSelected(true)
        }
    }, [index.current])

    const selectImg = (ind) => {
        index.current = ind;
        imgWindow.current.scrollTo({
            top: 0,
            left: 400 * (index.current - 1) ,
            behavior: 'smooth'
        })
    }

    const select = () => {
        if(isSelected) return B()
        return B()
    }

    return(
        <div onClick={() => {selectImg(ind)}} className={select()}>
            {/* <div className={E('white-out')}></div> */}
            <img src={`images/image-product-${ind}-thumbnail.jpg`} alt="" />    
        </div>
    )
}

export default GalleryThumb;
