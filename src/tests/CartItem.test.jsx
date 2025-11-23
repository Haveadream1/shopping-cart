import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CartItem from "../components/CartItem";
import CartProvider from "../containers/CartContext";


// Go in the CartContext and look for the value object, copy and past vi.fn() so we can test the component
vi.mock("../path/to/useCart", () => ({
  useCart: () => ({
    idArr: vi.fn(),
    addItemsIdToCart: vi.fn(),
    isItemIdInCart: vi.fn(),
    clearIdArr: vi.fn(),
    itemQuantity: vi.fn(),
    increaseItemQuantity: vi.fn(),
    decreaseItemQuantity: vi.fn(),
    resetAllItemsQuantity: vi.fn(),
    resetItemQuantity: vi.fn(),
    removeIdFromCart: vi.fn(),
    subTotal: vi.fn(),
    setSubTotal: vi.fn(),
    resetSubTotal: vi.fn()
  }),
}));

// As described in the CartContext, we need to use a CartProvider, so wrap it in the render
describe("Best sellers component", () => {
    it("render the product name", () => {
        render(
            <CartProvider>
                <CartItem itemName="Boots" />
            </CartProvider>
        )
        expect(screen.getByText("Boots")).toBeInTheDocument()
    })

    it("render the product name", () => {
        render(
            <CartProvider>
                <CartItem imageAlt="Sunglass" />
            </CartProvider>
        )
        expect(screen.getByAltText("Sunglass")).toBeInTheDocument()
    })

    // We assign the render to be our container from which we fetch the element with a specific class, in order to check content
    it("render the product name", () => {
        const {container} = render(
            <CartProvider>
                <CartItem itemName="Boots" />
            </CartProvider>
        )
        const quantityElement = container.querySelector(".quantity-text")
        expect(quantityElement).toHaveTextContent("1")
    })
})
