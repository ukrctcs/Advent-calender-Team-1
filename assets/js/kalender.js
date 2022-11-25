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
        "J XJTI",
        "assets/img/a1.jpeg"
    ],
    [
        "I get chopped down, decorated all over, and I have wings on top. What am I? A Christmas Tree",
        "ZPV B KPZGVM",
        "assets/img/a2.jpeg"
    ],
    [
        "When does Christmas come before Thanksgiving? In the dictionary",
        "DISJTUNBT",
        "assets/img/a25.jpeg"
    ],
    [
        "What was Santa's best subject in school? Chemistree", 
        "TFBTPO GVM",
        "assets/img/a4.jpeg"
    ],
    [
        "Who hides in the bakery at Christmas? A mince spy",
        "PG MBVHIUFS",
        "assets/img/a5.jpeg"
    ],
    [
        "Who is always full and never hungry on Christmas? A stuffed turkey",
        "BOE",
        "assets/img/a6.jpeg"
    ],
    [
        "He is a man during the winter, but you might drink him during the summer. Who is he? A snowman",
        "OFX",
        "assets/img/a7.jpeg"
    ],
    [
        "I'm grumpy and green and I stole all the presents in one night. Who am I? The Grinch",
        "NFNPSJFT",
        "assets/img/a8.jpeg"
    ],
    [
        "What do you call it after all the Christmas gifts have been opened? Christmess",
        "XJUI",
        "assets/img/a9.jpeg"
    ],
    [
        "Why do mummies love Christmas? Because of all the wrapping",
        "UIPTF",
        "assets/img/a10.jpeg"
    ],
    [
        "Which one of Santa's reindeer can you see from outer space? Comet",
        "ZPV",
        "assets/img/a11.jpeg"
    ],
    [
        " Why does the alphabet get shorter at Christmas time? Because it has no L (NOEL)",
        "MPWF",
        "assets/img/a12.webp"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "BT ZPV",
        "assets/img/a13.jpeg"
    ],
    [
        "You buy me to eat, but you will never eat me, not even on Christmas. What am I? Cutlery",
        "EFDPSBUF",
        "assets/img/a14.jpeg"
    ],
    [
        "What do you call a broke Santa? Saint Nickel-less",
        "UIF USFF",
        "assets/img/a15.jpeg"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered",
        "BOE",
        "assets/img/a16.jpeg"
    ],
    [
        "What kind of ball doesn’t bounce? A snowball",
        "FOKPZ",
        "assets/img/a17.jpeg"
    ],
     [
        "What do you call a snowman in July? A puddle",
        "ZPVS",
        "assets/img/a18.jpeg"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "GBWPVSJUF",
        "assets/img/a19.jpeg"
    ],
     [
        "You have no idea what I am, yet you wait for me every year. I rattle when you shake me, but you still don't know what's inside. What am I? A present",
        "IPMJEBZ",
        "assets/img/a20.jpeg"
    ],
    [
        "What do Santa's beard and a Christmas tree have in common? They both need trimming",
        "GPPET",
        "assets/img/a21.jpeg"
    ],
    [
        "What is something that travels around the globe like Santa Claus, yet never leaves its corner? A stamp",
        "CFTU",
        "assets/img/a22.jpeg"
    ],
    [
        "You can catch me easily, especially during the holidays, but you can never throw me. What am I? A cold",
        "XJTIFT",
        "assets/img/a23.jpeg"
    ],
     [
        "I drop from the sky and I'm much colder than rain. What am I? Snow",
        "GPS DISJTUNBT",
        "assets/img/d17.jpg"
    ],
    [   
        "A little smile, a word of cheer, A bit of love from someone near, A little gift from one held dear, Best wishes for the coming year… These make a Merry Christmas!",
        "I wish you a joyful Christmas season full of laughter and new memories with those you love as you decorate the tree and enjoy your favourite holiday foods. Best wishes for Christmas.",
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