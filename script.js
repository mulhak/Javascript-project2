
document.querySelector('.banner-btn').addEventListener('click',() =>{
       document.querySelector('.banner').style.display = 'none';
       document.querySelector('.form-container').style.cssText = 'opacity:1; visibility: visible';
       document.querySelector('.container1').style.background = '#eee';

});

document.querySelector('.x-btn').addEventListener('click', ()=>{
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0 ; visibility: hidden';
    document.querySelector('.container1').style.cssText ='background:url(images/bg1.jpeg) center no-repeat; background-size:cover';

});





