import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import {detailsQuery} from './Queries';

var detailsPage = new BEMHelper('details-page');

export class Details extends Component {
    render() {
        let {model, loading} = this.props.data;

        if (loading) {
            return (<div className="loading"></div>);
        } else {
            return (
                <div {...detailsPage()}>
                    <span {...detailsPage('back')}>
                        <Link to="/search">back</Link>
                    </span>
                    <div {...detailsPage('name-row')}>
                        <span {...detailsPage('make')}>{model.make.name}</span>
                        <span {...detailsPage('name')}>{model.name}</span>
                        <div {...detailsPage('price-box')}>
                            <span {...detailsPage('price-text')}>price</span>
                            <span {...detailsPage('price')}>$ {model.price}</span>
                        </div>
                    </div>
                    <img {...detailsPage('detail-img')} src={model.imageUrl}/>
                </div>
            );
        }
        ;
    }
}

export default graphql(detailsQuery, {
    options: (props) => ({
        variables: {id: props.params.modelId},
    }),
})(Details);

