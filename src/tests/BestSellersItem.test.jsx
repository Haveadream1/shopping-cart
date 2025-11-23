import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BestSellersItem from "../components/BestSellersItem";

describe("Best sellers component", () => {
    it("render the product name", () => {
        render(<BestSellersItem productName="Boots" />)
        expect(screen.getByText("Boots")).toBeInTheDocument()
    })

    it("render the product price", () => {
        render(<BestSellersItem productPrice="205" />)
        expect(screen.getByText("205 ₩")).toBeInTheDocument()
    })

    it("render loading when no image is yet passed", () => {
        render(<BestSellersItem />)
        expect(screen.getByText("Loading ...")).toBeInTheDocument()
    })
})
