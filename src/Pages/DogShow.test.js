import React from "react"
import { render, screen } from "@testing-library/react"
import DogShow from "./DogShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockDogs from "../mockDogs"

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/dogshow/1"]}>
            <Routes>
                <Route path="dogshow/:id" element={<DogShow dogs={mockDogs}/>} />
            </Routes>
        </MemoryRouter>
    )
}
describe("<DogShow />", () => {
  it("renders dog cards with enjoys", () => {
    renderShow()
    expect(screen.getByText(`${mockDogs[0].enjoys}`)).toBeInTheDocument()
  })
})
