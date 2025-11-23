import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../components/Header";

import { BrowserRouter } from "react-router";

// Our header component has Link from the router, so make sure to wrap with BrowserRouter
describe("Header component", () => {
    it("render the header for home page", () => {
        render(
            <BrowserRouter>
                <Header className={"header-home-page"} isHomePageSelected={true}/>
            </BrowserRouter>
        )
        expect(screen.getByText("Discover ether items")).toBeInTheDocument()
    })

    it("render the correct nav link", () => {
        render(
            <BrowserRouter>
                <Header className={"header-home-page"} />
            </BrowserRouter>
        )
        expect(screen.getByText("Home")).toBeInTheDocument()
        expect(screen.getByText("Shop")).toBeInTheDocument()
    })
})