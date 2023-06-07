function updateClock() {
    var currentTime = new Date();
    var hourElement = document.querySelector('.hour');
    var minuteElement = document.querySelectorAll('.hour')[1];
    var secondElement = document.querySelectorAll('.hour')[2];
    var ampmElement = document.querySelector('.wwe');
  
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.textContent = seconds;
    ampmElement.textContent = ampm;
  }
  
  updateClock();
  
  setInterval(updateClock, 1000);
  //clock section

  function updateBox2Message() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    var box2Element = document.querySelector('.box2');
  
    var message = "Grab some Healthy Breakfast!!!";
  
    if (currentHour >= 5 && currentHour < 12) {
      message = "Grab some Healthy Breakfast!!!";
    } else if (currentHour >= 12 && currentHour < 17) {
      message = "LET'S HAVE SOME LUNCH";
    } else if (currentHour >= 17 && currentHour < 21) {
      message = "STOP YAWNING, GET SOME TEA...  IT'S JUST EVENING!";
    } else {
      message = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
  
    box2Element.textContent = message;
  }
  
  updateBox2Message();
  
  setInterval(updateBox2Message, 60000);
  //clock message section


  function updateNote() {
    const wakeupTime = document.getElementById("wakeup").value;
    const lunchTime = document.getElementById("lunch").value;
    const napTime = document.getElementById("nap").value;
    const nightTime = document.getElementById("night").value;

    document.getElementById("card1").textContent = "Wake Up Time: " + getSelectedOptionText(wakeupTime);
    document.getElementById("card2").textContent = "Lunch Time: " + getSelectedOptionText(lunchTime);
    document.getElementById("card3").textContent = "Nap Time: " + getSelectedOptionText(napTime);
    document.getElementById("card4").textContent = "Night Time: " + getSelectedOptionText(nightTime);


    const currentTime = new Date();
    let text = "";
    let image = "";

    if (currentTime.getHours() === parseInt(wakeupTime)) {
      text = "Good Morning!! Wake up !!";
      image = "./Component 30 – 1.svg";
    } else if (currentTime.getHours() === parseInt(lunchTime)) {
      text = "GOOD AFTERNOON !! TAKE SOME SLEEP";
      image = "./Component 31 – 1.svg";
    } else if (currentTime.getHours() === parseInt(napTime)) {
      text = "GOOD EVENING !!";
      image = "./lunch_image@2x.png";
    } else if (currentTime.getHours() === parseInt(nightTime)) {
      text = "GOOD NIGHT !!";
      image = "./Component 32 – 1.svg";
    }

    if (text !== "") {
      document.querySelector(".box1").textContent = text;
      document.querySelector(".lastpic img").src = image;
    }
    
  }
  

  function getSelectedOptionText(value) {
    const selectedOption = document.querySelector(`option[value="${value}"]`);
    return selectedOption ? selectedOption.textContent : "";
  }