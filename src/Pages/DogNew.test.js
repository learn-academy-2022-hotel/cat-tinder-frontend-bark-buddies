import React from "react"
import { render, screen } from "@testing-library/react"
import DogNew from "./DogNew"
import { BrowserRouter } from "react-router-dom"

describe("<DogNew />", () => {
    beforeEach(() => {
    render(
        <BrowserRouter>
            <DogNew />
        </BrowserRouter>
    )
    })
    it("can see the title of the page", () => {
        const element = screen.getByText(/new dog/i)
        expect(element).toBeInTheDocument()
    })
    it("has a form with entries for name, age, enjoys and image", () => {
        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")
        const formEnjoys = screen.getByText(/enjoys/i)
        expect(formEnjoys.getAttribute("For")).toEqual("enjoys")
        const formImage = screen.getByText(/image/i)
        expect(formImage.getAttribute("For")).toEqual("image")
    })
    })


