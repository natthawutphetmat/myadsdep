"use client"

import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    const openModal = () => {
        setModalIsOpen(true);
        setTimeLeft(30);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (!modalIsOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [modalIsOpen]);

    useEffect(() => {
        if (timeLeft === 0) {
          window.location.href='/dowloads/fb.zip';
            closeModal();
        }
    }, [timeLeft]);

    return (
        <>

        <div className="text-center">
          <h3>Dowloads Landing page Facebook</h3>
          <img src="/img/fbd.jpg" alt="" />
        </div>
        <div className="text-center">
            <button 
                type="button" 
              
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                onClick={openModal}
            >
                <img src="/img/dl.png" width={100} alt="" />
            </button>
            </div>
            <div 
                className="modal fade" 
                id="staticBackdrop" 
                data-bs-backdrop="static" 
                data-bs-keyboard="false" 
                tabIndex="-1" 
                aria-labelledby="staticBackdropLabel" 
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        
                            <h5 className="modal-title" id="staticBackdropLabel">หลังจาก 30 วินาทีจะดาวน์โหลดอัตโนมัติ</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                                onClick={closeModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {modalIsOpen && (
                                <>  
                                    <div className="text-center"><div className='h1'>{timeLeft}</div>
                                    <button className="btn btn-secondary" onClick={closeModal}>Close</button></div> 
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
