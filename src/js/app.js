// 🤞

import loadJson from '../components/load-json/'

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
  var ms = new Date().getTime();
  setupParent();
  setupMain();
  loadData(ms);
  
}

start();

function loadData(ms) {
  var pageId = pageId();
  loadJson("https://interactive.guim.co.uk/docsdata-test/1sy_6UjKaJCPq4WX1sLo9gBay-tE7S0hJsigHk2jdWqI.json")
  .then((data) => {
    var awards = data.sheets[Object.keys(data.sheets)[0]];
    console.log(awards);
    for (var i = 0; awards.length > i; i++) {
      var award = awards[i];
      console.log(award.Name);
      // guardian.config.page.pageId
    }
  });
}

function pageId() {
  if (guardian && guardian.config && guardian.config.page && guardian.config.page.pageId) {
    return guardian.config.page.pageId;
  } else if (window.GU && window.GU.opts && window.GU.opts.pageId) {
    return window.GU.opts.pageId;
  }
}