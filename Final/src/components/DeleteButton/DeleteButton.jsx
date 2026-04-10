import './DeleteButton.css';

import removeAllTask from '../../utils/removeAllTask';

import trashIcon from '../../assets/delete.png';

const DeleteButton = ({ setTasks }) => {
    const handleDelete = () => {
        removeAllTask(setTasks)
    };

    return (
        <div className='delete-button-container'>
            <button onClick={handleDelete}><img src={trashIcon} alt='delele icon'/>delete all</button>
        </div>
    );
};

export default DeleteButton;