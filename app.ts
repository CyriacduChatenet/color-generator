const body = document.querySelector('body') as HTMLElement;
const codePara = document.querySelector('.hexaCode') as HTMLParagraphElement
const buttonGenerator = document.querySelector('.generateColor') as HTMLButtonElement;
const cardContainer = document.querySelector('.cardContainer') as HTMLDivElement;
const copyMsg = document.querySelector('.copyMsg') as HTMLParagraphElement;

const charactersList = 'ABCDEF1234567890'

let finalCode: string;

const codeGenerator = () => {
    const randomCharacter = () => {
        const characterRandom = charactersList[Math.floor(Math.random() * charactersList.length)]
        return characterRandom
    } 
    const generateRandomCode = () => {
        const codePart = []
        for(let i = 0; i <6; i++){
            codePart.push(randomCharacter())
        }
        return codePart.join('')
    }
    const code = generateRandomCode()
    return finalCode = code
}

window.addEventListener('load',() => {
    body.style.backgroundColor = `#${codeGenerator()}`
    codePara.textContent = `#${codeGenerator()}`
})

buttonGenerator.addEventListener('click',() => {
    body.style.backgroundColor = `#${codeGenerator()}`
    codePara.textContent = `#${codeGenerator()}`
})
cardContainer.addEventListener('click',() => {
    navigator.clipboard.writeText(`#${finalCode}`);
    copyMsg.textContent = 'Color copied in clipboard'
    setTimeout(() => {
        copyMsg.textContent = ""
    },3000)
})