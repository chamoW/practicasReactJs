import React from "react";

import Badge from "../componentes/badge/Badge";
import BadgeForm from "../componentes/badgeform/BadgeForm";

import header from "../assets/platziconf-logo.svg";
import "./styles/BadgeNew.css";

import api from "../api/api";
import PageLoading from "../componentes/pageloading/PageLoading";

class BagdeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        },
    };

    handleChange = (e) => {
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async (e) => {
        console.log("In handleSubmit");
        e.preventDefault(); // permite que no se envie el formulario
        this.setState({
            loading: true,
            error: null,
        });

        try {
            console.log("state: ", this.state);
            await api.badges.create(this.state.form);

            this.setState({
                loading: false,
            });

            this.props.history.push("/badges");
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }

        console.log("state: ", this.props.formValues);
    };

    render() {
        if (this.state.loading === true) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeNew_hero">
                    <img className="BadgeNew_hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST_NAME"}
                                lastName={this.state.form.lastName || "LAST_NAME"}
                                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                                email={this.state.form.email || "EMAIL"}
                                avatarUrl="https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                                title="New Attendant"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BagdeNew;
