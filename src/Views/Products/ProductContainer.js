import { connect } from "react-redux";
import ProductView from "./index";
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters } from '../../redux/actions/filterActions';

const mapStoreToProps = state => ({
    selectedSeason: state.season.selectedSeason,
    selectedFilters: state.filter.selectedFilters
});


const mapDispatchToProps = dispatch => ({
    setSelectedSeason,
    setSelectedFilters
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductView);
