export default class Star {
    constructor(number){
        this.element = document.createElement('div');
        this.element.classList.add('star');
        this.element.innerText = number;
        document.body.append(this.element)
    }
}