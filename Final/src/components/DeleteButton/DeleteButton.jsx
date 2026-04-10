import './DeleteButton.css';

import removeAllTab from '../../utils/removeAllTab';

import trashIcon from '../../assets/delete.png';

const DeleteButton = ({ tasks, setTasks }) => {
    return (
        <div className='delete-button-container'>
            <button onClick={() => removeAllTab(tasks, setTasks)}><img src={trashIcon} alt='delele icon'/>delete all</button>
        </div>
    );
};

export default DeleteButton;