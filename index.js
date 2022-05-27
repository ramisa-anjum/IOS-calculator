window.onload=function(){
    let btns=document.querySelectorAll("button")

    let input=document.querySelector("input")


for (var i = 0; i< btns.length; i++ ){
    btns[i].addEventListener('click',function(){
       
        if( this.innerHTML == '='){
            input.value = eval(input.value).toFixed(2);
            }
            else if( this.innerHTML == 'AC'){
                input.value = '';
            }
            else if( this.innerHTML == '←'){
                input.value=input.value.slice(0,-1)
               
            }
            else if( this.innerHTML == '+/-'){
                var answer = input.value = eval(input.value);
                answer = parseInt(answer);
                input.value = -answer;
            }else{
                input.value += this.innerHTML;
            }
        if(input.value.length >=0 )  {
            document.querySelector('input').style.fontSize="3rem"
        }if(input.value.length >= 13)  {
            document.querySelector('input').style.fontSize="2rem"
        }
        if(input.value.length >= 20)  {
            document.querySelector('input').style.fontSize="1rem"
        }       
    })
}
}