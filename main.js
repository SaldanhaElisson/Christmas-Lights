class Light {
    constructor(buttonOn, buttonOff, buttonRun, Lights, inputInTime){
        this.buttonOff = buttonOff
        this.buttonOn = buttonOn
        this.buttonRun=buttonRun
        this.Lights = Lights
        this.inputInTime = inputInTime
    }

    start(){
        this.buttonOn.addEventListener('click', ()=>{
            this.LightOn()
        })
        this.buttonOff.addEventListener('click', ()=>{
            this.LightOff()
        })
        this.buttonRun.addEventListener('click', ()=>{
            this.LightOn()
        })
    }

    LightOn(){
        console.log(this.inputInTime.value)
        for (const light of this.Lights) {
           light.classList.remove("lightsOff")
           light.style.animation = `glow-yellow ${this.inputInTime.value}s infinite`
          }
    }

    LightOff(){
        console.log(this.Lights)
        for (const light of this.Lights) {
           light.classList.add("lightsOff")
           light.style.animation = `none`
          }
    }
}


const lights = document.querySelector('.lights').children

const buttonOn = document.querySelector('.buttonOn')
const buttonOff = document.querySelector('.buttonOff')
const buttonRun = document.querySelector('.runTime')
const inputInTime = document.querySelector('.inTime')
console.log(inputInTime.value)



const christmasLights = new Light(buttonOn ,buttonOff ,buttonRun ,lights ,inputInTime)
    christmasLights.start()

