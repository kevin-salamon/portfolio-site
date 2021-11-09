import { connect } from 'react-redux';
import Experience from './Experience';
import {

} from '../../actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const ExperienceContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Experience);
  
export default ExperienceContainer;