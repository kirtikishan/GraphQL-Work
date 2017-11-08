import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';
import {Link} from 'react-router';

var header = new BEMHelper('header');
class Header extends Component {
    render(){
        return (
            <div {...header()}>
                <span {...header('home-link')}>
                    <Link to="/">Home</Link>
                </span>
                <span {...header('search-link')}>
                    <Link to="/search">Search</Link>
                </span>
            </div>
        );
    }
}

export default Header;