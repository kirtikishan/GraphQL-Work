import * as React from 'react';
import {Details} from '../Details';
import {shallow} from 'enzyme';
import {detailsQuery} from '../Queries';

describe('HomePage Component', () => {
    it('should render the homepage correctly', () => {
        const data = {
            model: {
                name: "Leaf",
                price: 50000,
                imageUrl: "http://o.aolcdn.com/commerce/autodata/images/USC10NIC161B021001.jpg",
                make: {
                    id: 20,
                    name: "Nissan"
                }
            }
        }

        const wrapper = shallow(
            <Details data={data}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should be rendered the correct home page query', () => {
        expect(detailsQuery).toMatchSnapshot();
    });
})
;
