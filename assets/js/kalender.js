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
        "I get chopped down, decorated all over, and I have wings on top. What am I? A Christmas Tree",
        "Jfcuu",
        "assets/img/a2.jpeg"
    ],
    [
        "When does Christmas come before Thanksgiving? In the dictionary",
        "vxUMQ",
        "assets/img/a25.jpeg"
    ],
    [
        "What was Santa's best subject in school? Chemistree", 
        "XTY4j",
        "assets/img/a4.jpeg"
    ],
    [
        "Who hides in the bakery at Christmas? A mince spy",
        "kjCoK",
        "assets/img/a5.jpeg"
    ],
    [
        "Who is always full and never hungry on Christmas? A stuffed turkey",
        "eItUl",
        "assets/img/a6.jpeg"
    ],
    [
        "He is a man during the winter, but you might drink him during the summer. Who is he? A snowman",
        "1X7a8",
        "assets/img/a7.jpeg"
    ],
    [
        "I'm grumpy and green and I stole all the presents in one night. Who am I? The Grinch",
        "BMO7B",
        "assets/img/a8.jpeg"
    ],
    [
        "What do you call it after all the Christmas gifts have been opened? Christmess",
        "7NzoJ",
        "assets/img/a9.jpeg"
    ],
    [
        "Why do mummies love Christmas? Because of all the wrapping",
        "i1Ou+",
        "assets/img/a10.jpeg"
    ],
    [
        "Which one of Santa's reindeer can you see from outer space? Comet",
        "dzmNN",
        "assets/img/a11.jpeg"
    ],
    [
        " Why does the alphabet get shorter at Christmas time? Because it has no L (NOEL)",
        "ohNzV",
        "assets/img/a12.webp"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "aAIal",
        "assets/img/a13.jpeg"
    ],
    [
        "You buy me to eat, but you will never eat me, not even on Christmas. What am I? Cutlery",
        "71NGj",
        "assets/img/a14.jpeg"
    ],
    [
        "What do you call a broke Santa? Saint Nickel-less",
        "5cadu",
        "assets/img/a15.jpeg"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered",
        "0Rtgk",
        "assets/img/a16.jpeg"
    ],
    [
        "What kind of ball doesn’t bounce? A snowball",
        "/mvxs",
        "assets/img/a17.jpeg"
    ],
     [
        "What do you call a snowman in July? A puddle",
        "KcKu5",
        "assets/img/a18.jpeg"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "+Sefv",
        "assets/img/a19.jpeg"
    ],
     [
        "You have no idea what I am, yet you wait for me every year. I rattle when you shake me, but you still don't know what's inside. What am I? A present",
        "kApsZ",
        "assets/img/a20.jpeg"
    ],
    [
        "What do Santa's beard and a Christmas tree have in common? They both need trimming",
        "HTsvd",
        "assets/img/a21.jpeg"
    ],
    [
        "What is something that travels around the globe like Santa Claus, yet never leaves its corner? A stamp",
        "UujuL",
        "assets/img/a22.jpeg"
    ],
    [
        "You can catch me easily, especially during the holidays, but you can never throw me. What am I? A cold",
        "NG1lO",
        "assets/img/a23.jpeg"
    ],
     [
        "I drop from the sky and I'm much more beautiful than rain. What am I? Snow",
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