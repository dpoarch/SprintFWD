import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';


class about extends Component {
    render() {
        return (
            <Layout title="SprintFWD - About">
                <div className="mt-5 p-5 mb-5 bg-light rounded-3">
                    <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">About Page</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default about;