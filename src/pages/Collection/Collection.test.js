import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Collection from './Collection';
import App from '../../App';


test('header: all collections', () => {
    render(<Collection />);
    waitFor(() => {
        const allCollections = screen.getByTestId("allCollectoins");
        const keyword1 = screen.queryByText(/all/i);
        const keyword2 = screen.queryByText(/COLLECTIONS/i);
        expect(allCollections).toBeInTheDocument();
        expect(keyword1).toBeInTheDocument();
        expect(keyword2).toBeInTheDocument();
    })
});

test('products list exist', () => {
    render(<Collection />);
    waitFor(() => {
        const allCollections = screen.getByTestId("allCollectoins");
        const products = [...allCollections.getElementsByClassName("productCard")].length;
        expect(Boolean(products)).toBe(products > 0);
    })
});

test('search feature exist', () => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<App />}/>
                </Routes>
            </BrowserRouter>
        );
    const searchBtn = screen.getByTestId("search");
    fireEvent.click(searchBtn);
    waitFor(() => {
        const searchBar = screen.getByTestId("searchBar");
        expect(searchBar).toBeInTheDocument();
    })
});

test('search feature exist', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<App />}/>
                <Route element= {<Collection />}/>
            </Routes>
        </BrowserRouter>
    );
    const searchBtn = screen.getByTestId("search");
    fireEvent.click(searchBtn);

    waitFor(() => {
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeInTheDocument();
    
        fireEvent.change(searchInput, { target: { value: 'tekken' } });
        const productCardNames = [...screen.getByTestId("allCollectoins").getElementsByClassName("productCardName")];
        for(let item of productCardNames) {
            expect( Boolean(item.innerHTML.includes("tekken")) ).toBe(true);
        }
    })
});