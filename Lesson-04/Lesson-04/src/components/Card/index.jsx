import './styles.css';
import editIcon from '../../assets/edit-icon.svg';
import statusIcon from '../../assets/status-icon.svg';
import statusFinishedIcon from '../../assets/status-finished-icon.svg';
import flagRedIcon from '../../assets/flag-red-icon.svg';
import flagYellowIcon from '../../assets/flag-yellow-icon.svg';
import flagGreenIcon from '../../assets/flag-green-icon.svg';
import clockIcon from '../../assets/clock-icon.svg';
// import Searchbar from '../Search_bar/index.jsx';
// import Button from '../Button/index.jsx';

function Card({ title, content, assigned, status, flag, deadline, openModal }) {
    const currentStatus = status == 4 ? statusFinishedIcon : statusIcon;
    console.log(status);

    let currentFlag = 0;
    switch(Number(flag)) {
        case 1: currentFlag = flagGreenIcon; break;
        case 2: currentFlag = flagYellowIcon; break;
        case 3: currentFlag = flagRedIcon; break;
        default: currentFlag = flagRedIcon; break;
    }

    return (
        <div className="card_container">
            <div className="card_upper">
                <div className="card_header">
                    <p className="card_header_title">{title}</p>
                    <button className="card_settings_button" onClick={openModal}>
                        <img src={editIcon} alt="edit icon" />
                    </button>
                </div>

                <div className="card_content">
                    <p>{content}</p>
                </div>

                <div className="card_assigned">
                    <p>{assigned}</p>
                </div>
            </div>
            
            <div className="card_info">
                <div className="card_status">
                    <img src={currentStatus} alt="status icon"/>
                    {status == 4 ? null : <p>{status}</p>}
                </div>

                <div className="card_status">
                    <img src={currentFlag} alt="flag icon"/>
                </div>

                <div className="card_status">
                    <img src={clockIcon} alt="clock icon"/>
                    <p>{deadline}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;