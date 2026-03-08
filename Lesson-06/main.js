const API_URL = "https://mindx-mockup-server.vercel.app/api/resources/mock-data?apiKey=69a9288da99f2cbf33b34607";

// function filterTasks() {
//     return;
// }

async function getData() {
    const response = await fetch(API_URL);
    const data = await response.json();

    const apiData = data.data.data[0];

    console.log(apiData);


    const users = apiData.users;
    const taskStatus = apiData.taskStatus;
    const flags = apiData.flags;
    const tasks = apiData.tasks;

    console.log("Users: ", users);
    console.log("Task Status: ", taskStatus);
    console.log("Flags: ", flags);
    console.log("Tasks: ", tasks);
}

async function postData(resource, newItem) {
    const response = await fetch(API_URL);
    const data = await response.json();

    const apiData = data.data;
    const dataSet = apiData.data[0];

    const dataId = dataSet._id;   // ✅ đúng id

    dataSet[resource].push(newItem);

    const urlParts = API_URL.split('?');
    const baseUrl = urlParts[0];
    const query = urlParts[1];

    const finalUrl = `${baseUrl}/${dataId}?${query}`;

    const updatedResponse = await fetch(finalUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataSet)
    });

    console.log("Updated");
    return updatedResponse.json();
}

getData();

postData("users", { userId: 4, name: "Nguyễn Văn C" })
    .then(() => {
        // Code bên trong này chỉ chạy sau khi postData thành công
        return getData(); 
    })
    .catch(err => console.log(err));