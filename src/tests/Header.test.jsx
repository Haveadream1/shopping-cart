// import { describe, it, expect } from "vitest";
// import Header from "../components/Header";

// describe("Header component", () => {
//     it("renders correct heading", () => {
//         render(<Header />);
//         expect(screen.getByRole("heading").textContent).toMatch(/test/i);
//     })
// })

// import { describe, it, fireEvent, waitFor, screen } from "vitest";
// import { render } from "@testing-library/react";
// import Header from "../components/Header";
// describe("Header component", () => {
//     it("renders correct heading", () => {
//         const { container } = render(<Header />);
//         expect(screen.getByRole("heading", { container: container }).textContent).toMatch(/test/i);
//     })

//     it("renders correct navigation items", () => {
//         const { container } = render(<Header />);
//         expect(screen.getByText("Home", { container: container })).toBeInTheDocument();
//         expect(screen.getByText("Shop", { container: container })).toBeInTheDocument();
//         expect(screen.getByText("shopping_cart", { container: container })).toBeInTheDocument();
//     })

//     it("renders correct hero on homepage", () => {
//         const { container } = render(<Header isHomePageSelected />);
//         expect(screen.getByText("Discover ether items", { container: container })).toBeInTheDocument();
//         expect(screen.getByRole("img", { name: "hero-image", container: container })).toBeInTheDocument();
//     })
// })

import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
