import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

var detailsPage = new BEMHelper('details-page');

class Details extends Component {
    render() {
        debugger;
        return (
            <div {...detailsPage()}>
                
            </div>
        );
    }
}


export const modelsQuery = gql`
  query ModelsQuery($id : Int!) {
    model(id: $id) {
      name,
      price,
      imageUrl,
      make {
          id,
          name
      }
    }
  }
`;


export default graphql(modelsQuery, {
    options: (props) => ({
        variables: { id: props.params.modelId },
    }),
})(Details);

