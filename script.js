window.addEventListener('load', () => {
    let long;
    let lat;



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            var APIKey = "298a4f435bb40084f3affdac067f0650";

            var queryURL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=298a4f435bb40084f3affdac067f0650&lat=${lat}&lon=${long}`

            $.ajax({
                url: queryURL,
                method: "GET"
            })

                .then(function (response) {
                    console.log(response)
                    $(".temperature-degree").text(response.main.temp + " F")
                    $(".temperature-degree").append("<br>").append(response.weather[0].main)
                    $(".location-timezone1").text(response.name + " Today")
                    $(".temperature-degree").append("<br>").append(response.wind.speed + " Wind speed")
                    
                   var iconw = (response.weather[0].icon)

                    var imgElem = $("<img>")
                    imgElem.attr("src", `http://openweathermap.org/img/wn/${iconw}.png`)

                    $(".icon1").append(imgElem)

                        
                    





                    var queryURL2 = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=298a4f435bb40084f3affdac067f0650&lat=${lat}&lon=${long}`

                    $.ajax({
                        url: queryURL2,
                        method: "GET"
                    })

                        .then(function (response) {
                            console.log(response)
                            $(".temperature-degree2").text(response.list[4].main.temp + " F")
                            $(".temperature-degree2").append("<br>").append(response.list[4].weather[0].main)
                            $(".temperature-degree2").append("<br>").append(response.list[4].wind.speed + " Wind speed")


                            var icone = (response.list[4].weather[0].icon)

                    var imgElem2 = $("<img>")
                    imgElem2.attr("src", `http://openweathermap.org/img/wn/${icone}.png`)

                    $(".icon2").append(imgElem2)

                        })


                    var queryURL2 = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=298a4f435bb40084f3affdac067f0650&lat=${lat}&lon=${long}`

                    $.ajax({
                        url: queryURL2,
                        method: "GET"
                    })

                        .then(function (response) {
                            console.log(response)
                            $(".temperature-degree3").text(response.list[11].main.temp + " F")
                            $(".temperature-degree3").append("<br>").append(response.list[11].weather[0].main)
                            $(".temperature-degree3").append("<br>").append(response.list[11].wind.speed + " Wind speed")
                           

                            var icony = (response.list[11].weather[0].icon)

                    var imgElem3 = $("<img>")
                    imgElem3.attr("src", `http://openweathermap.org/img/wn/${icony}.png`)

                    $(".icon3").append(imgElem3)

                        })


                    var queryURL2 = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=298a4f435bb40084f3affdac067f0650&lat=${lat}&lon=${long}`

                    $.ajax({
                        url: queryURL2,
                        method: "GET"
                    })

                        .then(function (response) {
                            console.log(response)
                            $(".temperature-degree4").text(response.list[11].main.temp + " F")
                            $(".temperature-degree4").append("<br>").append(response.list[19].weather[0].main)
                            $(".temperature-degree4").append("<br>").append(response.list[19].wind.speed + " Wind speed")


                            var iconx = (response.list[19].weather[0].icon)

                    var imgElem4 = $("<img>")
                    imgElem4.attr("src", `http://openweathermap.org/img/wn/${iconx}.png`)

                    $(".icon4").append(imgElem4)

                        })




                    var queryURL2 = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=298a4f435bb40084f3affdac067f0650&lat=${lat}&lon=${long}`

                    $.ajax({
                        url: queryURL2,
                        method: "GET"
                    })

                        .then(function (response) {
                            console.log(response)
                            $(".temperature-degree5").text(response.list[11].main.temp + " F")
                            $(".temperature-degree5").append("<br>").append(response.list[27].weather[0].main)
                            $(".temperature-degree5").append("<br>").append(response.list[27].wind.speed + " Wind speed")



                            var iconk = (response.list[19].weather[0].icon)

                    var imgElem5 = $("<img>")
                    imgElem5.attr("src", `http://openweathermap.org/img/wn/${iconk}.png`)

                    $(".icon5").append(imgElem5)



                        })


                })








        });




    }


});

