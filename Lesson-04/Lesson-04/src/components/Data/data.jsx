const toDoData = [
        {   id: 10, 
            title: "Mobile Wireframes", 
            content: "Lên bố cục ứng dụng thích nghi cho Mobile, có thể lên cả Desktop sau khi đã hoàn thành", 
            assigned: "MindX School", 
            status: 3, 
            flag: 3, 
            deadline: "Apr 12" 
        },
        
        {   id: 11,
            title: "Mobile Wireframes", 
            content: "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.", 
            assigned: "Nguyễn Văn A", 
            status: 1, 
            flag: 3, 
            deadline: "Apr 12" 
        },
        
        {   id: 12, 
            title: "Client Call", 
            content: "Cuộc họp trực tuyến với khách hàng để thảo luận về dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.", 
            assigned: "Trịnh Hồng M", 
            status: 4, 
            flag: 3, 
            deadline: "Apr 2"  
        }
    ];

const inProgressData = [
        {   id: 8, 
            title: "Login Flow", 
            content: "", 
            assigned: "MindX School", 
            status: 4, 
            flag: 2, 
            deadline: "Apr 03" 
        },
        
        {   id: 9,
            title: "Forgot Password Screen", 
            content: "", 
            assigned: "Lạc Khôi B", 
            status: 4, 
            flag: 3, 
            deadline: "Apr 06" 
        }
    ];

const inReviewData = [
        {   id: 4, 
            title: "Landing Page", 
            content: "", 
            assigned: "MindX School", 
            status: 2, 
            flag: 1, 
            deadline: "Mar 08" 
        },
        
        {   id: 5,
            title: "Annual Presentation", 
            content: "Chuẩn bị bài thuyết trình hàng năm, tập trung vào báo cáo hiệu suất, mục tiêu đã đạt được và kế hoạch chiến lược cho năm tới. Bao gồm các biểu đồ và số liệu minh họa.", 
            assigned: "MindX School", 
            status: 4, 
            flag: 3, 
            deadline: "Mar 15" 
        },

        {   id: 6,
            title: "Icons", 
            content: "", 
            assigned: "Nguyễn Văn A", 
            status: 4, 
            flag: 2, 
            deadline: "Apr 10" 
        },

        {   id: 7,
            title: "Onboard Screens", 
            content: "Thiết kế các màn hình hướng dẫn ban đầu cho ứng dụng, giúp người dùng dễ dàng làm quen và bắt đầu sử dụng sản phẩm một cách nhanh chóng và hiệu quả.", 
            assigned: "Bá Thương M", 
            status: 1, 
            flag: 3, 
            deadline: "Mar 17" 
        }
    ];

const doneData = [
        {   id: 1, 
            title: "Product Mockups", 
            content: "", 
            assigned: "MindX School", 
            status: 4, 
            flag: 1, 
            deadline: "Mar 02" 
        },
        
        {   id: 2,
            title: "Workshop Ideas", 
            content: "", 
            assigned: "MindX School", 
            status: 4, 
            flag: 2, 
            deadline: "Apr 12" 
        },

        {   id: 3,
            title: "Navigation", 
            content: "", 
            assigned: "Nguyễn Văn A", 
            status: 4, 
            flag: 3, 
            deadline: "Mar 15" 
        }
    ];

export {toDoData, inProgressData, doneData, inReviewData};