import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class CarOfTheWeek extends Component {

    render() {
        console.log(this.props);
        return (
            <div>Car of the week</div>
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

export default graphql(query)(CarOfTheWeek);
