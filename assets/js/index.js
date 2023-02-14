const myGlasses = [

]
let _btn = document.querySelectorAll('.shortstory button')

_btn.forEach((item, index)=>{
    item.addEventListener('click', function(){
        let _code = item.parentElement.getAttribute('data-code')


        if(
            (item.getAttribute('data-count')) == null
        ){
            // firstclick
            _li = document.createElement('li')
            _h2 = item.previousElementSibling.innerHTML
            _src = item.previousElementSibling.previousElementSibling.getAttribute('src')
            _li.innerHTML = "<h2>"+_h2+"</h2><span>quantity : <b>1</b></span> <img src='"+_src+"' />"
            _li.setAttribute('id', _code)
            document.getElementsByClassName('glasses')[0].appendChild(_li)
            item.setAttribute('data-count', 1)
        }
        else{
            // anotherclick
            _numberPro = item.getAttribute('data-count')
            _numberPro++
            document.querySelector('li#' +_code+ ' b').innerHTML=_numberPro
            item.setAttribute('data-count', _numberPro)
        }
    })
})

document.querySelector('#final').addEventListener('click', function(){
    let liGlasses = document.querySelectorAll('.glasses li')
    for(i=0; i<liGlasses.length; i++){
        liGlasses[i].getAttribute('id')

        _child = liGlasses[i].children
        _child2 = _child[1].children

        const sampleProp = {
            code: liGlasses[i].getAttribute('id'),
            title: _child[0].innerHTML,
            count: _child2[0].innerHTML
        }

        console.log(sampleProp);

        myGlasses.push(sampleProp)
        console.log(myGlasses);


    }
})