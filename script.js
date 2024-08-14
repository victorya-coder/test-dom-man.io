document.querySelector('body').style.display="flex";
document.querySelector('body').style.flexDirection="column";
document.querySelector('body').style.backgroundColor="black";
document.querySelector('body').style.alignItems="left";

let container=document.getElementById('container');
container.innerHTML="about me | contact me | portofolio";
container.style.color="white";
container.style.position="fixed";
container.style.top="0";
container.style.margin="2rem";
container.style.marginLeft="50rem";
container.style.padding="0.5rem";
container.style.textAlign="left";
container.style.fontSize="2rem";
container.style.width="100%";
container.style.height="1vh";

let kontaine=document.getElementById('kontaine');
kontaine.style.border="solid white";
kontaine.style.color="white";
kontaine.style.height="0";
kontaine.style.width="100%";
kontaine.style.marginTop="15vh";
kontaine.style.marginBottom="0";
kontaine.style.position="fixed";

let judul=document.getElementById('judul');
judul.innerHTML="<h1>Collaborating <br> With Me </h1> <p> hello im a pasionate student <br> that want to go to itb</p>";
judul.style.color="white";
judul.style.margin="16vh";
judul.style.marginTop="10vh";
judul.style.marginBottom="3vh";
judul.style.fontSize="35px";

let button=document.getElementById('button');
button.innerHTML="hire me";
button.style.alignItems="left";
button.style.width="20vh"
button.style.height="8vh"
button.style.marginLeft="16vh";
button.style.marginTop="0";
button.style.color="black";
button.style.fontSize="1rem";
button.style.borderRadius="2em";

let img=document.getElementById('img');
img.style.minWidth="10em";
img.style.minHeight="10em";
img.style.height="20em";
img.style.width="20em";
img.style.backgroundImage="url('https://png.pngtree.com/thumb_back/fw800/background/20230720/pngtree-cool-neon-star-4k-uhd-glowing-abstract-background-in-blue-and-image_3705285.jpg')";
img.style.borderRadius="50%";
img.style.marginLeft="120vh";
img.style.marginTop="-50vh";