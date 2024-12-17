let data = [
    {
        id: 0, title: "Lucky Blind Bag", description: 
        "A popular game that combines blind bag opening, and using items to play mini games. Designed to keep players engaged by providing a variety of gameplay experiences.",
        image: "./kingCat/images/games/blindBag/icon.png",
        imageIcon: "https://img.icons8.com/?size=100&id=32338&format=png&color=000000",
        linkIcon: "https://drive.google.com/file/d/1mkPQkDqh_vrUBUpSPrttAl2qU_xZg-iC/view?usp=sharing",
        textHeaderIcon: "Demo APK", textMoreIcon: "build: 16-12-2024",
        screenShot: [
            "./kingCat/images/games/blindBag/screenShots/0.png",
            "./kingCat/images/games/blindBag/screenShots/1.png",
            "./kingCat/images/games/blindBag/screenShots/2.png",
            "./kingCat/images/games/blindBag/screenShots/3.png",
            "./kingCat/images/games/blindBag/screenShots/4.png",
            "./kingCat/images/games/blindBag/screenShots/5.png"
        ],
        videoLink: "./kingCat/images/games/blindBag/videos/demo.mp4"
    },
];

// Render HTML with screenshot images in a row
let renderHtml = function (arr) {
    let html = "";
    arr.map((item, index) => {
        html += `
        <div class="row border mt-4" style="background-color:rgb(255, 244, 205); border-radius: 10px">
            <div class="col-lg-3" style="padding: 25px">
                <div style="padding-bottom: 25px">
                    <img style="border-radius: 10px; width: 90%;"
                        class="img-fluid"
                        alt=""
                        src="${item.image}">
                </div>
                <div onclick="openLink(this)" data-link="${item.linkIcon}" style="padding-top: 25px">
                    <div class="btn btn-warning button" style="width: 90%; padding-right: 25px; display: flex; align-items: center;">
                        <div style="padding: 5px;">
                            <img src="${item.imageIcon}" alt="" style="width: 50px; height: 50px; padding: 5px;">
                        </div>
                        <div style="margin-left: 10px;">
                            <span style="font-size: 18px; padding: 0px; margin: 0px;">${item.textHeaderIcon}</span>
                            <p style="font-size: 12px; padding: 0px; margin: 0px;">${item.textMoreIcon}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="row text-left mt-4" style="padding-right: 20px">
                    <div class="text-left">
                        <h3>${item.title}</h3>
                    </div>
                    <div>
                        <p style="font-size: 16px;">${item.description}</p>
                    </div>
                </div>

                <!-- Screen Shot Section -->
                <div class="row mt-4" style="padding-bottom: 30px; padding-right: 20px">
                    <div style="margin-left: 10px;">
                        <span style="font-size: 18px; padding: 0px; margin: 0px;">Screen shot</span>
                    </div>
                    <div class="col-lg-12 mt-3">
                        <div style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
                            ${item.screenShot.map((screenshot) => `
                                <img src="${screenshot}" alt="Screenshot" style="width: auto; height: 150px; margin-right: 15px; border-radius: 10px;">
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="row mt-4" style="padding-bottom: 30px; padding-right: 20px;">
                    <div style="margin-left: 10px;">
                        <span style="font-size: 18px; padding: 0px; margin: 0px;">Video demo</span>
                    </div>
                    <div class="col-lg-12">
                        <video controls style="width: ; height: 50%; border-radius: 10px;">
                            <source src="${item.videoLink}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    $("#content").append(html);
};


renderHtml(data);
let openLink = function (item) {
    let link = $(item).data("link");
    window.open(link)
}