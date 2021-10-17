(function(){
    
    const correts = document.querySelectorAll('.true');
    const buttom = document.querySelector('.resolver');
    const revelar = ()=>{
        buttom.addEventListener('click', ()=>{
            correts.forEach(element =>{
                element.classList.toggle('true--revelate');
            });
        });
    }
    revelar();
    const elementTable = document.querySelectorAll('.letter');
    const buttomR = document.querySelector('.reset');
    const reset = ()=>{
        buttomR.addEventListener('click', ()=>{
            elementTable.forEach(element => {
                if(element.classList.contains('letter--active')){
                    element.classList.remove('letter--active');
                }
                if(element.classList.contains('true--revelate')){
                    element.classList.remove('true--revelate');
                }
            });
        })
    }
    reset();
    const addClick = ()=>{
        elementTable.forEach(element =>{
            element.addEventListener('click', ()=>{
                element.classList.toggle('letter--active');
            });
        });
    }
    addClick();
})();