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
            position: 'top',
            labels: {
                // This more specific font property overrides the global property
                fontFamily:'Ubuntu',
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
        position: 'right',
        align: 'start',

        labels: {
            // This more specific font property overrides the global property
            fontFamily:'Ubuntu',
            boxWidth: 12

        }
    }}

});



  