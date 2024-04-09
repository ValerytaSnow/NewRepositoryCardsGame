let cartita = document.querySelectorAll('.carta')
let ronda = document.getElementById('rondas')
let tiempo = document.getElementById('timer')
let puntos=0
let volteos=[]
let timer 
let segundos = 15
let ron =0

function tempo(){
    timer = setInterval(()=>{
        segundos--
        tiempo.innerHTML = '00:' + segundos
        if((segundos === 0)){
            clearInterval(timer)
            alert('Se acabó el tiempo PUNTAJE: ' + puntos)
            location.reload()
        }
    },1000)
}

function onda(){
    ron ++
    ronda.innerHTML = 'Ronda '  + ron
}


cartita.forEach(cartitas => {
    cartitas.addEventListener('click', girar)
})

tempo()

function girar(event){
    let captura = event.currentTarget
    captura.classList.toggle('volteo')
    captura.removeEventListener('click',girar)

    volteos.push(captura)
    
    let img1 = volteos[0].querySelector('.atras img').getAttribute('src')
    let img2 = volteos[1].querySelector('.atras img').getAttribute('src')

    if(volteos.length === 2){    
        if(img1===img2){
            alert('Las cartas seleccionadas son pares')
            volteos=[]
            puntos++
        }else{
            setTimeout(() => {
                volteos.forEach(captura => captura.classList.remove('volteo'))
                volteos.forEach(captura => captura.addEventListener('click' , girar))
                volteos = []
            }, 1000)
        } 
        onda()

        if((puntos === 4)){
            alert('Ganaste, encontraste todas las cartas PUNTAJE: ' + puntos)
            location.reload()
        }
    }
}