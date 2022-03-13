const reviews = [
    {
        id: 1,
        name: "KAREL HASEK",
        job: "former direct manager",
        text: "Sarka has excellent people skills and is able to work seamlessly with many different roles both internally and externally, her technical knowledge is also of the highest level. She’s extremely fast learner. Sarka has very deep knowledge of web standards, technologies and great understanding of topics such as SEO, Accessibility and Web Analytics. I can wholeheartedly recommend Sarka."
    },
    {
        id: 2,
        name: "CRISTINA IORDAN",
        job: "direct manager",
        text: "A pleasure to recommend Sarka as a very bright and motivated person that she is. A quick learner, which has shown the ability to work on multiple projects, prioritizing the marketing requests in line with business priorities. Sarka is remarkable through high quality output delivery, on time, in budget and within scope."
    },
    {
        id: 3,
        name: "JURAJ KOVAC",
        job: "mentor",
        text: "If you are looking for open-minded talent and are willing to offer some support to a capable learner, I am sure Sarka will be a valuable contribution to any creative project."
    },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// SET STARTING ITEM

let currentItem = 0;

// LOAD INITIAL ITEM

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// SHOW PERSON BASED ON ITEM

function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// SHOW NEXT PERSON

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// SHOW PREV PERSON

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
