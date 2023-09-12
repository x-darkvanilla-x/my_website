window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx == 0 || verticalScrollPx < 500)  
  {
    home_btn(true)
    about_btn(false)
    skill_btn(false)
    exp_btn(false)
    work_btn(false)
    blog_btn(false)
    contact_btn(false)
  }
  else if (verticalScrollPx > 500 && verticalScrollPx < 1700)
  {
    home_btn(false)
    about_btn(true)
    skill_btn(false)
    exp_btn(false)
    work_btn(false)
    blog_btn(false)
    contact_btn(false)
  }
  else if (verticalScrollPx > 1850 && verticalScrollPx < 2400)
  {
    home_btn(false)
    about_btn(false)
    skill_btn(true)
    exp_btn(false)
    work_btn(false)
    blog_btn(false)
    contact_btn(false)
  }
  else if (verticalScrollPx > 2400 && verticalScrollPx < 2700)
  {
    home_btn(false)
    about_btn(false)
    skill_btn(false)
    exp_btn(true)
    work_btn(false)
    blog_btn(false)
    contact_btn(false)

    if (!done_play) play();
  }
  else if (verticalScrollPx > 2700 && verticalScrollPx < 4000)
  {
    home_btn(false)
    about_btn(false)
    skill_btn(false)
    exp_btn(false)
    work_btn(true)
    blog_btn(false)
    contact_btn(false)
  }
  else if (verticalScrollPx > 4000 && verticalScrollPx < 4750)
  {
    home_btn(false)
    about_btn(false)
    skill_btn(false)
    exp_btn(false)
    work_btn(false)
    blog_btn(true)
    contact_btn(false)
  }
  else if (verticalScrollPx > 4750 && verticalScrollPx < 6000)
  {
    home_btn(false)
    about_btn(false)
    skill_btn(false)
    exp_btn(false)
    work_btn(false)
    blog_btn(false)
    contact_btn(true)
  }


  if (verticalScrollPx > 300 && verticalScrollPx < 500)
  {
    document.getElementById("about_content").style.animation = "about_amimation 3s ease";
    document.getElementById("about_content").style.opacity = "1";
  }
  else if (verticalScrollPx > 500 && verticalScrollPx < 900)
  {
    document.getElementById("skill-card-animation").style.animation = "about_amimation 3s ease";
    document.getElementById("skill-card-animation").style.opacity = "1";
  }
  else if (verticalScrollPx > 1100 && verticalScrollPx < 1500 )
  {
    document.getElementById("apper-animation").style.animation = "appear 3s ease";
    document.getElementById("apper-animation").style.opacity = "1";
  }

  

});

// functions for left navigation color change
function home_btn(on)
{
  var el = document.getElementById('home_btn');
  el.style.color = on ? 'blue' : '#333';
}

function about_btn(on)
{
  var el = document.getElementById('about_btn');
  el.style.color = on ? 'blue' : '#333';
}

function skill_btn(on)
{
  var el = document.getElementById('skill_btn');
  el.style.color = on ? 'blue' : '#333';
}

function exp_btn(on)
{
  var el = document.getElementById('exp_btn');
  el.style.color = on ? 'blue' : '#333';
}

function work_btn(on)
{
  var el = document.getElementById('work_btn');
  el.style.color = on ? 'blue' : '#333';
}

function blog_btn(on)
{
  var el = document.getElementById('blog_btn');
  el.style.color = on ? 'blue' : '#333';
}

function contact_btn(on)
{
  var el = document.getElementById('contact_btn');
  el.style.color = on ? 'blue' : '#333';
}
// End of functions

function onloadanimation()
{
  document.getElementById("home_content").style.animation = "mymove 3s ease";
  document.getElementById("home_content").style.opacity = "1";
}

function distestimonal(on)
{
  var el = document.getElementById('testimonial');
  el.style.display = on ? 'flex' : 'none';
}
