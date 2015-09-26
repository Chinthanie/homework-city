/*global document, $, console, alert */
(function () {
    'use strict';

    $(document).ready(function () {

        //1. User inputs city
        //1.1 IF input = New York OR New York City OR NYC
        //1.1.1 THEN change background image to nyc.jpg
        //1.2 ELSE IF input = San Francisco OR SF or Bay Area
        //1.2.1 THEN change background image to sf.jpg
        //1.3 ELSE IF input = Los Angeles OR LA OR LAX
        //1.3.1 THEN change background image to la.jpg
        //1.4 ELSE IF input = Austin OR ATX
        //1.4.1 THEN change background image to austin.jpg
        //1.5 ELSE IF input = Sydney OR SYD
        //1.5.1 THEN change background to sydney.jpg
        //1.6 ELSE IF input = anything else
        //1.6.1 THEN alert message

        function changeBackground() {

            var city = $('#city-type').val().toLowerCase();
            if ((city === 'new york') || (city === 'new york city') || (city === 'nyc')) {
                $('body').css('backgroundImage', 'url(../images/nyc.jpg)');


            } else if ((city === 'san francisco') || (city === 'sf') || (city === 'bay area')) {
                $('body').css('backgroundImage', 'url(../images/sf.jpg)');

            } else if ((city === 'los angeles') || (city === 'la') || (city === 'lax')) {
                $('body').css('backgroundImage', 'url(../images/la.jpg)');

            } else if ((city === 'austin') || (city === 'atx')) {
                $('body').css('backgroundImage', 'url(../images/austin.jpg)');

            } else if ((city === 'sydney') || (city === 'syd')) {
                $('body').css('backgroundImage', 'url(../images/sydney.jpg)');

            } else {
                alert('Oh no! We don\'t appear to have any photos of ' + city + '. Don\'t worry our photographers are on their way!');
            }

        }

        $('#submit-btn').click(function (e) {
            e.preventDefault();
        });

        $('#submit-btn').click(changeBackground);
        
        $('#submit-btn').click(function () {
            $('form')[0].reset();
        });
        
        









    });

}());