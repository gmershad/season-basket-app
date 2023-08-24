import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import data from "../../assets/data/season";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters } from '../../redux/actions/filterActions';
import Filter from "../Filter";

const Header = (props) => {
    const selectedSeason = useSelector(state => state.season.selectedSeason);
    const dispatch = useDispatch();
    const [Filters, setFilters] = useState([]);


    const handleSeasonChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(setSelectedSeason(selectedValue));
    };

    const handleApplyFilters = (data) => {
        setFilters(data);
        dispatch(setSelectedFilters(data));
    }

    return (
        <>
            <div class="row py-3 border-bottom">
                <div class="col-sm-4 col-lg-3 text-center text-sm-start">
                    <div class="main-logo">
                        <a href="index.html">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                    <div class="search-bar row bg-light p-2 my-2 rounded-4">
                        <div className="col-md-2">
                            <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown"
                                aria-expanded="false">Disease</a>
                            <ul className="dropdown-menu" aria-labelledby="pages">
                                <li><a href="about.html" className="dropdown-item">Diabetes</a></li>
                                <li><a href="shop.html" className="dropdown-item">Uric Acid </a></li>
                                <li><a href="shop.html" className="dropdown-item">Cholestrol </a></li>
                                <li><a href="single-product.html" className="dropdown-item">Osteoporosis </a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 d-none d-md-block">
                            <select class="form-select border-0 bg-transparent">
                                <option>All Categories</option>
                                <option>Groceries</option>
                                <option>Drinks</option>
                                <option>Chocolates</option>
                            </select>
                        </div>
                        <div className="col-11 col-md-6">
                            <form id="search-form" className="text-center" action="" method="">
                                <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                            </form>
                        </div>
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
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
                    <div className="cart text-end d-none d-lg-block dropdown">
                        <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                            <span className="fs-6 text-muted dropdown-toggle">
                                <i className="fa fa-shopping-bag" data-feather="log-in"></i>
                            </span>
                        </button>
                    </div>

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

                <div className="col-auto">
                    <span class="rounded-pill py-2 pe-2 badge-add-filter"
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
