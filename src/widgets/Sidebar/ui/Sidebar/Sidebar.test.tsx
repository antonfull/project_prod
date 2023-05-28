import React from 'react';
import { fireEvent, screen } from "@testing-library/react";
import Sidebar from './Sidebar'
import renderWithTranslation from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe("classNames", () => {
  test("sidebar render", () => {
	renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("sidebar toogle", () => {
    renderWithTranslation(<Sidebar />);
	const toogleBtn = screen.getByTestId("sidebar-toogle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	fireEvent.click(toogleBtn)
	expect(screen.getByTestId("sidebar")).toHaveClass('collapsed');
  });
});
