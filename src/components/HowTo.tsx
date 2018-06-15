import * as React from 'react';
import './HowTo.css'

class HowTo extends React.Component<{}, {}>{
    public render(){
        return( 
            <div id="instructions">
                <h1> How to Play </h1>
                <h3> Keep your pet happy by maxing the number of hunger and happiness points! (*max of 10 points for each)</h3>
                    <ul>
                        <li> <span className="bolded">Feed:</span> Must have at least 1 money to feed your pet. Clicking this button increases the hunger points by 1 and deducts 1 money from your account. </li>
                        <li> <span className="bolded">Play:</span> Clicking this button increases the happiness points by 1. </li>
                        <li> <span className="bolded">Heal:</span> Must have at least 5 money to heal your pet. Used when the hunger points and happiness points are 0. Clicking this button increases the happiness points and hunger points by 5, and deducts 5 money from your account. </li>
                        <li> <span className="bolded">Work:</span> Earn 1 money per click! Decreases happiness points by 1 per click. </li>
                    </ul>

                <p>If your hunger points and happiness points are 0, and you do not have enough money to heal your pet, then you lose.</p>
            </div>
        )
    }
}

export default HowTo;