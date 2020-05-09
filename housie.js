let celebs = ["Aamir Khan",
  "Abhishek Bachchan",
  "Aishwarya Rai",
  "Ajay Devgan",
  "Akshay Kumar",
  "Alia Bhatt",
  "Amitabh Bachchan",
  "A.R Rahman",
  "Amrish Puri",
  "Anil Kapoor", "Anushka Sharma",
  "Apj Abdul Kalam",
  "Abhay Deol",
  "Atal Bihari Bajpaye",
  "Deepika Padukone",
  "Dia Mirza",
  "Dharmendra",
  "Disha Patani",
  "Dimple Kapadia",
  "Govinda", "Hema Malini",
  "Hrithik Roshan",
  "Indira Gandhi",
  "John Abraham",
  "Johnny Lever",
  "Juhi Chawla",
  "Jackie Shroff",
  "Kajol",
  "Kangana Ranaut",
  "Kapil Dev", "Kareena Kapoor",
  "Katrina Kaif",
  "Karishma Kapoor",
  "Kalki Koechlin",
  "Laloo prasad yaadav",
  "Lata Mangeskar",
  "Mahatma Gandhi",
  "Mamtha Banerjee",
  "Manmohan Singh", "Mary Kom", "Madhuri Dixit",
  "Malaika Arora",
  "Mother Teresa",
  "Ms Dhoni",
  "Mukesh Ambani",
  "Malika Sherawat",
  "Nana Patekar",
  "Narendra Modi",
  "Naseeruddin Shah",
  "Navjot Singh Siddu", "Paresh Rawal",
  "Preity Zinta",
  "Priyanka Chopra",
  "Rahul Gandhi",
  "Rahul Dravid",
  "Rajesh Khanna",
  "Rajinikanth",
  "Ram Dev Baba",
  "Ranbir Kapoor",
  "Ranvir Singh", "Rekha",
  "Rishi Kapoor",
  "Sachin Tendulkar",
  "Saif Ali Khan",
  "Salman Khan",
  "Sania Mirza",
  "Sanjay Dutt",
  "Sonam Kapoor",
  "Shahid Kapoor",
  "Shahrukh Khan", "Shakti Kapoor",
  "Sharmila Tagore",
  "Soha Ali Khan",
  "Shatrughan Sinha",
  "Shilpa Shetty",
  "Sohail Khan",
  "Sonia Gandhi",
  "Sri Sri Ravi Shankar",
  "Sridevi",
  "Sara Ali Khan", "Sunil Shetty",
  "Sunny Deol",
  "Sushmita Sen",
  "Tabu",
  "Urmila Matondakar",
  "Vidya Balan",
  "Vijay Mallya",
  "Varun Dhawan",
  "Virat Kohli",
  "Yami Gautam"
]

let ticket = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let random = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let addToRow3 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == 0)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber - 1])


    if (ticket[2][n] == 0) {
      ticket[2][n] = celebs[celebNumber - 1]
      count = count - 1
    } else {
      console.log("false")
    }
  }
}

let addToRow2 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == 0)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber - 1])


    if (ticket[1][n] == 0) {
      ticket[1][n] = celebs[celebNumber - 1]
      count = count - 1
    } else {
      console.log("false")
    }
  }
}

let addToRow1 = () => {

  let count = 0;
  for (let i = 0; i < ticket[2].length; ++i) {
    if (ticket[2][i] == 0)
      count++;
  }
  console.log("on line 133 " + count)

  while (count > 4) {
    let n = random(0, 8)
    let m = random(0, 9)

    celebNumber = n * 10 + m
    console.log(n + " " + m + " " + celebNumber)
    console.log(celebs[celebNumber - 1])


    if (ticket[0][n] == 0) {
      ticket[0][n] = celebs[celebNumber - 1]
      count = count - 1
    } else {
      console.log("false")
    }
  }
}


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

  table.appendChild(row2);

  for (let x = 0; x < array[2].length; x++) {

    let td = document.createElement('td');
    td.innerHTML = array[2][x];
    row3.appendChild(td);
  }

  table.appendChild(row3);
  return table;

}

window.onload = function () {
  makeTicket()
  let table = createTicket(ticket)
  document.body.appendChild(table);
}