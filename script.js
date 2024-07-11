document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll slowly to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                duration: 10000000 // Adjust the duration (in milliseconds)
            });
        }
    });
});
menu = document.getElementById("menu-icon");

close = document.getElementById("close");
nav = document.getElementById("nav");


menu.addEventListener("click",function(){
    nav.style.display="block";
    menu.style.opacity="0";
    setTimeout(() => {
        nav.style.transform = "translateX(0%)";
        nav.style.opacity = "1";
    }, 0);
});

close.addEventListener("click",function(){
    nav.style.transform = "translateX(100%)";
    nav.style.opacity = "0";
    
    setTimeout(() => {
        nav.style.display="none";
        
    }, 500);
    setTimeout(() => {
        menu.style.opacity="1";
        
    }, 500);
    
    
});


top_list = document.querySelectorAll(".top_list");

function main_sliding() {
    main_text.style.transform="scaleX(1)";
    function onebyone(n) {
        i=0;
        function loop_it(){
            if (i< n) {
                top_list[i].style.transform = "translateY(0)";
                i++;
    
                setTimeout(loop_it,200);
            }
            
        }
        loop_it();
        
    }
    onebyone(top_list.length);

}


function checkScreenWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth >= 800) {
        nav.style.display = "block";
        nav.style.opacity = "1";
        nav.style.transform = "translateX(0%)";
        
    } else {
        nav.style.display = "none";
    }
    if(nav.style.display=="none" && screenWidth<=900){
        menu.style.display="block";
    }
}
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

main_text = document.getElementById("main");


function deactivateAllExcept(elementToKeepActive) {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        if (element !== elementToKeepActive) {
            element.classList.remove("active");
        }
    });
}

skill_heads = document.querySelectorAll(".skill_head");
skill_deets = document.querySelectorAll(".skill_detail");

skills = document.getElementById("skills");
experience = document.getElementById("experience");
education = document.getElementById("education");

skillBox = document.getElementById("skillBox");
expBox = document.getElementById("expBox");
eduBox =  document.getElementById("eduBox");

// const sections = document.querySelectorAll("section");
// const options = {
//     threshold: 0.5, // Adjust the threshold as needed
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("skillBox_active");
//             //skillBox.style.transform = "translateX(0)";

//         } else {
//             entry.target.classList.remove("skillBox_active");
//         }
//     });
// }, options);

// sections.forEach((section) => {
//     observer.observe(section);
// });

skills.addEventListener("click",function(){
    this.classList.toggle("active");
    deactivateAllExcept(this);

    //initial opacity of all
    eduBox.style.opacity = "0";
    skillBox.style.opacity = "0";
    expBox.style.opacity = "0";

     //styles change for skill box only
    skillBox.style.position = "relative"; // Show it in the layout
    skillBox.style.opacity = "1";
    skillBox.style.transform = "translateX(0)";

    //making other section back to old style
    expBox.style.transform = "translateX(300px)";
    eduBox.style.transform = "translateX(300px)";

    expBox.style.position = "absolute";
    eduBox.style.position = "absolute";
});


experience.addEventListener("click",function(){
    this.classList.toggle("active");
    deactivateAllExcept(this);
    //initial opacity of all
    eduBox.style.opacity = "0";
    skillBox.style.opacity = "0";
    expBox.style.opacity = "0";

     //styles change for exp box only
    expBox.style.position = "relative"; // Show it in the layout
    expBox.style.opacity = "1";
    expBox.style.transform = "translateX(0)";

    //making other section back to old style
    skillBox.style.transform = "translateX(300px)";
    eduBox.style.transform = "translateX(300px)";
    skillBox.style.position = "absolute";
    eduBox.style.position = "absolute";
});

education.addEventListener("click",function(){
    this.classList.toggle("active");
    deactivateAllExcept(this);

    //initial opacity of all
    eduBox.style.opacity = "0";
    skillBox.style.opacity = "0";
    expBox.style.opacity = "0";

    //styles change for edu box only
    eduBox.style.position = "relative"; // Show it in the layout
    eduBox.style.opacity = "1";
    eduBox.style.transform = "translateX(0)";

    //making other section back to old style
    expBox.style.transform = "translateX(300px)";
    skillBox.style.transform = "translateX(300px)";
    skillBox.style.position = "absolute";
    expBox.style.position = "absolute";
});

// const container = document.querySelector('.works');
// let currentIndex = -1;
// const divsPerPage = 3; // Number of divs to display per page
// const divWidth = 37; // Width of each div as a percentage

// function scrollToIndex(index) {
//     currentIndex = index;
//     const scrollX = index * divWidth;
//     container.style.transform = `translateX(-${scrollX}%)`;
// }

// setInterval(() => {
//     // Automatically scroll to the next page
//     const nextPageIndex = (currentIndex + divsPerPage) % container.children.length;
//     scrollToIndex(nextPageIndex);
// }, 3000); 
const sections = document.querySelectorAll('.work3');
let currentSectionIndex = 0;

function rotateSections() {
    sections[currentSectionIndex].classList.add('section-transition');
    setTimeout(() => {
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].style.display = 'flex';
    sections[currentSectionIndex].classList.remove('section-transition');
    }, 500); 
}

// Initially, show the first section
sections[currentSectionIndex].style.display = 'flex';

// Rotate sections every 3 seconds (3000 milliseconds)
setInterval(rotateSections, 5500);

//ANIMATED BG
var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('particles'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
    time = 0;
    count = 0;

    for(var i = 0; i < arc; i++) {
        parts[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random()*colors.length)],
            size: Math.random() * size
        }
    }
}

function particles() {
    ctx.clearRect(0,0,w,h);
    canvas.addEventListener('mousemove', MouseMove, false);
    for(var i = 0; i < arc; i++) {
        var li = parts[i];
        var distanceFactor = DistanceBetween( mouse, parts[i] );
        var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
        ctx.beginPath();
        ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle=li.c;
        if(i%2==0)
            ctx.stroke();
        else
            ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if(li.x > w){
            li.x = 0; 
        }
        if(li.y > h) {
            li.y = 0; 
        }
        if(li.x < 0) {
            li.x = w; 
        }
        if(li.y < 0) {
            li.y = h; 
        }
    }
    if(time < speed) {
        time++;
    }
    setTimeout(particles,1000/rate);
}

function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
}

function DistanceBetween(p1,p2) {
    var dx = p2.x-p1.x;
    var dy = p2.y-p1.y;
    return Math.sqrt(dx*dx + dy*dy);
}

create();
particles();

