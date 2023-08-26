import { connect } from "react-redux";
import ProductView from "./index";
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters, setSearchedItem } from '../../redux/actions/filterActions';

const mapStoreToProps = state => ({
    selectedSeason: state.season.selectedSeason,
    selectedFilters: state.filter.selectedFilters,
    searchedItems: state.filter.searchedItems
});


const mapDispatchToProps = dispatch => ({
    setSelectedSeason,
    setSelectedFilters,
    setSearchedItem
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductView);
