// setting the DATE:

const dateElement = document.getElementById("date");


let today = new Date();

    
dateElement.innerHTML = today;

dateElement.innerHTML = today.toLocaleDateString("ar-SA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",

    
});


// setting the date Refresher:  
//حالياً عند الضغط على علامة التحديث تتحدث الصفحة كاملة،
//يجب تطوير الكود ليتم تحديث الساعة وحدها
const reFresh = document.querySelector(".update");

reFresh.onclick = function () {
    "use strict";

    dateElement.innerHTML = location.reload();
};