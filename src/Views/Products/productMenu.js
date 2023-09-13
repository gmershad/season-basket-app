import React, { useState, useEffect } from "react";
import data from "../../assets/data/season";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSeason, getSeasons } from '../../redux/actions/seasonActions';
import { setSelectedFilters, setSearchedItem } from '../../redux/actions/filterActions';
import Filter from "../../Components/Filter";
import Typeahead from "../../Components/Autosuggest";

const ProductMenu = (props) => {
    const seasons = useSelector(state => state.season.seasons);

    const getCurrentSeason = () => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonthId = currentDate.getMonth();
        if (currentDay <= 15) {
            return currentMonthId;
        } else {
            return currentMonthId * 2;
        }
    }

    const [selectedSeasonItem, setSelectedSeasonItem] = useState(getCurrentSeason());

    const dispatch = useDispatch();
    const [Filters, setFilters] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSeasonChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSeasonItem(selectedValue);
        dispatch(setSelectedSeason(selectedValue));
    };

    const handleApplyFilters = (data) => {
        setFilters(data);
        dispatch(setSelectedFilters(data));
    }

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleCallback = (data) => {
        setSearchText(data);
        dispatch(setSearchedItem(data));
    }

    useEffect(() => {
        dispatch(getSeasons());
    }, [dispatch]);



    return (
        <>
            <div className="row py-2">
                <div className="col-md-2 mb-1">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue="India">India</option>
                    </select>
                </div>
                <div className="col-md-2 mb-1">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={selectedSeasonItem || "1"}
                        onChange={handleSeasonChange}
                    >
                        <option value="" disabled>Choose a Season</option>
                        <option value="-1">All Season</option>
                        {seasons && seasons.map((season) => (
                            season.IsActive ? (
                                <option key={season.SeasonId} value={season.SeasonId}>
                                    {season.Name}
                                </option>
                            ) : null
                        ))}
                    </select>
                </div>

                <div className="col-md-2 mb-1">
                    <Typeahead parentCallback={handleCallback} />
                </div>

                {/* <div className="col-auto">
                    <span class="rounded-pill badge-add-filter"
                        data-bs-toggle="modal" href="#modalStart"
                        role="button">
                        Select Filter <i class="fa fa-plus ms-1"></i>
                    </span>
                </div> */}
                <div className="col">
                    {Filters.map(filter => (
                        <span className="badge badge-light-light rounded-pill text-dark py-0 fw-normal">
                            <i className="fa fa-circle me-1 text-danger"></i>
                            <span className="text-body me-1">{filter.name}</span>
                            <a href="#" class="text-dark opacity-25 ms-1">
                                <i className="fa fa-times-circle"></i>
                            </a>
                        </span>
                    ))}
                </div>
            </div>
            <Filter callBack={handleApplyFilters} />
        </>
    );
};

export default ProductMenu;
