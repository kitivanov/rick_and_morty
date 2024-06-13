document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-container');
    const overlay = document.querySelector('.overlay');

    let rotation = 0;
    let overlayRotation = 0;


    window.addEventListener('wheel', (event) => {
        rotation += event.deltaY * 0.3;
        overlayRotation += event.deltaY * 0.07;
        backgroundContainer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;


        if (overlayRotation > 100) {
            overlayRotation = 100;
        } else if (overlayRotation < 0) {
            overlayRotation = 0;
        }
        const opacityPercent = overlayRotation;
        overlay.style.opacity = opacityPercent / 100;
    });

    const mainTitle = document.querySelector('h1');
    mainTitle.classList.add('animate');
    
    if (window.location.pathname.includes('characters.html')) {
        loadCharacters();
    } else if (window.location.pathname.includes('episodes.html')) {
        loadSeasons();
    }

    function loadCharacters() {
        const characterList = document.querySelector('.character-list');
        const characters = [
            { 
                name: 'Rick Sanchez', 
                description: 'Дедуля ученый',
                image: 'images/rick.jpg'
            },
            { 
                name: 'Morty Smith', 
                description: 'Тревожный внук',
                image: 'images/morty.webp'
            },
        ];
    
        characters.forEach(character => {
            const charDiv = document.createElement('div');
            charDiv.classList.add('character');
    
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;
            charDiv.appendChild(img);
    
            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            charDiv.appendChild(nameElement);
    
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = character.description;
            charDiv.appendChild(descriptionElement);
    
            characterList.appendChild(charDiv);
        });

        const charact = document.querySelectorAll('.character');
        document.addEventListener('keydown', (event) => {
           if (event.key === 'f' || event.key === 'F' || event.key === 'а' || event.key === 'А') {
            charact.forEach(character => {
                    const img = character.querySelector('img');
                    
                    if (img.src.includes('rick.jpg')) {
                        img.src = 'images/rick_2.png';
                    } else if (img.src.includes('rick_2.png')) {
                        img.src = 'images/rick.jpg';
                    } else if (img.src.includes('morty.webp')) {
                        img.src = 'images/morty_2.png';
                    } else if (img.src.includes('morty_2.png')) {
                        img.src = 'images/morty.webp';
                    }
                });
            }
        });
    }

    function loadSeasons() {
        const seasonList = document.querySelector('.season-list');
        const seasons = [
            { 
                id: '1',
                name: 'Сезон 1',
                description: 'Первый сезон',
                image: 'images/1.jpg'
            },
            { 
                id: '2',
                name: 'Сезон 2',
                description: 'Второй сезон',
                image: 'images/2.jpg'
            },
            { 
                id: '3',
                name: 'Сезон 3',
                description: 'Третий сезон',
                image: 'images/3.jpg'
            }
        ];
        seasons.forEach(season => {
            const seasonDiv = document.createElement('div');
            seasonDiv.classList.add('season');
            seasonDiv.setAttribute('data-id', season.id);
            
            const nameElement = document.createElement('h3');
            nameElement.textContent = season.name;
            seasonDiv.appendChild(nameElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = season.description;
            seasonDiv.appendChild(descriptionElement);
            seasonList.appendChild(seasonDiv);
    
            const img = document.createElement('img');
            img.src = season.image;
            img.alt = season.name;
            seasonDiv.appendChild(img);
        
            const seasonContent = document.querySelector('.season-content');
            seasonContent.style.display = 'none';
    
            seasonDiv.addEventListener('click', () => {
                seasonContent.style.display = 'flex';
                seasonContent.innerHTML = ''
                seasonContent.innerHTML = `
                    <img src="${season.image}" alt="${season.name}">
                    <div class=season-details>
                    <h3>${season.name}</h3>
                    <p>${season.description}</p>
                    </div>
                `;
            });
        });
    }
});
