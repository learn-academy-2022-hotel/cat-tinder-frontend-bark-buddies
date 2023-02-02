import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "./Footer"
import "@testing-library/jest-dom"

describe("<Footer />", () => {
    it("has a copyright", () => {
        render( 
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        screen.debug()
        const footer = screen.getByText(/presented/i)
        expect(footer).toBeInTheDocument()
    })
})
