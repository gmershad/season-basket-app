import React, { useState, useEffect } from "react";

import logo from "../../assets/images/logo.png";
import data from "../../assets/data/season";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters, setSearchedItem } from '../../redux/actions/filterActions';
import Filter from "../Filter";
import { Link } from 'react-router-dom';

const Header = (props) => {
    const selectedSeason = useSelector(state => state.season.selectedSeason);
    const dispatch = useDispatch();
    const [Filters, setFilters] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSeasonChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(setSelectedSeason(selectedValue));
    };

    const handleApplyFilters = (data) => {
        setFilters(data);
        dispatch(setSelectedFilters(data));
    }

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleAddClick = () => {
        dispatch(setSearchedItem(searchText));
        setSearchText('');
    }

    return (
        <>
            <div class="row py-3">
                <div class="col-sm-4 col-lg-3 text-center text-sm-start">
                    <div class="main-logo">
                        <a href="index.html">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </a>
                    </div>
                </div>
                <div className="col-md-3 py-0">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <Link to={`/nutrition`} style={{ textDecoration: 'none' }}>
                                            <a class="nav-link" href="#">Nutrition</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Disease
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                                            <li><a class="dropdown-item" href="#">Diabetes</a></li>
                                            <li>
                                                <Link to={`/uricacid`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Uric Acid</a>
                                                </Link>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Cholestrol </a></li>
                                            <li><a class="dropdown-item" href="#">Osteoporosis </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 py-2">
                    <select class="form-select">
                        <option>All Categories</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolates</option>
                    </select>
                </div>
                <div className="col-md-2 py-2">
                    <form id="search-form" className="text-center" action="" method="">
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                    </form>
                </div>
                <div className="col-1 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                </div>
                <div className="col py-2">
                    <ul className="d-flex justify-content-end list-unstyled m-0">
                        <li>
                            <a href="#" className="rounded-circle bg-light p-2 mx-1">
                                <i className="fa fa-user" data-feather="log-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="rounded-circle bg-light p-2 mx-1">
                                <i className="fa fa-heart" data-feather="log-in"></i>
                            </a>
                        </li>
                        <li className="d-lg-none">
                            <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                <i className="fa fa-shopping-bag" data-feather="log-in"></i>
                            </a>
                        </li>
                        <li className="d-lg-none">
                            <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                search
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-2">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>India</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={selectedSeason}
                        onChange={handleSeasonChange}
                    >
                        <option value="" disabled>Choose a Season</option>
                        {data.seasons.map((season) => (
                            <option key={season.id} value={season.seasonId}>
                                {season.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div class="col-auto d-flex justify-content-center">
                    <input class="form-control" type="text" placeholder="Search"
                        aria-label="Search"
                        value={searchText}
                        onChange={handleSearchChange} />
                    <button class="btn btn-secondary ms-2" onClick={handleAddClick}>
                        <i class="fa fa-plus" />
                    </button>
                </div>

                <div className="col-auto">
                    <span class="rounded-pill badge-add-filter"
                        data-bs-toggle="modal" href="#modalStart"
                        role="button">
                        Select Filter <i class="fa fa-plus ms-1"></i>
                    </span>
                </div>
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

export default Header;
