import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import {

} from '../../actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const PortfolioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);
  
export default PortfolioContainer;