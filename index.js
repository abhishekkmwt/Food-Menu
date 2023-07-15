const url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"

async function fetchData(){
    const response = await fetch(url);
    const result=await response.json();
    getMenu(result);
}

fetchData();

const conatiner= document.getElementsByClassName("container")[0];

function getMenu(data){
    data.forEach(item => {
        const div=document.createElement("div");
        div.className="card";
        div.innerHTML=` <div class="item-image">
        <img src="${item.imgSrc}" alt="item">
        </div>
        <div class="details">
        <div class="left-details">
            <p class="menu-item-name">${item.name}</p>
            <p class="price">$${item.price}</p>
        </div>
        <div class="right-details">
            <i class="fa-solid fa-plus"></i>
        </div>
        </div>`
        conatiner.appendChild(div);
    });
    
}
