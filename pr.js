console.log('a');

console.log('b');
const pr1=new Promise((res,rej)=>{
    setTimeout(() => {console.log('c'); res();}, 3000) 
    // res(); 
});

pr1.then(()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {console.log('d'); res();}, 0)  
        // res();
    }).then(()=>{
        console.log('e');
    })
})


