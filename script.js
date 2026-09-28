const btn = document.querySelector("#loadUsers");
const status = document.querySelector("#status");
const postList = document.querySelector("#postList");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function renderUsers(posts) {
  for (const post of posts) {
    const li = document.createElement("li");
    
    li.textContent = `${post.title}: ${post.body}`;
    
    postList.appendChild(li);
  }
}

async function loadUsers() {
  btn.disabled = true;
  status.textContent = "Loading...";
  postList.innerHTML = "";

  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    const posts = data.slice(0, 5);

    renderUsers(posts);
    status.textContent = ""; 
  } catch (err) {
    status.textContent = err.message;
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener("click", loadUsers);