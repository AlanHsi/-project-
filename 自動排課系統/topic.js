/*
let topic=[
    "課程介紹",
    "假日",
    "環境安裝 & Laba1",
    "Lab2 & Lab3",
    "Lab4"
];*/

let topic=[];
var bol1=0,bol2=0;

$("#stbutton").on("click",function()
{
    var Table = document.getElementById("courseTable");
	Table.innerHTML = "";
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    bol1=0,bol2=0;
    var str1 = document.getElementById("text1").value.toString();
    topic.push(str1);

    let topicCount=topic.length;
    let millisecsPerDay=24*60*60*1000
    for(var i=0;i<topicCount;i++)
    {
        /*$("#courseTable").append(
            "<tr>"+
            `<td>${i+1}</td>`+
            `<td>${new Date(StartDate.getTime() + 7*i*millisecsPerDay).toLocaleDateString()}</td>`+
            `<td>${topic[i]}</td>`+
            "/tr"
        )*/
        if(topic[i]=="假日")
        {
            bol1=1;
            $("#courseTable").append(
                "<tr>"+
                `<td bgcolor="gray">${i+1}</td>`+
                `<td bgcolor="gray">${new Date(StartDate.getTime() + 7*i*millisecsPerDay).toLocaleDateString().substring(5)}</td>`+
                `<td bgcolor="gray">${topic[i]}</td>`+
                "</tr>"   
            )
        }
        else
        {
            bol1=0;
            if(i%2==0)
            {
                bol2=1;
                $("#courseTable").append(
                    "<tr>"+
                    `<td bgcolor="pink">${i+1}</td>`+
                    `<td bgcolor="pink">${new Date(StartDate.getTime() + 7*i*millisecsPerDay).toLocaleDateString().substring(5)}</td>`+
                    `<td bgcolor="pink">${topic[i]}</td>`+
                    "</tr>"   
                )
            }
            else
            {
                bol2=2;
                $("#courseTable").append(
                    "<tr>"+
                    `<td bgcolor="yellow">${i+1}</td>`+
                    `<td bgcolor="yellow">${new Date(StartDate.getTime() + 7*i*millisecsPerDay).toLocaleDateString().substring(5)}</td>`+
                    `<td bgcolor="yellow">${topic[i]}</td>`+
                    "</tr>"    
                )
            }
        }
    }
});

let StartDate=new Date();

function SetMonthDate(startmonth,startday)
{
    StartDate.setMonth(startmonth-1,startday)
    StartDate.setHours(0)
    StartDate.setMinutes(0)
    StartDate.setSeconds(0)
}

SetMonthDate(2,21);


