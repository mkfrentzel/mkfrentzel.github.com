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

    var summary = document.getElementById('changeText');

    
//date one

    box1.addEventListener("mouseover", function() {
        summary.innerHTML="News - real or fake - has always existed. However, with the development of Gutenberg's printing press in the 15th Century, the virality of news increased significantly for better or worse. While some standardization was introduced in this time, the ability to print subjective news and biased opinions led to the harsh discrimination of certain minority groups - a pattern carried on into the future of all news reporting and that stands to this day.";

    } );

    

//date two

    box2.addEventListener("mouseover", function() {
        summary.innerHTML="In the late 16th and early 17th Centuries, fake news had already become such a problem people relied on government leaked reports only... soon those became falsified as well. At this point Galileo's trial created a push for scientifically verifiable news and an increase in academic research to be preserved and verified by historians for the public.";
    } );

    

//date three

    box3.addEventListener("mouseover", function() {
        summary.innerHTML="In the 1800's, yellow journalism and the spread of fake news was growing rapidly. Outlandish headlines sold copies, and that's what publications cared about at that time. In an attempt to provide the public with authentic news, Adolph Ochs purchased The New York Times. His goal was to show that news could be real and still make a profit.";
    } );



//date four

    box4.addEventListener("mouseover", function() {
        summary.innerHTML="Propoganda was stronger than ever during this period and reporters were being accused of delivering skewed information to the public. The result was a push for reporters to do simply that - report their objective observations and check any biases at the door. The call was for facts to remain facts and for the public to be allowed to form their own opinion with the resources given to them... but did this really happen?";
    } );

  
//date five

    box5.addEventListener("mouseover", function() {
        summary.innerHTML="The digitalization of news has come out full swing and News Publications are feeling the pressure to keep profits up - meaning more advertisements and endorsements. The 2016 Election was a prime example of an overabundance of fake news that clouded the market with information and made it difficult for readers to distinguish between real and fake news. From bots and algorithms to biased advertisements, digitalization is changing the way we get news.";

    } );

    
    

    summary.style.transition = "all 2s";


  