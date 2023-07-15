const url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
async function fetchData(){
    const response = await fetch(url);
    const result=await response.json();
    getMenu(result);
    dataItems(result);
    
}

fetchData();

const items=[];
function dataItems(data){
    data.forEach((element)=>{
        items.push(element);
    })
}
console.log(items);

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

const orderTaken=[];

function takeOrder(items){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve(items);
        },2500);
    })
}


takeOrder(items).then((data)=>{
    for(let x=0;x<3;x++){
        let y =Math.floor(Math.random() * data.length);
        orderTaken.push(data[y]);
    }
    console.log(orderTaken);
}).catch((error)=>{
    console.log("error.message");
})


