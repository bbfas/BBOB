 //popup.js
/*
                  L1(cccucULLQQ                    
                 "(txxxfjrxnc0z^                   
                rjjcccXzccXYQ0JU                   
             Uf(([})){}1\\\jXJmOZ                  
            $kpdmOmCzUYxfjjnzJZuvx                 
             ookxv\zXnXXXjYJJ0*Mdq#                
                j{}(()/r)|LfrXkW%WW                
               %0(\1]]}(?(f\nQM&#$                 
               $vvjxt\/\jjf/rt                     
                QqYQLnftfxYOo                      
             fvZppqmmqpqQcZ#abq                    
       ?jXY0OwmdbdqmZ00zjfrq*MpJOLQc               
    :zQqZmZmOmmmZOqmOLOQ/)(cq8bqZZZZqqQ            
   <vmppdbZZZLZ0OC0CQCCOX/|j\dk0O0OOOZLO           
   {UpwwZppLmYLJCUCJJUXCQr)1[)qpJ0000O0O0L         
  OQJZOOO0OQ0CLUCCJCJJYUCC_!!I~qwJLQQQ0ZOLz        
  $0LkdwZO0QLCLJUCYCUJzYUC\;;;:<wLCJLQ0CL0OJ       
   nw&abwOQQLLJJJUXJYYzUUJX{]}/jY0JCJCLCC00LL      
   'k&&MkqZCCCCJCYUCUUCLQJUQLJJJXUzzXXJCCYCCLQ     
    8&888MhqOJYYzYJUUXzXzXznzzccvczU0ZUCCJXUJCXj   
      #W&88MhmQzcXcvcXcvzXUXJJCCUJJYJZQCJJYYJCUJ   
       #&&888MaZm0JLJXC00CccZYCLXJcvXXczUXYXYJJCm  
*/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // 获取 label 元素
    var myLabel = document.getElementById('myLabel');
    // 更新 label 的文本
    myLabel.innerText = 'from: ' + message.page + ', T&T: ' + message.labelText;
});
//初始服装代码base64编码 ，所有texture与tex均为-1
var base64String = "SXRlbQpESQpwQ0kwCi0xCnBDSTEKLTEKcENJMgotMQpwQ0kzCi0xCnBDSTQKLTEKcENJNQotMQpwQ0k2Ci0xCnBDSTcKLTEKcENJOAotMQpwQ0k5Ci0xCnBDSTEwCi0xCnBDSTExCi0xCi9ESQpEVApwQ1QwCi0xCnBDVDEKLTEKcENUMgotMQpwQ1QzCi0xCnBDVDQKLTEKcENUNQotMQpwQ1Q2Ci0xCnBDVDcKLTEKcENUOAotMQpwQ1Q5Ci0xCnBDVDEwCi0xCnBDVDExCi0xCi9EVApQaQpwUGkwCi0xCnBQaTEKLTEKcFBpMgotMQpwUGkzCi0xCnBQaTQKLTEKcFBpNQotMQpwUGk2Ci0xCnBQaTcKLTEKL1BpClB0CnBQdDAKLTEKcFB0MQotMQpwUHQyCi0xCnBQdDMKLTEKcFB0NAotMQpwUHQ1Ci0xCnBQdDYKLTEKcFB0NwotMQovUHQKL0l0ZW0K";
var createButton = document.getElementById('create');
var bbElement = document.getElementById('bb');
var copyButton = document.getElementById('copy');
var resetButton = document.getElementById('reset');

var data;
var dataB = '';

function resetData() {
    var decodedString = atob(base64String); // 使用atob函数进行Base64解码
    data = decodedString.split('\n'); // 按行分割
    dataB = '';
    var elements = ['head', 'body', 'body2'];
    for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        var images = element.getElementsByTagName('img');
        while (images[0]) {
            // 在 pageToImgElement 对象中删除对应的 img 元素
            for (var page in pageToImgElement) {
                if (pageToImgElement[page] === images[0]) {
                    delete pageToImgElement[page];
                    break;
                }
            }
            // 删除 img 元素
            images[0].parentNode.removeChild(images[0]);
        }
    }
}


resetButton.addEventListener('click', function () {
    resetData();
    bbElement.innerHTML = "The code has been reset!";

});

createButton.addEventListener('click', function () {
    var str = data.join('\n');
    str = str.replace(/ +(?= )/g, '');
    dataB = btoa(unescape(encodeURIComponent(str)));
    bbElement.innerHTML = "It's created, click Copy！";
});

copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(dataB).then(function () {
        console.log('nice!Good job!');
        bbElement.innerHTML = "Copied and ready to use！";
    }, function (err) {
        console.error('error: ', err);
    });
});

window.addEventListener('DOMContentLoaded', function () {
    resetData();
    var copyButton = document.getElementById('copy');
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            navigator.clipboard.writeText(dataB);
        });
    }
});

var pageToImgElement = {};
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // 创建页面路径到 div id 的映射关系
    var pageToDivId = {
        '/cc/f/mask/': 'head',
        '/cc/m/mask/': 'head',
        '/cc/f/hair/': 'head',
        '/cc/m/hair/': 'head',
        '/cc/f/hat/': 'head',
        '/cc/m/hat/': 'head',
        '/cc/f/gla/': 'head',
        '/cc/m/gla/': 'head',
        '/cc/f/ears/': 'head',
        '/cc/m/ear/': 'head',
        '/cc/bags/': 'head',
        '/cc/f/torsos/': 'body',
        '/cc/m/torsos/': 'body',
        '/cc/f/Watches/': 'head',
        '/cc/m/Watches/': 'head',
        '/cc/f/bracelets/': 'head',
        '/cc/m/bracelets/': 'head',
        '/cc/f/shoes/': 'body',
        '/cc/m/shoes/': 'body',
        '/cc/f/leg/': 'body',
        '/cc/m/leg/': 'body',
        '/cc/f/acc/': 'body',
        '/cc/m/acc/': 'body',
        '/cc/f/us/': 'body',
        '/cc/m/us/': 'body',
        '/cc/f/ba/': 'body',
        '/cc/m/ba/': 'body',
        '/cc/f/tops/': 'body',
        '/cc/m/tops/': 'body',
        '/cc/f/dec/': 'body',
        '/cc/m/dec/': 'body',
                 
    };
    var divId = pageToDivId[message.page];
    if (divId) {
        // 获取 div 元素
        var divElement = document.getElementById(divId);
        if (divElement) {
            // 获取或创建 img 元素
            var imgElement = pageToImgElement[message.page];
            if (!imgElement) {
                imgElement = document.createElement('img');
                pageToImgElement[message.page] = imgElement;
                divElement.appendChild(imgElement);
            }
            // 更新 img 元素的 src 属性
            imgElement.src = message.imgLink;
            console.log(imgElement.src);  
        }
    }
});    


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var bbElement = document.getElementById('bb');

    if (message.page === '/cc/f/mask/' || message.page === '/cc/m/mask/') {
        // 将 labelText 按照字符 - 进行分拆
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            // 替换字符串
            data[5] = parts[0];
            data[31] = parts[1];
        }
    } else if (message.page === '/cc/f/hair/' || message.page === '/cc/m/hair/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[7] = parts[0];
            data[33] = parts[1];
        }
    } else if (message.page === '/cc/f/torsos/' || message.page === '/cc/m/torsos/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[9] = parts[0];
            data[35] = parts[1];
        }
    } else if (message.page === '/cc/f/leg/' || message.page === '/cc/m/leg/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[11] = parts[0];
            data[37] = parts[1];
        }
    } else if (message.page === '/cc/bags/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[13] = parts[0];
            data[39] = parts[1];
        }
    } else if (message.page === '/cc/f/shoes/' || message.page === '/cc/m/shoes/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[15] = parts[0];
            data[41] = parts[1];
        }
    } else if (message.page === '/cc/f/acc/' || message.page === '/cc/m/acc/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[17] = parts[0];
            data[43] = parts[1];
        }
    } else if (message.page === '/cc/f/us/' || message.page === '/cc/m/us/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[19] = parts[0];
            data[45] = parts[1];
        }
    } else if (message.page === '/cc/f/ba/' || message.page === '/cc/m/ba/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[21] = parts[0];
            data[47] = parts[1];
        }
    } else if (message.page === '/cc/f/dec/' || message.page === '/cc/m/dec/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[23] = parts[0];
            data[49] = parts[1];
        }
    } else if (message.page === '/cc/f/tops/' || message.page === '/cc/m/tops/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[25] = parts[0];
            data[51] = parts[1];
        }
    } else if (message.page === '/cc/f/hat/' || message.page === '/cc/m/hat/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[55] = parts[0];
            data[73] = parts[1];
        }
    } else if (message.page === '/cc/f/gla/' || message.page === '/cc/m/gla/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[57] = parts[0];
            data[75] = parts[1];
        }
    } else if (message.page === '/cc/f/ears/' || message.page === '/cc/m/ear/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[59] = parts[0];
            data[77] = parts[1];
        }
    } else if (message.page === '/cc/f/Watches/' || message.page === '/cc/m/Watches/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[67] = parts[0];
            data[85] = parts[1];
        }
    } else if (message.page === '/cc/f/bracelets/' || message.page === '/cc/m/bracelets/') {
        var parts = message.labelText.split('-');
        if (parts.length === 2) {
            data[69] = parts[0];
            data[87] = parts[1];
        }
    }
});
    