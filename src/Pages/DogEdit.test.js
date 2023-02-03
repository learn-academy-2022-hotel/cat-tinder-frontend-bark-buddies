import React from "react"
import { render, screen } from "@testing-library/react"
import DogEdit from "./DogEdit"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import mockDogs from "../mockDogs"

describe("<DogEdit />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
          render(
          <BrowserRouter>
          <Routes>
                <Route 
                path="/dogedit/:id"
                element={<DogEdit dogs={mockDogs} />} 
                />
            </Routes>
          </BrowserRouter>
          , div)
        })
    })


