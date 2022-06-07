import React from "react";

const AddSimulator = () => {
  return (
    <div className="formlayout">
      <div className="row col-md-11">
          
        <h2> EHR Simulator </h2>
      </div>
      <div className="row col-md-11">
        <div className="col-md-4">
          <label>Domain URL</label>
          <input type="text" />
        </div>
      </div>
      <div className="row col-md-11">
        <div className="col-md-6">
          <label>File Location</label>
          <input type="text" />
        </div>
        <div className="col-md-6">
          <label>Test</label>
          <input type="text" />
        </div>
      </div>
      <div className="row col-md-11">
        <div className="col-md-4">
          <label>Test</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default AddSimulator;
