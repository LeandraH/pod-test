import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('render without failing', () => {
    shallow(<Header />);
});
