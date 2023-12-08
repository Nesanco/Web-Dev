function initializeSlideshow() {
    setInterval(slideshow, 4000);

    var x = 1;
    function slideshow() {
        var image = document.getElementById("slideshow-image");
        var header = document.getElementById("slideshow-header");
        var text = document.getElementById("slideshow-text")
        if (x === 1) {
            header.innerHTML = "Videogames";
            text.innerHTML = "I like to play videogames sometimes such as Rust, Minecraft, and R6";
            image.style.backgroundImage = "url(https://assets-prd.ignimgs.com/2023/09/14/rust-1694685836804.jpg)"
        }

        else if (x === 2) {
            header.innerHTML = "Soccer";
            text.innerHTML = "I like to player soccer for fun and watch games, my favorite team is Manchester United";
            image.style.backgroundImage = "url(https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg)"
        }

        else if (x === 3) {
            header.innerHTML = "Travel";
            text.innerHTML = "I like to travel a lot, especially to countries and continents I've never been to before";
            image.style.backgroundImage = "url(images/str.jpg)"
        }

        else if (x === 4) {
            header.innerHTML = "Ping Pong";
            text.innerHTML = "I like to player ping pong at my house, I have a ping pong table where I play";
            image.style.backgroundImage = "url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igwrxHrIG.UM/v1/-1x-1.jpg)"
        }

        else if (x === 5) {
            header.innerHTML = "England";
            text.innerHTML = "I am originally from England, Hastings, on the south coast of England";
            image.style.backgroundImage = "url(https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F5dc85168-5958-11ea-b224-188b67cae9b1.jpg?crop=2667%2C1500%2C0%2C0)"
        }

        else if (x === 6) {
            header.innerHTML = "French";
            text.innerHTML = "I can speak some French, I've been learning it for about 5 years";
            image.style.backgroundImage = "url(https://cdn.ila-france.com/wp-content/uploads/2016/11/6-ideas-french-culture.jpg)"
        }

        else if (x === 7) {
            header.innerHTML = "Geography";
            text.innerHTML = "I am good at Geography, I don't know how, but I am";
            image.style.backgroundImage = "url(https://study.com/cimages/videopreview/p3c2j8y73a.jpg)"
        }

        else if (x === 8) {
            header.innerHTML = "Roller coasters";
            text.innerHTML = "I like going on roller coasters, my favorite theme park is Alton Towers";
            image.style.backgroundImage = "url(images/rollercoaster.jpg)"
        }

        else if (x === 9) {
            header.innerHTML = "Job";
            text.innerHTML = "I want to be something medical related, I don't know what specifically";
            image.style.backgroundImage = "url(https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*)"
        }

        else if (x === 10) {
            header.innerHTML = "Java";
            text.innerHTML = "I know how to code using Java, I learnt myself a few years ago";
            image.style.backgroundImage = "url(https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png)"
            x = 0;
        }

        x += 1;
    }
}
