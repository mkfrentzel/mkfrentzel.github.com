/* scroll script */

AOS.init();

var ctx = document.getElementById('myBarChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Facebook', 'YouTube', 'Twitter', 'Instagram', 'LinkedIn', 'Reddit', 'Snapchat'],

        datasets: [{
            label: '% of Americans who get news on the site',
            backgroundColor: ['#5581ff', '#5581ff', '#5581ff', '#5581ff', '#5581ff','#5581ff', '#5581ff'],
            borderColor: ['#5581ff', '#5581ff', '#5581ff', '#5581ff', '#5581ff','#5581ff', '#5581ff'],
            data: [52,28,17,14,8,8,6]
        }, {
            label: '% of Americans who use the site',
            backgroundColor: [],
            borderColor: [],
            data: [71,74,23,38,27,13,23]

        }]
    },
    

    // Configuration options go here
    options: {
    
        legend: {
            position: 'left',
            labels: {
                // This more specific font property overrides the global property
                fontFamily:'Roboto Condensed',
                boxWidth:12
            }
        }}
    
    });


var ctx = document.getElementById('myDonutChart').getContext('2d');
var donutChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    data: {
        labels: ['Very Conservative', 'Conservative', 'Moderate', 'Liberal', 'Very Liberal'],

        datasets: [{
            label: 'News Featured on Social Media',
            backgroundColor: ['#c92727', '#df7d7d', '#dddddd', '#99b3ff', '#5581ff'],
            borderColor: ['#c92727', '#df7d7d', '#dddddd', '#99b3ff', '#5581ff'],
            data: [4,11,36,32,16]


        }]
    },

    // Configuration options go here
    options: {
    
    legend: {
        position: 'left',
        align: 'start',

        labels: {
            // This more specific font property overrides the global property
            fontFamily:'Roboto Condensed',
            boxWidth: 12

        }
    }}

});

// Timeline Hover Effects

    var box1 = document.getElementById('timeline1');
    var box2 = document.getElementById('timeline2');
    var box3 = document.getElementById('timeline3');
    var box4 = document.getElementById('timeline4');
    var box5 = document.getElementById('timeline5');

    var fact1 = document.getElementById('1439');
    var fact2 = document.getElementById('1610');
    var fact3 = document.getElementById('1890');
    var fact4 = document.getElementById('1960');
    var fact5 = document.getElementById('2016');

    
//date one

    box1.addEventListener("mouseover", function() {
        fact1.id="fadein";
    } );

    box1.addEventListener("mouseout", function() {
        fact1.id="fadout";
    } );

//date two

    box2.addEventListener("mouseover", function() {
        fact2.id="fadein";
    } );

    box2.addEventListener("mouseout", function() {
        fact2.id="fadeout";
    } );

//date three

    box3.addEventListener("mouseover", function() {
        fact3.id="fadein";
    } );

    box3.addEventListener("mouseout", function() {
        fact3.id="fadeout";
    } );

//date four

    box4.addEventListener("mouseover", function() {
        fact4.id="fadein";
    } );

    box4.addEventListener("mouseout", function() {
        fact4.id="fadeout";
    } );

//date four

    box5.addEventListener("mouseover", function() {
        fact5.id="fadein";
    } );

    box5.addEventListener("mouseout", function() {
        fact5.id="fadeout";
    } );
    


  