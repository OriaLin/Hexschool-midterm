let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

const ticketCardList = document.querySelector('.ticketCard-area');
const regionSearch = document.querySelector('.regionSearch');
const cantFindArea = document.querySelector('.cantFind-area');


let str = '';

// 初始化 顯示所有資料
function init() {
    data.forEach(function (item, index) {
        let content = `<li class="ticketCard"><div class="ticketCard-img"><a href="#"><img src="${item.imgUrl}" alt=""></a><div class="ticketCard-region">${item.area}</div><div class="ticketCard-rank">${item.rate}</div></div><div class="ticketCard-content"><div><h3><a href="#" class="ticketCard-name">${item.name}</a></h3><p class="ticketCard-description">${item.description}</p></div>  <div class="ticketCard-info"><p class="ticketCard-num">      <span><i class="fas fa-exclamation-circle"></i></span>剩下最後 <span id="ticketCard-num"> ${item.group} </span>組</p><p class="ticketCard-price">TWD<span id="ticketCard-price">$${item.price}</span></p></div></div></li>`;
        str += content;
        ticketCardList.innerHTML = str;
    });
    str = '';
    cantFindArea.style.display = 'none';
}

init();

// 篩選功能
regionSearch.addEventListener('change', function (e) {
    let haveData = false;
    data.forEach(function (item, index) {
        if (e.target.value === item.area) {
            haveData = true;
            cantFindArea.style.display = 'none';
            let content = `<li class="ticketCard"><div class="ticketCard-img"><a href="#"><img src="${item.imgUrl}" alt=""></a><div class="ticketCard-region">${item.area}</div><div class="ticketCard-rank">${item.rate}</div></div><div class="ticketCard-content"><div><h3><a href="#" class="ticketCard-name">${item.name}</a></h3><p class="ticketCard-description">${item.description}</p></div>  <div class="ticketCard-info"><p class="ticketCard-num">      <span><i class="fas fa-exclamation-circle"></i></span>剩下最後 <span id="ticketCard-num"> ${item.group} </span>組</p><p class="ticketCard-price">TWD<span id="ticketCard-price">$${item.price}</span></p></div></div></li>`;
            str += content;
            ticketCardList.innerHTML = str;
        } else if (e.target.value === '全部地區') {
            haveData = true;

            cantFindArea.style.display = 'none';
            init();

        }
    });
    // 若無符合的資料，開啟cantFind-area
    if (!haveData) {

        ticketCardList.innerHTML = str;
        cantFindArea.style.display = 'block';
    }
    str = '';

});

// 新增套票功能

const addTicketName = document.querySelector('#ticketName');
const addTicketImgUrl = document.querySelector('#ticketImgUrl');
const addTicketRegion = document.querySelector('#ticketRegion');
const addTicketPrice = document.querySelector('#ticketPrice');
const addTicketNum = document.querySelector('#ticketNum');
const addTicketRate = document.querySelector('#ticketRate');
const addTicketDescription = document.querySelector('#ticketDescription');
const addTicketBtn = document.querySelector('.addTicket-btn');

addTicketBtn.addEventListener('click', function (e) {
    let obj = {};
    obj.id = data.length;
    obj.name = addTicketName.value;
    obj.imgUrl = addTicketImgUrl.value;
    obj.area = addTicketRegion.value;
    obj.description = addTicketDescription.value;
    obj.group = addTicketNum.value;
    obj.price = addTicketPrice.value;
    obj.rate = addTicketRate.value;
    console.log(obj);

    data.push(obj);
    init(); //顯示所有資料

    // 清空輸入欄
    addTicketName.value = '';
    addTicketImgUrl.value = '';
    addTicketRegion.value = '';
    addTicketDescription.value = '';
    addTicketNum.value = '';
    addTicketPrice.value = '';
    addTicketRate.value = '';
});