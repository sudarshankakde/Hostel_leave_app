import React from 'react'

function HomeComponent(props) {
    window.document.title=props.title;
    return (
        <>
           
                <div className="container mainContainer my-auto">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-12 col-sm-6 py-sm-5  py-3 py-lg-4  text-center">
                            <h3>5</h3>
                            <b>Pending Applications</b>
                        </div>
                        <div className="col-lg-6 col-12  col-sm-6 py-sm-5 py-3 py-lg-4  text-center ">
                            <h3>10/24</h3>
                            <b>Approved Application</b>
                        </div>
                    </div>
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-12  col-sm-6 py-sm-5 py-3 py-lg-4  text-center">
                            <h3>150</h3>
                            <b>Hostel 1 Admissions</b>
                        </div>
                        <div className="col-lg-6 col-12 col-sm-6 py-sm-5  py-3 py-lg-4  text-center ">
                            <h3>110</h3>
                            <b>Hostel 2 Admissions</b>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default HomeComponent