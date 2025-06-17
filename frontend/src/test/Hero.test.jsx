import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_Page/Home/Hero";
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const heroImage = screen.getByAltText("Hero_Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const signupButton = screen.getByRole("link", {name:"Signup Now"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
