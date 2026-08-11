/* =========================================================
   CROSSROADS FELLOWSHIP
   SITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * =====================================================
     * MOBILE NAVIGATION
     * =====================================================
     */

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

        });

    }


    /*
     * =====================================================
     * YOUTUBE VIDEO
     * =====================================================
     *
     * Put the YouTube video ID here.
     *
     * Example:
     *
     * https://www.youtube.com/watch?v=ABC123XYZ
     *
     * The ID would be:
     *
     * ABC123XYZ
     *
     */

     


    if (youtubeFrame && youtubeId !== "") {

        youtubeFrame.src =
            "https://www.youtube.com/embed/" +
            youtubeId +
            "?rel=0";

        youtubeFrame.style.display = "block";


        if (videoPlaceholder) {

            videoPlaceholder.style.display = "none";

        }

    }


    /*
     * =====================================================
     * EVENTS
     * =====================================================
     *
     * Add events here.
     *
     * Example:
     *
     * {
     *     month: "SEP",
     *     day: "06",
     *     title: "Church Picnic",
     *     time: "12:00 PM",
     *     location: "Crossroads Fellowship",
     *     description: "Join us for food and fellowship."
     * }
     *
     */

    const events = [

        /*
        {
            month: "SEP",
            day: "06",
            title: "Church Picnic",
            time: "12:00 PM",
            location: "Crossroads Fellowship",
            description:
                "Join us for food, fellowship and fun."
        }
        */

    ];


    const eventList =
        document.querySelector("#event-list");


    if (
        eventList &&
        events.length > 0
    ) {

        eventList.innerHTML = "";


        events.forEach(function (event) {

            const article =
                document.createElement("article");

            article.className =
                "event-card";


            article.innerHTML = `

                <div class="event-date">

                    <div class="event-month">
                        ${event.month}
                    </div>

                    <div class="event-day">
                        ${event.day}
                    </div>

                </div>


                <div class="event-details">

                    <h3>
                        ${event.title}
                    </h3>

                    <p>
                        <strong>
                            ${event.time}
                        </strong>

                        &nbsp;·&nbsp;

                        ${event.location}
                    </p>

                    <p>
                        ${event.description}
                    </p>

                </div>

            `;


            eventList.appendChild(article);

        });

    }

});