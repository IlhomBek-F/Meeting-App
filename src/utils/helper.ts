function reorganize() {
    const container = document.getElementById('container') as HTMLElement;
    const screen = document.getElementById('screen') as HTMLElement;
    const personAspect = 310 / 165; // width/height ratio of .person
    const people = [...container?.querySelectorAll(".person")].slice(0, 12);
    const numPeople = people.length;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenAspect = screenWidth / screenHeight;

    let cols = Math.ceil(Math.sqrt(numPeople * screenAspect));
    let rows = Math.ceil(numPeople / cols);

    let cardWidth = screenWidth / cols;
    let cardHeight = cardWidth / personAspect;

    if (cardHeight * rows > screenHeight) {
        rows = Math.ceil(Math.sqrt(numPeople / screenAspect));
        cols = Math.ceil(numPeople / rows);
        cardHeight = screenHeight / rows;
        cardWidth = cardHeight * personAspect;
    }

    container.style.width = `${cols * cardWidth}px`;
    container.style.height = `${rows * cardHeight}px`;
    if (numPeople <= 2) {
        cardWidth -= 50;
    } else {
        cardWidth += 50
        cardHeight += 50
    }
    people.forEach((person: HTMLElement | any) => {
        person.style.width = `${cardWidth - 3}px`;
        person.style.height = `${cardHeight - 3}px`;
    });

    screen.style.alignItems = numPeople <= 2 ? 'center' : 'unset';
    container.style.flexWrap = people.length > 2 ? "wrap" : "unset";
}

async function copyTextToClipboard(id: string) {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(id);
    } else {
        return document.execCommand('copy', true, id);
    }
}

export { reorganize, copyTextToClipboard }