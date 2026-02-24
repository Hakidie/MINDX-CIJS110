import './styles.css';
import Card from '../Card/index.jsx';
// import Button from '../Button/index.jsx';

function Column() {
    const cardsData = [
        {   id: 1, 
            title: "Mobile Wireframes", 
            content: "Lên bố cục ứng dụng thích nghi cho Mobile, có thể lên cả Desktop sau khi đã hoàn thành", 
            assigned: "MindX School", 
            status: "3", 
            flag: "3", 
            deadline: "Apr 12" 
        },
        
        {   id: 2,
            title: "Mobile Wireframes", 
            content: "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.", 
            assigned: "Nguyễn Văn A", 
            status: "1", 
            flag: "3", 
            deadline: "Apr 12" 
        },
        
        {   id: 3, 
            title: "Client Call", 
            content: "Cuộc họp trực tuyến với khách hàng để thảo luận về dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.", 
            assigned: "Trịnh Hồng M", 
            status: "4", 
            flag: "3", 
            deadline: "Apr 2"  
        }
    ];

    return (
        <div className="column_container">
            <div className="column_header">
                <div className="column_header_left">
                    <p className="column_header_title">Title</p>
                    <div className="total_cards">{cardsData.length}</div>
                </div>
                
                <div className="column_header_right">
                    <button className="add_card_button">+</button>
                    <button className="column_settings_button">⋯</button>
                </div>
            </div>

            <div className="cards_container">
                {cardsData.map((item) => (
                    <Card 
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        assigned={item.assigned}
                        status={item.status}
                        flag={item.flag}
                        deadline={item.deadline}
                    />
                ))}
            </div>
        </div>
    )
}

export default Column;