const body = document.body;
const switchBtn = document.querySelector(".switch");
const text = document.querySelector(".color");


switchBtn.addEventListener("click", function(){
    let color1 = getRandomNumber();
    let color2 = getRandomNumber();
    let color3 = getRandomNumber();

    text.innerHTML = `rgb(${color1},${color2},${color3})`;
    body.style.backgroundColor = text.innerHTML;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}


const solution = (numbers) => {
    let array = 0;
    for (let index=0; index <numbers.length; index++ ){
        if (numbers[index] > array){
            array = numbers[index]
        }
    }
    return array
}   

console.log(solution(array))