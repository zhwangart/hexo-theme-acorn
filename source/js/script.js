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

tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h3, h4, h5',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});

var tesObj = document.getElementsByName("carousel");
	//设置 value 值为 0 选中
	for(var i=0; i < tesObj.length; i++){
		if (tesObj[i].value=="0"){
			tesObj[i].checked = true;
			break;
			}
	}
