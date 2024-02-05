document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的名称
    var pageName = window.location.pathname;

    // 获取所有的 label 元素
    var labels = document.getElementsByClassName('label');
    // 为每个 label 元素添加点击事件监听器
    for (var i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function(event) {
            // 当 label 被点击时，发送一个消息到浏览器扩展
            var imgElement = event.target.parentNode.querySelector('img');
            var imgSrc = imgElement.src;
            chrome.runtime.sendMessage({page: pageName, labelText: event.target.innerText, imgLink: imgSrc});
            var bbElement = document.querySelector('.bb');
            bbElement.innerText = 'Page: ' + pageName + ', Label: ' + event.target.innerText + ', Image Link: ' + imgSrc;
        });
    }
});

window.showModal = function(id) {
    var images = data.find(item => item.id === id).key;
    var modalImages = document.getElementById('modalImages');
    modalImages.innerHTML = '';
    images.forEach((image, index) => {
        var box2 = document.createElement('div');
        box2.className = 'box2';
        var img = document.createElement('img');
        img.src = image;
        var label = document.createElement('div');
        label.className = 'label';
        label.innerText = id + '-' + (index + 1);
        box2.appendChild(img);
        box2.appendChild(label);
        modalImages.appendChild(box2);
    });
    modal.style.display = "block";
}

// 添加事件监听器到 modalImages 元素
document.getElementById('modalImages').addEventListener('click', function(event) {
    // 检查事件是否是在 label 元素上触发的
    if (event.target.className === 'label') {
        // 当 label 被点击时，发送一个消息到浏览器扩展
        var imgElement = event.target.parentNode.querySelector('img');
        var imgSrc = imgElement.src;
        chrome.runtime.sendMessage({page: window.location.pathname, labelText: event.target.innerText, imgLink: imgSrc});
        var bbElement = document.querySelector('.bb');
        bbElement.innerText = 'Page: ' + pageName + ', Label: ' + event.target.innerText + ', Image Link: ' + imgSrc;
    }
});
