import React, { useState } from "react";
import "../styles/EHRSimulator.css";

const EHRSimulatorForm = () => {
  const [riskvalue, setriskvalue] = useState([]);
  
  //   const [selectedFile, setSelectedFile] = useState("");
  //   const changeHandler = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //   };
  
  const handleChange = (event) => {
    let check = event.target.checked;
    let checkedriskval = event.target.value;
    if (check) {
      setriskvalue([...riskvalue, checkedriskval]);
    } else {
      var index = riskvalue.indexOf(checkedriskval);
      if (index > -1) {
        riskvalue.splice(index, 1);
        setriskvalue(riskvalue);
      }
    }
  };
  //   const handleSubmit = ()=>{
  //       console.log(riskvalue)
  //   }
  return (
    <>
      <h2> EHR Simulator </h2>
      <div className="row col-md-11">
        <div className="col-md-6">
          <label for="domainurl">Domain URL</label>
          <input
            type="text"
            id="domainurl"
            name="domainurl"
            placeholder="Enter domain url.."
          />
        </div>
        <div className="col-md-6">
          <label for="tlsport">TLS Port</label>
          <input
            type="text"
            id="tlsport"
            name="tlsport"
            placeholder="Enter TLS port.."
          />
        </div>
      </div>
      <div className="row col-md-11">
        <div className="col-md-6">
          <label for="filelocation">File Location </label>
          <input
            type="text"
            id="filelocation"
            name="filelocation"
            placeholder="File Location.."
          />
        </div>
      </div>
      <div className="row col-md-11">
        <div className="col-md-4 dbgOuter">
          <div className="dbgCont">
            <input
              type="checkbox"
              id="dbgAMI"
              className="dbgCheck"
              name="dbgAMI"
              value="AMI"
              onChange={handleChange}
            />
            <label for="dbgAMI">AMI</label>
          </div>
          <div className="dbgCont">
            <input
              type="checkbox"
              id="dbgsepsis"
              className="dbgSepsis"
              name="dbgsepsis"
              value="Sepsis"
              onChange={handleChange}
            />
            <label for="dbgsepsis">Sepsis</label>
          </div>
        </div>
        <div className="col-md-4 dbgOuter"></div>
        <div className="col-md-4 dbgOuter"></div>
      </div>
      <div className="row col-md-11">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input type="submit" value="Submit" />
        </div>
        <div className="col-md-4"></div>
      </div>
      {/* <input type="file" /> */}

      {/* <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select> */}
    </>
  );
};
export default EHRSimulatorForm;
