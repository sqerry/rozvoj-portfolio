let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector(".project-grid").children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');


        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('hide');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('hide');
                sortItem[k].classList.add('active');
            }
        }
    });
}