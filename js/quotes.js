
const quotes = [
    {
        quote  : "Programming is the art of algorithm design and the craft of debugging errant code",
        author : "Ellen Ullman",
    },
    {
        quote : "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning",
        author : "Rick Cook",
    },
    {
        quote : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author : "Martin Fowler",
    },
    {
        quote : "Experience is the name everyone gives to their mistakes.",
        author : "Oscar Wilde",
    },
    {
        quote : "Programming is the art of telling another human being what one wants the computer to do",
        author : "Donald Ervin Knuth",
    },
    {
        quote : "Confusion is part of programming.",
        author : "Felienne Hermans",
    },
    {
        quote : "No matter which field of work you want to go in, it is of great importance to learn at least one programming language",
        author : "Ram Ray",
    },
    {
        quote : "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12",
        author : "Elon Musk",
    },
    {
        quote : "Clean code always looks like it was written by someone who cares",
        author : "Robert C. Martin",
    },
]


function writeQuote(){
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const rand = Math.floor(Math.random()*quotes.length);
    
    quote.innerHTML = quotes[rand].quote;
    author.innerHTML = quotes[rand].author;
}

writeQuote();