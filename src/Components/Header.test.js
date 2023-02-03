import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>,
          div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "dogLogo.png")
        expect(logo).toHaveAttribute("alt", "Dog Tinder logo with outline of Dog")
        
      })
    it("has clickable links", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Dogs"))
  expect(screen.getByText("Meet the Dogs")).toBeInTheDocument()
  userEvent.click(screen.getByText("Add a New Dog"))
  expect(screen.getByText("Add a New Dog")).toBeInTheDocument()
  userEvent.click(screen.getByText("Adopt a Dog!"))
  expect(screen.getByText("Adopt a Dog!")).toBeInTheDocument()
      })
})