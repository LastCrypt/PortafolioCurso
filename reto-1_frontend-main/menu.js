(function(){
    const btnMenu = document.querySelector("#btnBurger");
    const menu = document.querySelector("#subMenu");
    btnMenu.addEventListener("click", function(){
        const heightMenu = menu.scrollHeight;
        if(menu.classList.contains("mostrar")){
            menu.classList.remove("mostrar");
            menu.removeAttribute("style");
        }
        else{
            menu.classList.add("mostrar");
            menu.style.height = heightMenu + "px";
        }
    });

    const subMenuBtn = document.querySelectorAll('.subMenu1');

    const addClick = ()=>{
        subMenuBtn.forEach(element =>
            {
                element.addEventListener('click', ()=>{
                    let subMenu = element.children[1];
                    let heightSubMenu = 0;
                    element.classList.toggle('menu--active')
                    console.log(element);
                    let heightMenuV = menu.clientHeight;
                    if(subMenu.clientHeight === 0){
                        heightSubMenu = subMenu.scrollHeight;
                        heightMenuV = (heightMenuV+heightSubMenu);
                    }else{
                        heightMenuV = heightMenuV - subMenu.clientHeight;
                    }
                    subMenu.style.height = `${heightSubMenu}px`;
                    menu.style.height = heightMenuV + 'px';
                })
            })
    }

    addClick();
})();
