// function checkArticle(url, successCallback, failCallback) {
//   var xhr = new XMLHttpRequest();
//   var method = "HEAD";
// 
//   xhr.open(method, url, true);
// 
//   xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4) {
//       if (xhr.status===200) {
//         successCallback();
//       } else {
//         failCallback();
//       }
//     }
//   };
// 
//   xhr.send(true);
// 
// }
// 
// 
// checkArticle("https://www.theguardian.com/p/9fgdf", function() {
//   console.log('it went ok');
// }, function() {
//   console.log('it went badly');
// });

function setupParent() {
  var parentDoc = parent.document;
  parentDoc.body.style.backgroundColor = '#f6f6f6';
  console.log(window.innerWidth);
  if (window.innerWidth!=300 &&  window.innerWidth!=380 &&window.innerWidth<=440) {
    var thisEmbed = parentDoc.querySelector('.element-atom.element--supporting');
    thisEmbed.style.marginLeft = '-10px';
  }
}

function setupMain() {
  document.querySelector('.ofm-index__expand__label').addEventListener('click', function() {
    document.querySelector('.interactive-wrapper').classList.add('full-index');
    window.resize()

  })
}

function start() {
  setupParent();
  setupMain();
}

start();