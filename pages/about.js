import React, { Component } from "react";
import Layout from "../components/Layout/Layout";

const about = () => {
  return (
    <Layout title="SprintFWD - About">
      <div className="mt-5 p-5 mb-5 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">About</h1>
          <p className="fs-4">
            Our <span className="text-primary">@company Inc</span> is always
            learning something new<br></br> to get better at what they do.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
