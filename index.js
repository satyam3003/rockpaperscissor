var name1 = prompt('player 1 name: ');
var name2 = prompt('player 2 name: ');
var stat1 = 0;
var stat2 = 0;
$('.play1').text(name1);
$('.play2').text(name2);

$('button').click(function () {
    list = ['paper', 'scissor', 'stone'];
    player1 = list[Math.floor(Math.random() * list.length)];
    player2 = list[Math.floor(Math.random() * list.length)];

    $('.img1').attr('src', "images/" + player1 + ".png");
    $('.img2').attr('src', "images/" + player2 + ".png");

    results(player1,player2);

})

function results(p1,p2){
    if(p1 === p2){
        $('.status').text('Its a draw');
        console.log('draw');
    }
    if(p1 === 'stone' && p2 === 'paper'){
        $('.status').text(name2 + ' won 🏆');
        stat2++;
        console.log('2 won');
    }
    if(p1 === 'stone' && p2 === 'scissor'){
        $('.status').text(name1 + ' won 🏆');
        stat1++;
        console.log('1 won');
    }
    if(p1 === 'paper' && p2 === 'scissor'){
        $('.status').text(name2 + ' won 🏆');
        stat2++;
        console.log('2 won');
    }
    if(p1 === 'paper' && p2 === 'stone'){
        $('.status').text(name1 + ' won 🏆');
        stat1++;
        console.log('1 won');
    }
    if(p1 === 'scissor' && p2 === 'stone'){
        $('.status').text(name2 + ' won 🏆');
        stat2++;
        console.log('2 won');
    }
    if(p1 === 'scissor' && p2 === 'paper'){
        $('.status').text(name1 + ' won 🏆');
        stat1++;
        console.log('1 won');
    }

    $('.p1Total').text(stat1);
    $('.p2Total').text(stat2);
}
