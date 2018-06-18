import * as React from 'react';
import {Link} from 'react-router-dom';

import './Nav.css'

class Nav extends React.Component {
    public render(){
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/howTo'>Instructions</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;