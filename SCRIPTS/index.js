const toggler = document.querySelector('.nav-bar-toggler');
const navBar = document.querySelector('#navBar');
const header = document.getElementById('header');

toggler.addEventListener('click', ()=>{

    if (navBar.style.width !== "0px") {
        navBar.style.width = "0px";
        header.style.position = "static";
        console.log('display is none');
    } 
    else {
        let devicewidth = "500";
        if (window.innerWidth <= devicewidth) {
            
           fixedHeader();
        }
        else{
            alert(header);
        }

    }
});
const fixedHeader =()=>{
    header.style.position = "fixed";
    header.style.top = '0';
    header.style.width= '100%';

    navBar.style.width = "80%";
    navBar.style.position = "fixed";
    navBar.style.left = '0';
}