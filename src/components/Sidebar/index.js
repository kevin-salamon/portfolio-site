import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import {

} from '../../actions';

const mapStateToProps = (state) => ({
    showSidebar: state.viewReducer.showSidebar
});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
  
export default SidebarContainer;