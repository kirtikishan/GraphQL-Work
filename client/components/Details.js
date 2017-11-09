import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

var detailsPage = new BEMHelper('details-page');

class Details extends Component {
    render() {
        debugger;
        let {model, loading} = this.props.data;

        if(loading) {
            return (<div className="loading"></div>);
        }else {
            return (
                <div {...detailsPage()}>
                    <div {...detailsPage('name-row')}>
                        <span {...detailsPage('make')}>{model.make.name}</span>
                        <span {...detailsPage('name')}>{model.name}</span>
                        <div {...detailsPage('price-box')}>
                            <span {...detailsPage('price-text')}>price</span>
                            <span {...detailsPage('price')}>$ {model.price}</span>
                        </div>
                    </div>
                    <img {...detailsPage('detail-img')} src={model.imageUrl} />
                </div>
            );
        };
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

