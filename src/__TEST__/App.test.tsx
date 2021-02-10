import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup);

// Snapshot test
it('renders correctly enzyme', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

it("Renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<App></App>, root);
});

it('Expects Amount input to be disabled upon App mount', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("Input1")).toBeDisabled()
})

it('Expects Estimate button to be disabled upon App mount', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', {name: /^Estimate$/i})).toBeDisabled()
})

it('Expects Swap button to be disabled upon App mount', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', {name: /^Swap$/i})).toBeDisabled()
})

it('Click on Connect button', () => {
    const { getByRole} = render(<App />);
    fireEvent.click(getByRole('button', {name: /^Connect Wallet$/i}))
})

it('Selecting tokens enables Amount Input', () => {
    const { getByTestId } = render(<App />);
    fireEvent.change(getByTestId("Select1"), {target: {value: "WETH"}})
    fireEvent.change(getByTestId("Select2"), {target: {value: "UNI"}})
    expect(getByTestId("Input1")).not.toBeDisabled()
})

it('Selecting tokens and inputting Amount enables Estimate Button', () => {
    const { getByTestId, getByRole} = render(<App />);
    fireEvent.change(getByTestId("Select1"), {target: {value: "WETH"}})
    fireEvent.change(getByTestId("Select2"), {target: {value: "UNI"}})
    fireEvent.change(getByTestId("Input1"), {target: {value: '0.01'}})
    expect(getByRole('button', {name: /^Estimate$/i})).not.toBeDisabled()
})

it('Inputting data and clicking Estimate triggers Alert for Network', () => {
    const { getByTestId, getByRole} = render(<App />);
    global.alert = jest.fn();
    fireEvent.change(getByTestId("Select1"), {target: {value: "WETH"}})
    fireEvent.change(getByTestId("Select2"), {target: {value: "UNI"}})
    fireEvent.change(getByTestId("Input1"), {target: {value: '0.01'}})
    fireEvent.click(getByRole('button', {name: /^Estimate$/i}))
    expect(global.alert).toHaveBeenCalledTimes(1);
})
