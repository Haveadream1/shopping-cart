import { describe, expect, it, vi } from "vitest";
import CartProvider from "../containers/CartContext";
import { render, screen } from "@testing-library/react";
import ShopItem from "../components/ShopItem";

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

describe("Shop item component", () => {
    it("render the item name and price", () => {
        render(
            <CartProvider>
                <ShopItem itemName="Ski" itemPrice="200" />
            </CartProvider>
        )
        expect(screen.getByText("Ski")).toBeInTheDocument()
        expect(screen.getByText("200 ₩")).toBeInTheDocument()
    })

    it("render the button with the started text value", () => {
        render(
            <CartProvider>
                <ShopItem itemName="Ski" itemPrice="200" />
            </CartProvider>
        )
        expect(screen.getByText("Add to cart")).toBeInTheDocument()
    })
})
