import * as React from 'react';

class Header extends React.PureComponent<{}, {}>{
    public render(){
        return(
            <header className="component-header">
            <h1> Tamagotchi Lite </h1>
            </header>
        );
    }
}

export default Header;