import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>Search</div>
        )
    }
}

const query = gql`
  {
     carOfTheWeek {
        modelId,
        review,
        carModel {
            makeId,
            name
        }
     }     
  }
`;

export default Search;