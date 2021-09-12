// initial var
// let counter = 0

// // function
// function count() {
            
//     counter = counter + 1;
//     document.querySelector('h1').innerHTML = counter
            
        
//     }

//     document.addEventListener('DOMContentLoaded', function(){
//         document.querySelector('button').onclick = count;
//     });

// local Storage
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

// function
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter
    localStorage.setItem('counter',counter);
        
    }

    document.addEventListener('DOMContentLoaded', function() {

        document.querySelector('h1').innerHTML = localStorage.getItem('counter');
        document.querySelector('button').onclick = count;
    });