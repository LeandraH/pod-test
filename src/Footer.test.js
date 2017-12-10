import React from 'react';
import { shallow } from 'enzyme';

import { FooterDisplay } from './Footer';

describe('Footer', () => {
    it('renders when the pod is not saved', () => {
        const wrapper = shallow(<FooterDisplay podState="notSaved" />);
        const expected = <img src="close.png" className="close-button" />;
        expect(wrapper.contains(expected)).toEqual(true);
    });
});
