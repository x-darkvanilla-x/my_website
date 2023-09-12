let a = 0;

function show()
{
    a++;

    if(a%2 == 0)
    {
        document.getElementById('nav_opt').style.display = "none";
        document.getElementById('home').style.borderTop = "none";
    }
    else
    {
        document.getElementById('nav_opt').style.display = "block";
        document.getElementById('home').style.borderTop = "1px solid #333";
    }
}