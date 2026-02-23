import './styles.css';

const Hello = () => {
    const school = "MindX Technology School";
    const age = 20;
    const listName = ["Alice", "John Wick", "Bob", "David"];
    return (
        <div>
            <h1 className="titleHello">
                Bạn là người {age >= 20 ? "trưởng thành" : "đang lớn"}!
            </h1>
            <p>Hello everyone, welcome to {school}</p>
            {listName}
        </div>
    )
}

export default Hello;