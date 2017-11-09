import * as React from 'react';
import {HomePage} from '../HomePage';
import {shallow} from 'enzyme';
import {homePageQuery} from '../Queries';

describe('HomePage Component', () => {
    it('should render the homepage correctly', () => {
        const data = {
            carOfTheWeek: {
                modelId: 520,
                review: "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.",
                carModel: {
                    makeId: 50,
                    name: "MX-5",
                    price: 90000,
                    imageUrl: "https://www.mazda.com.au/globalassets/settings/vehicle-assets/mx-5/2017-01-ipm/side-and-rear-34/mx-5_softtop_soulred_buildbody_front.png",
                    make: {
                        name: "Mazda"
                    }
                }
            }

        }

        const wrapper = shallow(
            <HomePage data={data}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should be rendered the correct home page query', () => {
        expect(homePageQuery).toMatchSnapshot();
    });
})
;
