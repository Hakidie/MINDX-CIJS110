import React, { useState } from 'react';
import './styles.css';
import flagRedIcon from '../../assets/flag-red-icon.svg';
import flagYellowIcon from '../../assets/flag-yellow-icon.svg';
import flagGreenIcon from '../../assets/flag-green-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';

const flags = [
  { id: 'green', src: flagGreenIcon },
  { id: 'yellow', src: flagYellowIcon },
  { id: 'red', src: flagRedIcon }
];

function Modal({ isOpened, toggleModal }) {
    if(isOpened == false) return null;

    const [flagIndex, setFlagIndex] = useState(0);
    const cycleFlag = () => {
        // (0 + 1) % 3 = 1
        // (1 + 1) % 3 = 2
        // (2 + 1) % 3 = 0 (Back to Green!)
        setFlagIndex((prevIndex) => (prevIndex + 1) % flags.length);
    };
    const currentFlag = flags[flagIndex];

    return (
        <div className="modal_container">
            <div className='modal-header'>
                <div className='modal-header-top'>
                    <button className="flag-button" onClick={cycleFlag}>
                        <img src={currentFlag.src} alt={`${currentFlag.id} priority`} />
                    </button>
                    <button className='close-button' onClick={toggleModal}>
                        <img src={exitIcon}/>
                    </button>
                </div>

                <div className='modal-header-bottom'>
                    <p>Save task</p>
                </div>
            </div>

            <div className='model-form'>
                <div className='form-top'>
                    <div className='form-top-left'>
                        <div className='form-input-box'>
                            <p>Title <span>*</span></p>
                            <input type='text' placeholder='Type title of task'></input>
                            <p className='note'>Title is required</p>
                        </div>
                    </div>

                    <div className='form-top-right'>
                        <div className='form-input-box'>
                            <p>End Date</p>
                            <input className='form-date' type='date' placeholder='15/06/2024'></input>
                        </div>
                    </div>
                </div>

                <div className='form-center'>
                    <div className='form-top-left'>
                        <div className='form-input-box'>
                            <p>Description</p>
                            <textarea className='form-text-area' placeholder='Type description...' row='3'></textarea>
                        </div>
                    </div>

                    <div className='form-top-right'>
                        <div className='form-input-box'>
                            <p>Assign</p>
                            <select className="assign-select" name='status' defaultValue="">
                                <option value="" disabled hidden>Nguyễn Văn A</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='form-bottom'>
                    <p>Status</p>
                    <select className="status-select" name='status' defaultValue="">
                        <option value="" disabled hidden>Choose status</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div className='buttons-container'>
                <button className='cancel-button' onClick={toggleModal}>Cancel</button>
                <button className='save-button'>Save</button>
            </div>
        </div>
    )
}

export default Modal;