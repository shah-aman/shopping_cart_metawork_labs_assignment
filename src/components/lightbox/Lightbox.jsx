import { useBEM } from "../../customHooks";
import LightboxGallery from "./lightboxGallery/LightboxGallery";

const Lightbox = () => {

    const [B,E] = useBEM('lightbox')

    return(
        <div className={B()}>
            <LightboxGallery/>
        </div>
    )
}

export default Lightbox;
