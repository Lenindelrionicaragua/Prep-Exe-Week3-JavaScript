import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
    const mentorsForModule = mentors.filter(mentor => mentor.canTeach.includes(moduleName));
    const mentorNames = mentorsForModule.map(mentor => mentor.name);

    return mentorNames;
};

console.log(possibleMentorsForModule('using-apis'));

const findMentorForModule = (moduleName) => {
    const mentorsForModule = mentors.filter(mentor => mentor.canTeach.includes(moduleName));

    if (mentorsForModule.length === 0) {
        return "Not mentor available for this module.";
    }

    const randomIndex = Math.floor(Math.random() * mentorsForModule.length);
    const randomMentor = mentorsForModule[randomIndex];

    return randomMentor.name;
};

 console.log(findMentorForModule('javascript'));