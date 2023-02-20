import React from 'react';

const DeleteModal = ({ modalData, title, message, closeModal, successDelete }) => {
    const { productName } = modalData;

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{productName}!</h3>
                    <p className="py-4">{title}</p>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={closeModal} htmlFor="deleteModal" className="btn">Cancel</label>
                        <button onClick={() => successDelete(modalData)} className='btn btn-outline'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;