
// REVIEWS

const reviews = [{
        id: 1,
        name: "KAREL HASEK",
        job: "direct manager",
        text: "I had the pleasure to work with Sarka for almost 2 years. Not only she has excellent people skills and is able to work seamlessly with many different roles both internally and externally, her technical knowledge is also of the highest level. She’s extremely fast learner, quickly grasps and further develops any processes or workflows we worked with. Sarka has very deep knowledge of web standards, technologies and great understanding of topics such as SEO, Accessibility and Web Analytics. I can wholeheartedly recommend Sarka, as she will be and excellent addition to any team."
    },
    {
        id: 2,
        name: "CRISTINA IORDAN",
        job: "direct manager",
        text: "A pleasure to recommend Sarka as a very bright and motivated person that she is. A quick learner, which has shown the ability to work on multiple projects, prioritizing the marketing requests in line with business priorities. Sarka is remarkable through high quality output delivery, on time, in budget and within scope."
    },
    {
        id: 3,
        name: "IRINA VERLAN",
        job: "colleague",
        text: "Sarka is the most professional and efficient at work, as well as well-presented and self-motivated, and she can work both independently and as part of a team. I recommend her because of her attention to detail and teamwork spirit. Sarka has proven to be a trustworthy and productive team member. I'm confident she'll be an excellent addition to any team she joins."
    },
    {
        id: 4,
        name: "JURAJ KOVAC",
        job: "mentor",
        text: "She has always demonstrated resourcefulness that helped her master a field in which she hadn't had prior formal training. She's a capable coder with an eye for style and clean uncluttered design. While her skill set favours design over programming, she's a practical learner—with a meaningful project to work on and some guidance, she will quickly fill in the gaps. If you are looking for open-minded talent and are willing to offer some support to a capable learner, I am sure she will be a valuable contribution to any creative project."
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

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// SHOW PREV PERSON

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});