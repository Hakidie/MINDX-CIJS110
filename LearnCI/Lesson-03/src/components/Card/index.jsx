import './styles.css';

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="name">Tôi tên: {props.studentName}</div>
            <div className="class">Học lớp: {props.className}</div>
            <div className="goal">{props.studentGoal}</div>
        </div>
    )
}

export default Card;