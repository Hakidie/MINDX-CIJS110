import React, { useState } from 'react';
import './styles.css';
import flagRedIcon from '../../assets/flag-red-icon.svg';
import flagYellowIcon from '../../assets/flag-yellow-icon.svg';
import flagGreenIcon from '../../assets/flag-green-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';

const flags = [
  { id: 1, src: flagGreenIcon },
  { id: 2, src: flagYellowIcon },
  { id: 3, src: flagRedIcon }
];

function Modal({ isOpened, toggleModal, onSave }) {
    const [flagIndex, setFlagIndex] = useState(0);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        assigned: '',
        status: 1,
        flag: 1,
        deadline: ''
    });

    if(isOpened == false) return null;

    
    const cycleFlag = (e) => {
        const nextIndex = (flagIndex + 1) % flags.length;
        const nextFlagId = flags[nextIndex].id;

        // 1. Cập nhật index để đổi hình ảnh trên UI
        setFlagIndex(nextIndex);

        // 2. Cập nhật giá trị ID của cờ vào object formData
        setFormData(prev => ({
            ...prev,
            flag: nextFlagId
        }));
    };
    const currentFlag = flags[flagIndex];

    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: (name === "status" || name === "flag")
            ? Number(value)
            : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title.trim()) return;

        console.log("Dữ liệu cuối cùng:", formData);
        onSave(formData);
        toggleModal();
    };

    return (
        <div className="modal_container">
            <div className='modal-header'>
                <div className='modal-header-top'>
                    <button className="flag-button" type="button" onClick={cycleFlag}>
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
                            <input type='text' placeholder='Type title of task' name="title" value={formData.title} onChange={handleChange}></input>
                            <p className='note'>Title is required</p>
                        </div>
                    </div>

                    <div className='form-top-right'>
                        <div className='form-input-box'>
                            <p>End Date</p>
                            <input className='form-date' type='date' placeholder='15/06/2024' name="deadline" value={formData.deadline} onChange={handleChange}></input>
                        </div>
                    </div>
                </div>

                <div className='form-center'>
                    <div className='form-top-left'>
                        <div className='form-input-box'>
                            <p>Description</p>
                            <textarea className='form-text-area' placeholder='Type description...' name="content" value={formData.content} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className='form-top-right'>
                        <div className='form-input-box'>
                            <p>Assign</p>
                            <select className="assign-select" name='assigned' defaultValue="" value={formData.assigned || ""} onChange={handleChange}>
                                <option value="" disabled hidden>Nguyễn Văn A</option>
                                <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                                <option value="Trịnh Hồng M">Trịnh Hồng M</option>
                                <option value="Lạc Khôi B">Lạc Khôi B</option>
                                <option value="MindX School">MindX School</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='form-bottom'>
                    <p>Status</p>
                    <select className="status-select" name='status' defaultValue="" value={formData.status} onChange={handleChange}>
                        <option value="" disabled hidden>Choose status</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
            </div>

            <div className='buttons-container'>
                <button className='cancel-button' onClick={toggleModal}>Cancel</button>
                <button className='save-button' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default Modal;