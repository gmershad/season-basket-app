import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav id="sidebar" class="sidebar js-sidebar">
            <div class="sidebar-content js-simplebar">
                <a class="sidebar-brand" href="index.html">
                    <span class="align-middle">Seasonal Basket</span>
                </a>
                <ul class="sidebar-nav">
                    <li class="sidebar-header">
                        Food
                    </li>
                    <li class="sidebar-item active">
                        <a class="sidebar-link" href="index.html">
                            <i className="align-middle fa fa-line-chart" data-feather="sliders"></i>
                            <span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <Link to="product">
                            <a class="sidebar-link" href="pages-profile.html">
                                <i class="align-middle fa fa-leaf" data-feather="user"></i>
                                <span class="align-middle">
                                    Product
                                </span>

                            </a>
                        </Link>
                    </li>

                    <li class="sidebar-item">
                        <a class="sidebar-link" href="pages-sign-in.html">
                            <i class="align-middle fa fa-shopping-bag" data-feather="log-in"></i>
                            <span class="align-middle">Plan</span>
                        </a>
                    </li>
                    <li class="sidebar-header">
                        Personal
                    </li>

                    <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-buttons.html">
                            <i class="align-middle fa fa-flask" data-feather="square"></i> <span class="align-middle">Health</span>
                        </a>
                    </li>

                    <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-forms.html">
                            <i class="align-middle fa fa-cab" data-feather="check-square">
                            </i> <span class="align-middle">Forms</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;



