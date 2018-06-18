import * as React from 'react';

import Header from './Header';

import Counter from './Counter/CounterContainer';
import Menu from './Menu/MenuContainer';
import Pet from './Pet/PetContainer';

class MainComponent extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Header />
                <Pet />
                <Counter />
                <Menu />
            </div>
        )
    }
}

export default MainComponent;