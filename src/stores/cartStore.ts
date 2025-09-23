import { CartStoreStateType, CartStoreActionsType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist((set) => ({
        cart: [],
        hasHydrated: false,
        addToCart: (product) => set((state) => { 
            const existingIdx = state.cart.findIndex(p => 
                p.id === product.id &&
                p.selectedSize === product.selectedSize &&
                p.selectedColor === product.selectedColor
            )

            if (existingIdx !== -1) {
                const updatedCart = [...state.cart]
                updatedCart[existingIdx].quantity += product.quantity || 1

                return { cart: updatedCart }
            }

            return { 
                cart: [
                    ...state.cart,
                    {
                        ...product,
                        quantity: 1,
                        selectedSize: product.selectedSize,
                        selectedColor: product.selectedColor,
                    }
                ]
            }
        }),
        removeFromCart: (product) => set((state) => ({ cart: state.cart.filter(p => {
            if (p.id !== product.id) {
                return p
            } 
            if (p.selectedColor !== product.selectedColor || p.selectedSize !== product.selectedSize) {
                return p
            }
            
        })})),
        clearCart: () => set({ cart: [] })
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hasHydrated = true;
                }
            }
        }
    )
)

export default useCartStore