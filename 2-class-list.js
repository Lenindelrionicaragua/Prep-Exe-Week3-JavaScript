import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
   const classInfo = classes.find(cls => cls.name === className);

   if (!classInfo) {
    return "The specified class does not exist.";
   }

   const peopleInClass = [];

   const studentsInClass = students.filter(student => student.class === className);
   peopleInClass.push(...studentsInClass.map(student => ({name: student.name, role: 'student'})));

   if (classInfo.currentModule) {
    const mentorsTeachingModule = mentors.filter(mentor => mentor.nowTeaching === classInfo.currentModule);
    peopleInClass.push(...mentorsTeachingModule.map(mentor => ({ name: mentor.name, role: 'mentor'})));
   }

   return peopleInClass;
};

 console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
    const activeClasses = classes.filter(cls => cls.active);
    const peopleInActiveClasses = {};

    activeClasses.forEach(cls => {
        const className = cls.name;
        const peopleInClass = getPeopleOfClass(className);
        peopleInActiveClasses[className] = peopleInClass;
    });

    return peopleInActiveClasses;
};

 console.log(getActiveClasses());