import {connect} from 'react-redux';
import {faceSelector, PetComponent} from './PetComponent';

import {IPetMapProps, IStoreState} from '../../types/Types';

const mapStateToProps = (state:IStoreState): IPetMapProps => ({
    face: faceSelector(state),
    happiness: state.happiness,
    hunger: state.hunger
})

export default connect(mapStateToProps)(PetComponent)