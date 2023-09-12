const screenWidth  = window.screen.width;

let change_text = document.getElementById('home_quote');

if(screenWidth  < 600)
{
   change_text.innerHTML = 'Life is like riding a bicycle. To keep your balance, you must keep moving. <br>&emsp;<br> &emsp;-Albert Einstein'
}
else
{
    change_text.innerHTML = '“The key to great ideas is not having them, it is executing them. <br> And great ideas come from problems. As designers we call problems briefs, <br> and we call reactions to problems concepts.” ';
}