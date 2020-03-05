/* scroll script */

AOS.init();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Sample Data',
            backgroundColor: 'slategray',
            borderColor: 'slategray',
            data: [3, 10, 5, 5]
        }]
    },

    // Configuration options go here
    options: {}
});



  