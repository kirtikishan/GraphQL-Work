import * as React from 'react';
import BEMHelper from 'react-bem-helper';
import {shallow} from 'enzyme';
import * as renderer from 'react-test-renderer';
import Header from '../Header';
import { Link } from 'react-router-dom';

describe('Header Component', () => {
    beforeEach(() => {
        const header = new BEMHelper('header');
    });

    it('should check the rendered snapshot', () => {
        const component = renderer.create(<Header />);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
