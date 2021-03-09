import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationItems from './NavigationItems';

configure({
    adapter: new Adapter()
});

describe("<NavigationItems />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it("should render 2 <NavigationItem /> if not authenticated", () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it("should render 3 <NavigationItem /> if authenticated", () => {
        wrapper.setProps({
            isAuth: true
        });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it("should render 3 <NavigationItem /> if authenticated", () => {
        wrapper.setProps({
            isAuth: true
        });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});