import { React, Component } from "react";
import MainLayout from "../../Components/Layout";

class MainLayoutView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <MainLayout></MainLayout>
        );
    }
}

export default MainLayoutView;