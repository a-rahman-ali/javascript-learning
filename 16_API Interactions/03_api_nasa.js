function bodyLoad() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var item of data.photos) {
                var tr = document.createElement("tr");
                var tdId = document.createElement("td");
                var tdPreview = document.createElement("td");
                var tdCamera = document.createElement("td");
                var tdRover = document.createElement("td");

                tdId.innerHTML = item.id;
                tdPreview.innerHTML = `
                <img src=${item.img_src} width="100" height="100">
            `;
                tdCamera.innerHTML = item.camera.full_name;
                tdRover.innerHTML = item.rovername;

                tr.appendChild(tdId);
                tr.appendChild(tdPreview);
                tr.appendChild(tdCamera);
                tr.appendChild(tdRover);

                document.querySelector("tbody").appendChild(tr);
            }
        })
}
