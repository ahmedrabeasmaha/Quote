var quotes = [
    {
        author: "Oscar Wilde",
        quote: "تاخدو كام وتبطلو كلام",
    },
    {
        author: "Marcus Tullius Cicero",
        quote: "خليك ديب ،بلاش تخيب",
    },
    {
        author: "Mae West",
        quote: "الوقت الي احنا فيه صعب الجدع تلاقيه",
    },
    {
        author: "Mahatma Gandhi",
        quote: "سيبونا في حالنا عشان العين جابت اجلنا",
    },
    {
        author: "Steve Martin",
        quote: "اتنين مالهمش امان الفرامل ،النسوان",
    },
    {
        author: "Allen Saunders",
        quote: "الحب خساره في الناس الغداره",
    },
    {
        author: "Lao Tzu",
        quote: "الحلوه من اليابان وصاحبها راجل غلبان",
    },
    {
        author: "Friedrich Nietzsche",
        quote: "اخره الشقاوه عيش وحلاوه",
    },
];
var oldQuoteNum = -1;
function checkDuplicate() {
    var randomQuoteNum;
    do {
        randomQuoteNum = Number.parseInt(Math.random() * quotes.length);
    } while (oldQuoteNum == randomQuoteNum);
    oldQuoteNum = randomQuoteNum;
    return randomQuoteNum;
}

function generateQuote() {
    var qouteNum = checkDuplicate();
    document.getElementById("quote").innerHTML = `"${quotes[qouteNum].quote}"`;
    document.getElementById(
        "quoteAuthor"
    ).innerHTML = `--${quotes[qouteNum].author}`;
}
