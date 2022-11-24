$('.card').click(function(){

    // set date header for card
    let id = $(this).attr("id")
    let content = cardContent[id-1]
    if (id == 1 || id == 21) {
        date = id + "st December"
    } else if (id == 2 || id == 22){
        date = id + "nd December"
    } else if (id == 3 || id == 23){
        date = id + "rd December"
    } else {
        date = id + "th December"
    }

    $("#kalender-date").text(date)

    // set card text content
    if (!content) {
        let i = Math.floor(Math.random() * 2.5)
        let content = cheatContent[i]
        $("#modal-text").addClass("cheat-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("cheat-text").addClass("secret-code")
        $("#modal-text2").show().text("Super Secret Code: " + content[1])
        $("#modal-img").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "For your advent calender this year, every day you get a secret code. Put them all together and on Christmas day you'll get a secret message",
        "Ly48ce",
        "assets/img/a1.jpeg"
    ],
    [
        "Who delivers presents to baby sharks at Christmas? Santa Jaws!",
        "Jfcuu",
        "assets/img/a2.jpeg"
    ],
    [
        "What do Santa’s little helpers learn at school? The elf-abet!",
        "vxUMQ",
        "assets/img/a25.jpeg"
    ],
    [
        "What was Santa's best subject in school? Chemistree",
        "XTY4j",
        "assets/img/a4.jpeg"
    ],
    [
        "Who hides in the bakery at Christmas? A mince spy!",
        "kjCoK",
        "assets/img/a5.jpeg"
    ],
    [
        "How did Mrs. Claus tell Santa the weather? 'It looks like rain, dear!'",
        "eItUl",
        "assets/img/a6.jpeg"
    ],
    [
        "What does Santa use to measure? Santameters!",
        "1X7a8",
        "assets/img/a7.jpeg"
    ],
    [
        "What's a ghost's favorite Christmas story? The Fright Before Christmas!",
        "BMO7B",
        "assets/img/a8.jpeg"
    ],
    [
        "What do you get if you cross Santa with a duck? A Christmas Quacker!",
        "7NzoJ",
        "assets/img/a9.jpeg"
    ],
    [
        "What do snowmen eat for breakfast? Ice Crispies.",
        "i1Ou+",
        "assets/img/a10.jpeg"
    ],
    [
        "Why is it always cold at Christmas? Because it is Decemberrrrrrr!",
        "dzmNN",
        "assets/img/a11.jpeg"
    ],
    [
        "What did one snowman say to the other snowman? Smells like carrots around here!",
        "ohNzV",
        "assets/img/a12.webp"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "aAIal",
        "assets/img/a13.jpeg"
    ],
    [
        "What do elves do after school? Their gnome work!",
        "71NGj",
        "assets/img/a14.jpeg"
    ],
    [
        "What did the snowman say to the robin? I have snow idea!",
        "5cadu",
        "assets/img/a15.jpeg"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered!",
        "0Rtgk",
        "assets/img/a16.jpeg"
    ],
    [
        "How does Santa keep track of all the fireplaces he's visited? He keeps a logbook.",
        "/mvxs",
        "assets/img/a17.jpeg"
    ],
     [
        "Who delivers presents to cats? Santa Paws!",
        "KcKu5",
        "assets/img/a18.jpeg"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "+Sefv",
        "assets/img/a19.jpeg"
    ],
     [
        "What is white and minty? A polo bear!",
        "kApsZ",
        "assets/img/a20.jpeg"
    ],
    [
        "What’s green, covered in tinsel and goes ribbet ribbet? A mistle-toad!",
        "HTsvd",
        "assets/img/a21.jpeg"
    ],
    [
        "How did Scrooge win the football game? The ghost of Christmas passed!",
        "UujuL",
        "assets/img/a22.jpeg"
    ],
    [
        "What’s the absolute best Christmas present? A broken drum — you can’t beat it!",
        "NG1lO",
        "assets/img/a23.jpeg"
    ],
     [
        "What type of cars do elves drive? Toy-otas!",
        "LsWC3",
        "assets/img/d17.jpg"
    ],
    [   
        "The encryption is 128-bit AES and your secret password is rudoplh 🦌 Go decrypt your secret message!",
        "mD8yR",
        "assets/img/a3.jpeg"
    ]
]

cheatContent = [
    [
        "Santa says it isn't this day yet!",
        "assets/img/cheat1.jpg"
    ],
    [
        "Stop trying to sneak a look at days in the future!",
        "assets/img/cheat2.jpg"
    ],
    [
        "It still isn't this day yet!",
        "assets/img/cheat3.jpg"
    ]
]