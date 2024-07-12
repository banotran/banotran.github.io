let data = [
    // {
    //     id: 0, title: "Jump into the Sky (Mavis)", description: 
    //     "Jump, parkour, and earn Ronin tokens in the sky – it's all free!",
    //     image: "./crossads/images/com.onlywayisup.climbparkour.png",
    //     imageIcon: "./imageWeb/website.png",
    //     linkIcon: "https://littlegreengames.itch.io/only-way-is-up",
    //     textHeaderIcon: "Website", textMoreIcon: "(free to earn)",
    // },
    {
        id: 0, title: "Axie Tri-Force", description: 
        "First, Little Green Games and SkyMavis have combined forces, and their creation is now available on Greenlight.",
        image: "./crossads/images/com.SkyMavis.AxieMiniTriforce.png",
        imageIcon: "./imageWeb/skymavis.png",
        linkIcon: "https://welcome.skymavis.com/download/",
        textHeaderIcon: "Mavis Hub", textMoreIcon: "(available)",
    },
    {
        id: 1, title: "Axie Backpack", description: 
        "Turns are your chance to make moves, shoot, use skills, and engage in combat actions, all packed with excitement.",
        image: "./crossads/images/com.SkyMavis.AxieBackpack.png",
        imageIcon: "./imageWeb/skymavis.png",
        linkIcon: "https://welcome.skymavis.com/download/",
        textHeaderIcon: "Mavis Hub", textMoreIcon: "(available)",
    }
];


let renderHtml = function (arr) {
    let html = "";
    arr.map((item, index) => {
        html += `
        <div class="row boder mt-4" style = "background-color: #50C4ED">
               <div class="col-lg-3 " style=" padding: 25px">
                        <div class=" ">
                            <img style="border-radius: 10px; width: 90%;"
                                class="img-fluid "
                                alt=""
                                src="${item.image}">
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row text-left mt-4">
                            <div class="text-left">
                                <h3>${item.title}</h3>
                            </div>
                            <div>
                                <p style = "font-size: 16px;">${item.description}</p>
                            </div>
                        </div>
                        <div class="row text-left mt-2" id="listButton">
                            <div class="col-lg-4" onclick="openLink(this)" data-link="${item.linkIcon}">
                                <div class="btn btn-info button" style="">
                                    <div style="padding: 5px;">
                                        <img src="${item.imageIcon}" alt="" style="width: 50px; height: 50px; padding: 5px">
                                    </div>
                                    <div style="margin-left: 20px; margin-top: 5px;">
                                        <span style="font-size: 18px; padding: 0px;margin: 0px;">${item.textHeaderIcon}</span>
                                        <p style="font-size: 16px;padding: 0px; margin: 0px;">${item.textMoreIcon}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        `
    })
    $("#content").append(html);
}
renderHtml(data);
let openLink = function (item) {
    let link = $(item).data("link");
    window.open(link)
}