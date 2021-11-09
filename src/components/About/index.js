import { connect } from 'react-redux';
import About from './About';
import {

} from '../../actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const AboutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
  
export default AboutContainer;