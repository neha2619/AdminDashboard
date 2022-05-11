import React from 'react'

export const Admin = () => {
    let hello = () => {
        alert('Updated Succesfully');
    }

    return (
        <div>
            <h2 className="page-header">Profile</h2>
            <div>
                <form className="row g-3">
                    <div className="col-md-4">
                        <label  className="form-label" >
                            ID
                        </label>
                        <input
                        
                            type="text"
                            className="form-control"
                            
                            placeholder="Mark"
                            //required=""
                            disabled=""
                            
                            
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault02" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationDefault02"
                            defaultValue="Ankush Kumar Verma"
                            required=""
                        />
                    </div>
                   
                    <div className="col-md-5">
                        <label htmlFor="validationDefault04" className="form-label">
                            Email
                        </label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">
                                @
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault04"
                                aria-describedby="inputGroupPrepend2"
                                required=""
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <label htmlFor="validationDefault03" className="form-label">
                            Mobile
                        </label>
                        <div className="input-group">

                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                required=""
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={hello}>
                            Update
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
