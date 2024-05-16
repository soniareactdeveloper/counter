let result = document.querySelectorAll('.result')

let arr = Array.from(result)

arr.map((item) =>{
    
    let i = 0 
    let count = ()=>{
        i++
        item.innerHTML = i

        if(i == item.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(()=>{
        count()
    },3 / item.dataset.number)
})