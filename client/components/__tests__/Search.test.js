import * as React from 'react';
import {Search} from '../Search';
import { shallow } from 'enzyme';
import {searchQuery} from '../Queries';

describe('Search Component', () => {
    it('should render the search correctly', () => {
        const data = {
            data: {
                makes: [
                    {
                        id: 10,
                        name: "Porsche",
                        models: [
                            {
                                id: 100,
                                name: "911 Carrera 4s"
                            },
                            {
                                id: 100,
                                name: "911 Carrera 4s"
                            },
                            {
                                id: 100,
                                name: "911 Carrera 4s"
                            }
                        ]
                    }
                ]
            }
        };

        const wrapper = shallow(
            <Search data={data}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should be rendered the correct search query', () => {
        expect(searchQuery).toMatchSnapshot();
    });
})
;
