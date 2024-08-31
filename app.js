
const accordion = [
    {
      id: 1,
      title: "What is Frontend Mentor, and how will it help me?",
      content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      id: 2,
      title:"Is Frontend Mentor free?",
      content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      id: 3,
      title:"Can I use Frontend Mentor projects in my portfolio?",
      content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      id: 4,
      title: "How can I get help if I'm stuck on a challenge?",
      content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ];

 
let container = document.getElementById("Accord-List");

accordion.forEach((item) => {  
  container.innerHTML += `
  <div class="list-section">
    <li class="accord-item">
      ${item.title}
      <span class="toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 30 31">
          <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        </svg>
      </span>
    </li>
    <p class="accord-content" style="display: none;">${item.content}</p>
    </div>
    `; 
});
 
document.querySelectorAll(".accord-item").forEach((item, index) => {
  let content = document.querySelectorAll(".accord-content")[index];
  let toggleButton = item.querySelector(".toggle-btn");

  item.addEventListener("click", () => {
    let isOpen = content.style.display === "block";

    // Close all accordion items
    document.querySelectorAll(".accord-content").forEach((contentItem, contentIndex) => {
      contentItem.style.display = "none";
      let toggleButton = document.querySelectorAll(".toggle-btn")[contentIndex];
      toggleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 30 31">
          <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        </svg>
      `;
    });

    // Toggle the clicked item
    if (!isOpen) {
      content.style.display = "block";
      toggleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 30 31">
          <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        </svg>
      `;
    }
  });
}); 

