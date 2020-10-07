import React from 'react'
import ReactDOM from 'react-dom'


export const GuestModal = ({formName,show,toggle, guest, handleChange,submit}) => show ? ReactDOM.createPortal(
    <>
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{formName}</h5>
                    <button type="button" className="close" onClick={toggle}>x
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Guest name:</label>
                            <input className="form-control" id="name" placeholder="John Doe" value={guest.name} required  onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Guest age:</label>
                            <input className="form-control" id="age" type="number" value={guest.age} required  onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sex">M/F:</label>
                            <select className="form-control" id="sex" value={guest.sex} required onChange={handleChange}>
                                <option>choose below</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="VIP">VIP?</label>
                            <select className="form-control" id="VIP" value={guest.VIP} onChange={handleChange}>
                                <option value={1 || true}>Y</option>
                                <option value={0 || false}>N</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                    <button type="button" className="btn btn-secondary" onClick={toggle}>Close</button>
                </div>
                </div>
            </div>
        </div>
    </> ,document.body) : null