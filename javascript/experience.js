// function for counting animation

let done_play = false;

function play(){
  
    done_play = true
  
    let counts = setInterval(updated);
    let upto = 0;

    function updated() 
    {
        let count = document.getElementById("coffee");
        count.innerHTML = ++upto;
        if (upto === 302) // 0 to 302
        {
            clearInterval(counts);
        }
    }
  
  
    let counts2 = setInterval(updated2);
    let upto2 = 0;
  
    function updated2() 
    {
        let count2 = document.getElementById("projects");
        count2.innerHTML = ++upto2;
        if (upto2 === 124) // 0 to 124
        {
            clearInterval(counts2);
        }
    }
  
    let counts3 = setInterval(updated3);
    let upto3 = 0;       
                    
    function updated3() 
    {
        let count3 = document.getElementById("client");
        count3.innerHTML = ++upto3;
        if (upto3 === 24) // 0 to 24
        {
            clearInterval(counts3);
        }
    }
  
    let counts4 = setInterval(updated4);
    let upto4 = 0;
                    
    function updated4() 
    {
        let count4 = document.getElementById("partners");
        count4.innerHTML = ++upto4;
        if (upto4 === 3) // 0 to 3
        {
            clearInterval(counts4);
        }
    }
  }