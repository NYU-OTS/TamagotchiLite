import * as React from 'react'

import './Menu.css'

import medicine from '../images/medicine.png'
import toy from '../images/play.png'
import riceball from '../images/riceball.png'
import shovel from '../images/shovel.png'
import {IMenuDispatchProps, IMenuMergeProps, IMenuStateProps} from '../types/Types'

export type IMenuProps = IMenuStateProps & IMenuDispatchProps & IMenuMergeProps;

class MenuComponent extends React.Component<IMenuProps, {}> {
    constructor(props: IMenuProps){
        super(props);
        this.props.feed.bind(this);
        this.props.play.bind(this);
        this.props.heal.bind(this);
        this.props.work.bind(this);

    }
      // Decrement the pet's hunger and happiness values over time
    public componentDidMount() {
        this.props.setHappinessTimer( window.setInterval( () => { this.props.depleteHappiness();  }, 5000) );
        this.props.setHungerTimer (window.setInterval( () => { this.props.depleteHunger();  }, 3000) );
    }

    public componentWillUnmount() {
        if (this.props.happinessID){
            clearInterval(this.props.happinessID);
        }
        if (this.props.hungerID){
            clearInterval(this.props.hungerID);
        }
    }


    public render() { 
        return(
            <div id="myMenu">
                <figure>
                    <input type="image" src={riceball} alt="riceball" className="icon" onClick={this.props.feed}/>
                    <figcaption>Feed</figcaption>
                </figure>

                <figure>
                    <input type="image" src={toy} alt="toy" className="icon" onClick={this.props.play}/>
                    <figcaption>Play</figcaption>
                </figure>

                <figure>
                    <input type="image" src={medicine} alt="medicine" className="icon" onClick={this.props.heal}/>
                    <figcaption>Heal</figcaption>
                </figure>

                <figure>
                    <input type="image" src={shovel} alt="shovel" className="icon" onClick={this.props.work} />
                    <figcaption>Work</figcaption>
                </figure>
            </div> 
        )
    }
}

export default MenuComponent;