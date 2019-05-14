let arr = []


function play (boxClicked) {
    
    const currId = document.getElementById('player')
    const bClicked = document.getElementById(boxClicked)
    // arr = currId.innerText[boxClicked]
    if (!bClicked.innerText) {
    if (currId.innerText === 'X') {
        currId.innerText = 'O';
        bClicked.innerText = 'X';
        arr[boxClicked] = 'X';
    }
    else {
        currId.innerText = 'X';
        bClicked.innerText = 'O';
        arr[boxClicked] = 'O';
    }
    }
    else {alert("Pick another box")}
// console.log(arr)
  const topLeft = arr[0];
  const topCenter = arr[1];
  const topRight = arr[2];
  const middleLeft = arr[3];
  const middleCenter = arr[4];
  const middleRight = arr[5];
  const bottomLeft = arr[6];
  const bottomCenter = arr[7];
  const bottomRight = arr[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  // DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (arr[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}

function reset () {
    var table = document.getElementById("mytab1");
    for (i = 0; i < 8; i++) {
        document.getElementById(i).innerText = ''
    }
    arr = []
    }