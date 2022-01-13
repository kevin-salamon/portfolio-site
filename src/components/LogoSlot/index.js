import { connect } from 'react-redux';
import LogoSlot from './LogoSlot';
import {

} from '../../actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const LogoSlotContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoSlot);
  
export default LogoSlotContainer;