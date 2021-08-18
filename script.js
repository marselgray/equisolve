window.addEventListener('load', function() {
    loadData();
    domLoader();
});

// dom loader of svg while data loads
function domLoader(){
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.visibility = 'visible';
}

// loads data
function loadData(){

    var url = `https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => leadership = data)
        .then(function(){
            // console.log(leadership);

            leadership.map( (item) => {

                // create unique id
                let id = item.name
                id = id.toLowerCase().replace(/\s/g, '');
                
                // add data to cards
                let bio = `
                    <div class="grid__card">
                        <input type="checkbox" id="${id}" class="input"/>
                        <label class="label" for="${id}">
                            <img src="${item.photo_url}" alt="Photo of ${item.name}" class="bio__image">
                            <div class="bio">
                                <p class="bio__name">${item.name}</p>
                                <p class="bio__title">${item.title}</p>
                                <p class="bio__view">View Bio</p>
                            </div>
                        </label>
                        <div class="modal">
                            <div class="modal__container">
                                <label for="${id}" class="modal__close" aria-label="close modal">X</label>
                                <p class="modal__name">${item.name}</p>
                                <p class="modal__title">${item.title}</p>
                                <div class="modal__box">
                                    ${item.bio}
                                    <img src="${item.photo_url}" alt="Photo of ${item.name}" class="modal__image">
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // add items to grid
                document.getElementById('leadership').insertAdjacentHTML('beforeend', bio);
            });
            

        })        
}



