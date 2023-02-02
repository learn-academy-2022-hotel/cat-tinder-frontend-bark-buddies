import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import DogIndex from "./DogIndex"
import mockDogs from "../mockDogs"

describe("<DogIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
        render(
        <BrowserRouter>
        <DogIndex />
        </BrowserRouter>
        , div)
  })

  it("renders dog cards", () => {
    const div = document.createElement("div")
    render(
        <BrowserRouter>
    <DogIndex dogs={mockDogs} />
    </BrowserRouter>, div)
    mockDogs.forEach(dog => {
      const dogName = screen.getByText(dog.name)
      expect(dogName).toBeInTheDocument()
    })
  })
})

