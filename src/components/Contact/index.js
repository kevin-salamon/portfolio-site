import { connect } from 'react-redux';
import Contact from './Contact';
import { 
    setShowSidebar 
} from '../../actions';

const mapStateToProps = (state) => ({
    showSidebar: state.viewReducer.showSidebar
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setShowSidebar: (bool) => dispatch(setShowSidebar(bool))
    };
};
  
const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);
  
export default ContactContainer;