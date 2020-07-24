var N = 100;
let celebs = Array.apply(null, {
  length: N
}).map(Number.call, Number)

celebs.shift()

let ticket = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null]
]

let random = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let addToRow3 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == null)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber])


    if (ticket[2][n] == null) {
      if (celebs[celebNumber] == ticket[1][n] || celebs[celebNumber] == ticket[0][n]) {
        console.log("Same celeb")
      } else {
        ticket[2][n] = celebs[celebNumber]
        count = count - 1
      }
    } else {
      console.log("false")
    }
  }
}


let addToRow2 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == null)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber])


    if (ticket[1][n] == null) {
      if (celebs[celebNumber] == ticket[2][n] || celebs[celebNumber] == ticket[0][n]) {
        console.log("Same celeb")
      } else {
        ticket[1][n] = celebs[celebNumber]
        count = count - 1
      }

    } else {
      console.log("false")
    }
  }
}

let addToRow1 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == null)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber - 1])


    if (ticket[0][n] == null) {
      ticket[0][n] = celebs[celebNumber]
      count = count - 1
    } else {
      console.log("false")
    }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// function setRandomColor() {
//   $("#colorpad").css("background-color", getRandomColor());
// }

// let addColours = () => {
//   for (let i = 0; i < ticket.length; i++) {
//    for (let j = 0; j < array.length; j++) {
//       ticket[i][j] == null ? 

//    }

//   }
// }

let makeTicket = () => {

  addToRow1()
  addToRow2()
  addToRow3()
  console.log(ticket)
}

/* console.log(ticket)
 */






let createTicket = (array) => {

  let table = document.createElement('table');
  let row1 = document.createElement('row');
  let row2 = document.createElement('row');
  let row3 = document.createElement('row');
  // let breaker = document.createElement('br');



  for (let x = 0; x < array[0].length; x++) {

    let td = document.createElement('td');
    td.innerHTML = array[0][x];
    row1.appendChild(td);

  }


  table.appendChild(row1);


  for (let x = 0; x < array[1].length; x++) {

    let td = document.createElement('td');
    td.innerHTML = array[1][x];
    row2.appendChild(td);
  }


  // table.appendChild(breaker);
  table.appendChild(row2);
  // table.appendChild(breaker);



  for (let x = 0; x < array[2].length; x++) {

    let td = document.createElement('td');
    td.innerHTML = array[2][x];
    row3.appendChild(td);
  }

  table.appendChild(row3);
  console.log("@@@@@@@@@@@@@@@@@@" + table)
  return table;



}

let saveTicket = () => {
  $("#btnSave").click(function () {

    html2canvas($('#widget').get(0)).then(function (canvas) {
      theCanvas = canvas;
      document.body.appendChild(canvas);
      // Convert and download as image 
      Canvas2Image.saveAsPNG(canvas);
      $("#img-out").append(canvas);
      $("#widget").toggle()
      $("#message").toggle()
      $("#darkMode").hide()
      $("#whiteMode").hide()

      // Clean up 
      //document.body.removeChild(canvas);

    });
    // html2canvas($("#widget"), {
    //   onrendered: function (canvas) {
    //     theCanvas = canvas;
    //     document.body.appendChild(canvas);

    //     // Convert and download as image 
    //     Canvas2Image.saveAsPNG(canvas);
    //     $("#img-out").append(canvas);
    //     // Clean up 
    //     //document.body.removeChild(canvas);
    //   }
    // });
  });
}

let addName = () => {
  $("#nameSave").click(function () {
    let ticketName = $("#nameForm").val()
    console.log(ticketName)
    $("#name").text(ticketName)
    $("#widget").toggle()
    $("#btnSave").toggle()
    $("#darkMode").toggle()
    $("#name-form").toggle()
  })

}

let darkMode = () => {
  $("#darkMode").click(function () {
    $('td').each(function () {
      if ($(this).text() != '') {
        $(this).css('backgroundColor', 'black');
        $(this).css('color', 'white');
      }
    });
    $("#darkMode").toggle()
    $("#whiteMode").toggle()

  })
}

let whiteMode = () => {
  $("#whiteMode").click(function () {
    $('td').each(function () {
      if ($(this).text() != '') {
        $(this).css('backgroundColor', 'white');
        $(this).css('color', 'black');
      }
    });
    $("#darkMode").toggle()
    $("#whiteMode").toggle()
  })
}

window.onload = function () {
  makeTicket()
  let table = createTicket(ticket)
  document.getElementById('ticket').appendChild(table);
  $('td').each(function () {
    if ($(this).text() == '') {
      $(this).css('backgroundColor', getRandomColor());
    }
  });
  saveTicket()
  // $("#name").toggle()
  darkMode()
  whiteMode()
  addName()
}


// Adding thtis so it can be uplaoded to heorku