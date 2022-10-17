import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Clear, Done } from "@mui/icons-material";

function App() {
  return (
    <>
      
      <div className="body"style={{backgroundColor:"skyblue"}}>  
      <h1 className="text-center text-success my-2 py-4">Bootstrap Cards</h1>
          <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card mb-4 mx-2 px-4 rounded-5 ">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="border-bottom cardhead">
                <h6 className="text-center text-muted">Free</h6>
                <h6 className="text-center card-price">
                  $0<span className="period text-muted">/month</span>
                </h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Single Users
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                     </span>  5 GB Storage
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Unlimited Public Projects
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Community Access
                </p>
                <p className="card-text text-muted">
                  <span>
                    <Clear />
                  </span>  Dedicated Phone Support
                </p>
                <p className="card-text text-muted">
                  <span>
                    <Clear />
                  </span>  Unlimited Private Projects
                </p>
                <p className="card-text text-muted">
                  <span>
                    <Clear />
                  </span> Free Subdomain
                </p>
                <p className="card-text text-muted">
                  <span>
                    <Clear />
                  </span>
                  Monthly Status Report
                </p>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill"
                  style={{ paddingLeft: "100px", paddingRight: "100px",paddingTop:"10px",paddingBottom:"10px" }}
                >
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card mb-4 mx-2 px-4 rounded-5">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="border-bottom cardhead">
                <h6 className="text-center text-muted">Plus</h6>
                <h6 className="text-center card-price">
                  $9<span className="period text-muted">/month</span>
                </h6>
              </div>

              <div className="card-body  ">
                <p className="card-text fw-bold">
                  <span >
                    <Done />
                  </span>  5 Users
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  50 GB Storage
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>   Unlimited Public Projects
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Community Access
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>   Dedicated Phone Support
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>  Unlimited Private Projects
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>  Free Subdomain
                </p>
                <p className="card-text text-muted">
                  <span>
                    <Clear />
                  </span>  Monthly Status Report
                </p>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill"
                  style={{ paddingLeft: "100px", paddingRight: "100px",paddingTop:"10px",paddingBottom:"10px" }}
                >
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 mx-2 px-4 rounded-5">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="border-bottom cardhead">
                <h6 className="text-center text-muted">Pro</h6>
                <h6 className="text-center card-price">
                  $49<span className="period text-muted">/month</span>
                </h6>
              </div>
              <div className="card-body  ">
                <p className="card-text fw-bold">
                  <span>
                    <Done />
                  </span>  Unlimited
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  150 GB Storage
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Unlimited Public Projects
                </p>
                <p className="card-text">
                  <span>
                    <Done />
                  </span>  Community Access
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>  Dedicated Phone Support
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>  Unlimited Private Projects
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span> <span className="fw-bold">Unlimited</span> Free Subdomain
                </p>
                <p className="card-text ">
                  <span>
                    <Done />
                  </span>  Monthly Status Report
                </p>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill"
                  style={{ paddingLeft: "100px", paddingRight: "100px",paddingTop:"10px",paddingBottom:"10px" }}
                >
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  
    </>
  );
}

export default App;
