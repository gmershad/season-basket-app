import React, { useState } from "react";
import data from "../../assets/data/disease";

const Filter = ({ props, callBack }) => {
    const [Filters, setFilters] = useState([]);

    const handleFilterClick = (disease) => {
        if (Filters.includes(disease)) {
            setFilters(prevSelected => prevSelected.filter(id => id !== disease));
        } else {
            setFilters(prevSelected => [...prevSelected, disease]);
        }
    };

    const handleRemoveFilterClick = (selectedDiseases) => {
        const updatedFilters = Filters.filter(disease => disease.diseaseId !== selectedDiseases.diseaseId);
        setFilters(updatedFilters);
    };

    const applyFilter = () => {
        callBack(Filters);
    }

    return (
        <>
            <div className="modal fade" tabIndex="-1" role="dialog" id="modalStart">
                <div className="modal-dialog  modal-dialog-scrollable">
                    <button type="button" className="btn-link btn position-absolute top-0 start-100 translate-middle" style={{ zIndex: 999 }} data-bs-dismiss="modal">
                        <span className="fa-stack" style={{ fontSize: "0.7em" }}>
                            <i className="faa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-times fa-stack-1x"></i>
                        </span>
                    </button>

                    <div className="modal-content rounded-4 shadow-lg">
                        <div className="input-group input-group-lg border-bottom">
                            <input
                                type="text"
                                className="form-control border-0"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder="Filter..."
                            />
                        </div>

                        <div className="bg-light  px-3 pt-2 pb-2 border-bottom border-white ">
                            <div className="d-flex justify-content-between align-items-center overflow-auto">
                                <span className="small">
                                    Select below
                                </span>
                                <a href="#" className="link-dark small text-decoration-none">
                                    Reset All Filters
                                </a>
                            </div>
                        </div>

                        <div className="list-group list-group-flush list-modal overflow-scroll"
                            style={{
                                borderBottomRightRadius: "calc(.5rem - 1px) !important",
                                borderBottomLeftRadius: "calc(.5rem - 1px) !important"
                            }}>
                            <a className="list-group-item list-group-item-action p-2 d-flex"
                                data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#modalStatus" role="button">
                                <div className="me-2 d-flex align-items-center">
                                    <span className="fa-stack" style={{ verticalAlign: "top" }}>
                                        <i className="fas fa-stack-2x"></i>
                                        <i className="fa fa-search fa-stack-1x opacity-50"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="text-dark">Filter by Disease...</div>
                                    <small>87 Filters</small>
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <span className="badge rounded-pill bg-danger">1</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" tabIndex="-1" role="dialog" id="modalStatus">
                <div className="modal-dialog  modal-dialog-scrollable">
                    <button type="button" className="btn-link btn position-absolute top-0 start-100 translate-middle" style={{ zIndex: 999 }} data-bs-dismiss="modal">
                        <span className="fa-stack" style={{ fontSize: "0.7em" }}>
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fa fa-times fa-stack-1x"></i>
                        </span>
                    </button>
                    <div className="modal-content rounded-4 shadow-lg">
                        <div className="input-group input-group-lg border-bottom">
                            <button className="btn btn-link rounded-pill text-secondary" type="button" data-bs-dismiss="modal">
                                <i className="fa fas fa-chevron-left small opacity-50"></i>
                            </button>
                            <input
                                type="text"
                                className="form-control border-0"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder="Filter by Disease..."
                            />
                            <button className="btn btn-link rounded-pill text-success"
                                type="button" data-bs-dismiss="modal"
                                onClick={() => applyFilter()}>
                                <i className="fa fas small fa-check"></i>
                            </button>
                        </div>
                        <div className="bg-light px-3 py-2">
                            <div className="d-flex justify-content-between align-items-center overflow-auto">
                                {Filters.map(filter => (
                                    <span class="badge badge-light-light ms-3 rounded-pill text-dark py-2 fw-normal">
                                        <i class="fa fa-history me-1 text-muted"></i>
                                        {filter.name}
                                        <a href="#" class="link-secondary opacity-50 ms-1"
                                            onClick={() => handleRemoveFilterClick(filter)}>
                                            <i class="fa fa-times-circle"></i>
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="list-group list-group-flush list-modal overflow-scroll"
                            style={{
                                borderBottomRightRadius: "calc(.5rem - 1px) !important",
                                borderBottomLeftRadius: "calc(.5rem - 1px) !important"
                            }}>
                            {data.diseaseData.map(disease => (
                                <a className="list-group-item list-group-item-action p-2 d-flex active"
                                    data-bs-toggle="button" role="button" key={disease.name}>
                                    <div className="me-2 d-flex align-items-center">
                                        <span className="fa-stack" style={{ verticalAlign: "top" }}>
                                            <i className="fa fa-stack-2x"></i>
                                            <i className="fa fa-history fa-stack-1x "></i>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 align-self-center"
                                        onClick={() => handleFilterClick(disease)}>
                                        <div> {disease.name}</div>
                                    </div>
                                    <div className="me-3 d-flex align-items-center">
                                        <i className="fa fa-fw fa-check"></i>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;
