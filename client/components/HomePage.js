import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import BEMHelper from 'react-bem-helper';
import {homePageQuery} from './Queries';
var homePage = new BEMHelper('home-page');
var homePageDetails = new BEMHelper('home-page__details');
export class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {carOfTheWeek, loading} = this.props.data;

        if(loading) {
            return (<div className="loading"></div>);
        } else {
            return (
                <div {...homePage()}>
                    <span {...homePage('headline')}>car of the week</span>
                    <div {...homePage('row1')}>
                        <span {...homePage('make')}>{carOfTheWeek.carModel.make.name}</span>
                        <span {...homePage('name')}>{carOfTheWeek.carModel.name}</span>
                    </div>
                    <img {...homePage('banner')}
                         src={carOfTheWeek.carModel.imageUrl}></img>
                    <div {...homePageDetails('')}>
                        <div {...homePageDetails('row2')}>
                            <span {...homePageDetails('review')}>{carOfTheWeek.review}</span>
                        </div>
                        <div {...homePageDetails('row3')}>
                            <span {...homePageDetails('text')}>drive away price</span>
                            <span {...homePageDetails('price')}> $ {carOfTheWeek.carModel.price}</span>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default graphql(homePageQuery)(HomePage);
