let container = document.querySelector(`.playlist`);


for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    container.innerHTML = `
    <div class="card mb-3">
    <div class="row">
        <div class="col-4">
            <img src="${albums[i].img}" alt="" class="img-fluid rounded-start">
        </div>
        <div class="col-8">
            <div class="card-body">
                <h5 class="card-title">
                    ${albums[i].title}
                </h5>
                <p class="card-text">${albums[i].description}</p>
                <p class="card-text"><small class="text-muted">${albums[i].year}</small></p>
            </div>
        </div>
    </div>
    </div>
`
};
