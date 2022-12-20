class Slider {
    constructor (buttonNext, buttonPrevious, sliderLine, slides, sliderDots, dots){
        this.buttonNext = buttonNext;
        this.buttonPrevious = buttonPrevious;
        this.sliderLine = sliderLine
        this.slides = slides;
        this.dots = dots;
        this.sliderDots = sliderDots
        this.index = 0;
    }

    showSlide (currentSlide) {
        currentSlide = this.index
        for (let slide of this.slides){
            slide.classList.remove('slider__item--active')
        }
        for (let dot of this.dots){
            dot.classList.remove('slider__dot--active')
        }
        this.slides[currentSlide].classList.add('slider__item--active')
        this.dots[currentSlide].classList.add('slider__dot--active')
        this.index = currentSlide;
    }

    nextSlide () {
        this.index++
        if(this.index >= this.slides.length){
            this.index = 0;
        }
        this.showSlide(this.index - 1);
    }

    prevSlide () {
        this.index--;
        if(this.index < 0){
            this.index = this.slides.length - 1;
        }
        this.showSlide(this.index + 1);
    }

    lastSlide() {
        this.index = this.slides.length - 1;
        this.showSlide()
    }

    firstSlide() {
        this.index = 0
        this.showSlide()
    }

    openByIndex (index) {
        this.showSlide(this.index = index)
    }

    addSlide(tittle, description){
        const card = document.createElement('li')
        const dot = document.createElement('span')
        card.classList.add('slider__item', 'slider__item--animation')
        dot.classList.add('slider__dot')
        this.sliderLine.append(card)
        this.sliderDots.append(dot)
        const cardTittle = document.createElement('h2')
        cardTittle.innerText = tittle;
        card.append(cardTittle)
        const cardDescription = document.createElement('p')
        cardDescription.innerText = description;
        card.append(cardDescription)
    }

    insertSlide(index, tittle, description){
        const card = document.createElement('li')
        const dot = document.createElement('span')
        card.classList.add('slider__item', 'slider__item--animation')
        dot.classList.add('slider__dot')
        this.slides[index].before(card)
        this.dots[index].before(dot)
        const cardTittle = document.createElement('h2')
        cardTittle.innerText = tittle;
        card.append(cardTittle)
        const cardDescription = document.createElement('p')
        cardDescription.innerText = description;
        card.append(cardDescription)
    }
}

(() => {
    const buttonNext = document.querySelector('.slider__button--next');
    const buttonPrevious = document.querySelector('.slider__button--previous');
    const buttonFirst = document.querySelector('.slider__button--first');
    const buttonLast = document.querySelector('.slider__button--last');
    const sliderLine = document.querySelector('.slider__line')
    const slides = document.getElementsByClassName('slider__item');
    const dots = document.getElementsByClassName('slider__dot');
    const sliderDots = document.querySelector('.slider__dots');
    
    const slider = new Slider(buttonNext, buttonPrevious, sliderLine, slides, sliderDots, dots);
    
    slider.showSlide();
    
    buttonNext.addEventListener('click', () =>{
        slider.nextSlide();
    })
    
    buttonPrevious.addEventListener('click', () =>{
        slider.prevSlide();
    })
    
    buttonFirst.addEventListener('click', () =>{
        slider.firstSlide()
    })

    buttonLast.addEventListener('click', () =>{
        slider.lastSlide()
    })
        
    slider.addSlide('Last Slide', 'Some Tittle')
    
    slider.insertSlide(3, 'Slide which was inserted', 'Some Tittle')
    
    for (i = 0; i < dots.length; i++){
        let index = i;
        dots[i].addEventListener('click', () => {
            slider.openByIndex(index)
        })
    }
})()