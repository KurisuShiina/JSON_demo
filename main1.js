var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://kurisushiina.github.io/json_demo/demo.json';//保存一个即将访问的 URL 作为变量
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';//设定 responseType 为 JSON,服务器将知道我们想要返回一个 JSON 对象
request.send();//然后发送请求
request.onload = function() {//load事件
    var news = request.response;
    populateHeader(news);//用正确的数据填充<header>
    showItems(news);//将创建一个信息卡片，然后把它插入<section>中
  }

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['timeManage'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'How to do: ' + jsonObj['howtodo'] + ' // Date: ' + jsonObj['date'];
  header.appendChild(myPara);
}

function showItems(jsonObj) {
    var item = jsonObj['members'];
        
    for(i = 0; i < item.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = item[i].name;
      myPara1.textContent = 'Method 1: ' + item[i].item1;
      myPara2.textContent = 'Definition: ' + item[i].definition;
      myPara3.textContent = 'Effect: ';
          
      var effects = item[i].effect;
      for(j = 0; j < effects.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = effects[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

