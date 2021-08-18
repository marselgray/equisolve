window.addEventListener('load', function() {
    loadData();
});



function loadData(){

    var url = `https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => leadership = data)
        .then(function(){
            // console.log(leadership);

            leadership.map(function( item){
                console.log(item)
                let id = item.name
                id = id.toLowerCase().replace(/\s/g, '');
                console.log(id)
                let bio = `
                    <div class="grid__card">
                        <input type="checkbox" id="${id}" class="input"/>
                        <label for="${id}">
                            <img src="${item.photo_url}" alt="Photo of ${item.name}" class="bio__image">
                            <div class="bio">
                                <p class="bio__name">${item.name}</p>
                                <p class="bio__title">${item.title}</p>
                                <p class="bio__view">View Bio</p>
                            </div>
                        </label>
                        <div class="modal">
                            <p class="modal__name">${item.name}</p>
                            <p class="modal__title">${item.title}</p>
                            <div class="modal__box">
                                ${item.bio}
                                <img src="${item.photo_url}" alt="Photo of ${item.name}" class="modal__image">
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById('leadership').insertAdjacentHTML('beforeend', bio);
            });
            

        })        
}

