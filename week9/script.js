// 1. When an HTML file is opened, there should be a message on the screen.”Welcome
// to ToDo web app”.
// 2. Right below the message(described in the first option), there should be a button with
// text “View all Todos”.
// 3. When you click on the button(described in the second option), you should get all
// Todos from this URL: https://jsonplaceholder.typicode.com/todos/
// 4. While data is fetching there should be a GIF image rendered on the screen.
// 5. When data is fully loaded, the GIF image should disappear and there should be
// shown todos as you see in the picture. In the todo block should be the todo,and text
// to inform is the todo completed or not.
// 6. In the view of todos there also should be an input field, where you should insert the
// userId, and after clicking on the search button, you should render todos, which userId
// is equal to the value of the input.
// 7. The project should also contain .cssfiles. How to style the page and other
// components is up to you




const dataUrl = "https://jsonplaceholder.typicode.com/todos/";
const imageUrl = "https://static.wixstatic.com/media/e1d3bb_7740582dae514842bad1d41fc5910d52~mv2.gif"

const viewButtonNode = document.getElementById("startButton");  
const toDoDivNode = document.getElementById("toDoDiv");
const welcomDivNode =  document.getElementById("welcomDiv");
const searchDivNode = document.getElementById("searchDiv");
const searchField = document.getElementById('textInput');
const searchButton = document.getElementById('search');




async function getJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


viewButtonNode.addEventListener("click", viewTodoList);


function createLoader(url) {
    const image = document.createElement('img');
    image.src = url;
    return image;
}


function viewTodoList() {
   const loader = createLoader(imageUrl);
   welcomDivNode.appendChild(loader);
   viewButtonNode.disabled = true;
   setTimeout(() => {
    getJson(dataUrl)
   .then((toDoList) => {
    console.log(toDoList)
    showToDo(toDoList, "div");
   })
   .catch(() => console.log("Failed to load json"))
   .finally(() => {
    welcomDivNode.removeChild(loader);
    viewButtonNode.style.display = "none";
   })}, 2000);
}


function showToDo(list, tagname) { 
    searchField.style.display = "block";
    searchButton.style.display = "block";

    list.forEach((listItem) => {
            const box = document.createElement(tagname);

            box.className = listItem.userId;
            let completedCheckNode;
            box.innerHTML = `${listItem.title} <br><br> UserId: ${listItem.userId}`

            if (listItem.completed) {
                completedCheckNode = document.createElement("p");    
                completedCheckNode.innerText = "Completed";
                completedCheckNode.style.color = "green";
            
            } else {
                completedCheckNode = document.createElement("p");
                completedCheckNode.innerText = "Not completed";
                completedCheckNode.style.color = "rgb(132, 29, 21)";
            }
           
            box.appendChild(completedCheckNode);
            toDoDivNode.appendChild(box);
    });  
}


searchButton.addEventListener("click", function() {
    filterList(searchField.value)
    searchField.value = "";
});


function filterList(userId) {    
    if (userId) {
        for (let list of toDoDivNode.children) {
            if (list.className !== userId) {
                list.style.display = "none";   
            } else {
                list.style.display = "block";
            }
        }
    }
} 
    

