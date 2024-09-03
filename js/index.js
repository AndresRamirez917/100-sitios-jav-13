async function getData() {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const character = await result.json();
    character.results.forEach(element => {
        if(element.id == 8) {
            const card = document.createRange().createContextualFragment(`
                
               <div class="card-2">
                <img src="${element.image}" alt="">
               </div>
                
                `)
                const about = document.getElementById('about');
                about.append(card)
        }
    });
}
getData()