//window.onload=function()
//{
    //alert("hi");
//};

let imageURL_Array=[
"https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
"https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
"https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
"https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
];

function getRandomInt() {
    var numberOfListItem=$("li").length;
	return Math.floor(Math.random()*numberOfListItem);
}

var s=0;
$(function()
{
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("Hello");
        //var numberOfListItem=$("li").length;
        //var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        num=getRandomInt();
        //console.log(num);
        while(true)
        {
            if(s==num)
            {
                num=getRandomInt();
            }
            else
            {
                s=num;
                break;
            }
        }
        $("h1").text($("li").eq(num).text())
        $("img").attr("src",imageURL_Array[num])
    })
});