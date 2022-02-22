document.onscroll = function() {
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
var headerShadow = document.getElementById("header");
if (scrollTop > 10)
// headerShadow.classList.add("header-fixed"); //增加
// headerShadow.classList.remove("header-fixed"); //去除
headerShadow.classList.replace("header-absolute","header-fixed"); //替换
else
headerShadow.classList.replace("header-fixed","header-absolute"); //替换
}

feather.replace()

