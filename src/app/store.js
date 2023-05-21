import create from 'zustand';

const appStore = (set) => ({
    cart: [],
    addToCart: (item) => {
        set((state) => ({
            cart: [item, ...state.cart],
        }))
    },
    removeFromCart: (itemId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.itemId !== itemId),
        }))
    },
    newItems: 0,
    setNewItems: (num) => set({ newItems: num }),
    lightboxShow: false,
    setLightboxShow: (bool) => set({ lightboxShow: bool }),
})

const useAppStore = create(appStore);

export default useAppStore;