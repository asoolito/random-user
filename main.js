const userAPI = "https://randomuser.me/api/";
const userBtn = document.querySelector(".Btn"); 
function renderUser() {
    fetch(userAPI)
        .then(res => res.json()
        .then(data => {
            const user = data.results[0];
            const box = document.querySelector(".wrapper");
            box.innerHTML = `
            <h1 class="Title">${user.gender}</h1>
            <h1>Name:${user.name.first} ${user.name.last}</h1>
             <img src="${user.picture.large}">
             <p>Age: ${user.dob.age}</p>
             <p>Email:${user.email}</p>
             <p>Phone:${user.phone}</p>
             `
        }))
        .catch(err => console.log("XATO"));
}

renderUser();

userBtn.addEventListener("click", renderUser) 


