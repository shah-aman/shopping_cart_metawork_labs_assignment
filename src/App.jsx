import './App.scss';
import NavbarDesktop from './components/navbarDesktop/NavbarDesktop';
import NavbarMobile from './components/navbarMobile/NavbarMobile';
import Gallery from './components/gallery/Gallery';
import GalleryMobile from './components/galleryMobile/GalleryMobile';
import { useBEM } from './customHooks';
import AddToCart from './components/addToCart/AddToCart';
import Lightbox from './components/lightbox/Lightbox';
import useAppStore from './app/store';
import { useState, useEffect } from 'react';

const getWidth = () => {
  const {innerWidth} = window
  return innerWidth
}

function App() {

  const [B,E] = useBEM('App')
  const [width, setWidth] = useState(getWidth());

  const lightboxShow = useAppStore((state) => state.lightboxShow);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const respondGallery = () => {
    if (width <= 501) return <GalleryMobile width={width}/>
    return <Gallery/>
  }

  const respondNavbar = () => {
    if (width <= 1024) return <NavbarMobile width={width}/>
    return <NavbarDesktop/>
  }

  return (
    <div className={B()}>
      {lightboxShow && <Lightbox/>}

      {/* <NavbarDesktop/> */}
      {respondNavbar()}
      
      <main>

        {respondGallery()}
        {/* <Gallery/> */}

        <div className={E('prod')}>
          <h2 className={E('prod-company')}>Sneaker Company</h2>

          <h1 className={E('prod-name')}>Fall Limited Edition Sneakers</h1>

          <p className={E('prod-desc')}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <section className={E('prod-pricing')}>
            <span className={E('prod-discount')}>
              <h2 className={E('prod-discount-price')}>$125.00</h2>

              <span className={E('prod-discount-rate')}>50%</span>
            </span>

            <p className={E('prod-baseprice')}>$250.00</p>
          </section>

          <AddToCart/>
        </div>
      </main>

    </div>
  );
}

export default App;
