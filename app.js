"use strict";
$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = 
            async function myweather() {
                let responce = await fetch(url)
                let textbox = await responce.json()
                $("#city").html(textbox.name)
                $("#temperature").html(textbox.main.temperature)
                $("#feels").html(textbox.main.feels_like)
                $("#myWeather").val("")
                console.log(textbox)
            }
            myweather()
        }
    })

    $("#btn").click(function (e) {
        e.preventDefault()
        let url = 
        async function myweather() {
            let responce = await fetch(url)
            let textbox = await responce.json()
            $("#city").html(textbox.name)
            $("#temperature").html(textbox.main.temperature)
            $("#feels").html(textbox.main.feels_like)
            $("#myWeather").val("")
            console.log(data)
        }
        myweather()
    })


});