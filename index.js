function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rank =  document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}


function deepestChild(){
  var grandNode = document.getElementById('grand-node')
  var nextNode = grandNode.children[0];

  while (nextNode){
    grandNode = nextNode;
    nextNode = grandNode.children[0];
  }

  return grandNode;
}
