import { connect } from 'react-redux';
import Contact from './Contact';
import {

} from '../../actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);
  
export default ContactContainer;