import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import BEMHelper from 'react-bem-helper';
import Select from 'react-select';
import {Link} from 'react-router';

var searchPage = new BEMHelper('search-page');

class Search extends Component {
    constructor(props) {
        super(props);
        this.makeChange = this.makeChange.bind(this);
        this.modelChange = this.modelChange.bind(this);
        this.state = {
            disabledSelect: true,
            makeValue: 'Select',
            modelValue: 'Select',
            enableSearchBtn: false,
            makeOptions: [],
            modelOptions: [],
            modelId: ''
        }
    }


    makeChange(selectObj) {
        let {makes} = this.props.data;
        let make = makes.find((makeObj) => {
            return makeObj.id === selectObj.value
        });

        this.setState({
            disabledSelect: false,
            modelOptions: this.getSelectionArray(make.models),
            makeValue: selectObj.value
        });
    }

    modelChange(modelObj) {
        this.setState({
            modelId: modelObj.value,
            enableSearchBtn: true,
            modelValue: modelObj.value
        })
    }

    getSelectionArray(arr) {
        let newArr = arr.map(function (val) {
            return {
                label: val.name,
                value: val.id
            };
        });

        return newArr;
    }

    render() {
        let {modelOptions} = this.state;
        let makeOptions = [];
        let {makes, loading} = this.props.data;

        if (makes) {
            makeOptions = this.getSelectionArray(makes);
        }

        console.log(this.props);
        if (loading) {
            return <div className="loading"></div>
        } else {
            return (
                <div {...searchPage()}>
                    <div {...searchPage('head-text')}>Our Range</div>
                    <div {...searchPage('head-text2')}>Please select a car for details</div>
                    <div {...searchPage('selection-container')}>
                        <div {...searchPage('selection-box1')}>
                            <span {...searchPage('make-text')}>Please select car make</span>
                            <Select
                                name="makes"
                                value={this.state.makeValue}
                                options={makeOptions}
                                onChange={this.makeChange}
                                searchable={false}
                                clearable={false}
                                className="make-select"
                            />
                        </div>
                        <div {...searchPage('selection-box2')}>
                            <span {...searchPage('model-text')}>Please select car model</span>
                            <Select
                                name="model"
                                value={this.state.modelValue}
                                options={modelOptions}
                                onChange={this.modelChange}
                                searchable={false}
                                clearable={false}
                                disabled={this.state.disabledSelect}
                                className="model-select"
                            />
                        </div>
                        <span {...searchPage('detail-btn', '', this.state.enableSearchBtn ? 'enabled' : 'disabled')}>
                            <Link to={`/make/model/${this.state.modelId}`}>View Detail</Link>
                        </span>
                    </div>
                </div>
            )
        }
    }
}

const query = gql`
      {
         makes {
            id,
            name
            models { 
                id,
                name
            }
         }   
      }
    `;

export default graphql(query)(Search);

