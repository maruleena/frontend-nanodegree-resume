 var bio = {

     "name": "Maruschka Germain",
     "role": "Front-End Web Developer/IT Professional",
     "contacts": {
         "mobile": "(305)555-5555",
         "email": "maruschka@gmail.com",
         "github": "maruleena",
         "twiter": "@marvanger25",
         "location": "Miami, FL, US"
     },
     "bioPic": "images/myPic1.png",
     "welcomeMessage": "Do or do not there is no try. -Yoda",
     "skills": ["C#", "HTML", "CSS", "JavaScript", "Python", "Network Troubleshooting"]
     


 }


var work = {
    "jobs": [
        {
        "employer": "Miami Dade College",
        "title": "Idea Center Intern",
        "dates": "2017",
        "location": "Miami, FL, US",
        "description": "Worked part time troubleshooting computer issues and inputing data into Google spreadsheets"
    },

    {
        "employer": "YMCA of Greater Miami",
        "title": "After School Counselor",
        "dates": "2015",
        "location": "Doral, FL, US",
        "description": "Supervised up to 20 children, ages 5-7 years old at a time ;Communicated with parents on a daily basis regarding the behavior of their children"
    }
    ]
}


var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "2017",
        "description": "Given a mockup of a website from a designer, I translated the site to a real responsive website using my HTML and CSS skills",
        "images": ["images/portfolioProject.png"]
        
    },

    {
        "title": "Animal Trading Cards",
        "dates": "2017",
        "description": "This is a web-based trading card game depicting one of my favorite animals",
        "images": ["images/animalTradingCard.png"]

    }



]

}


 var education = {
     "schools": [{
         "name": "Miami Dade College",
         "city": "Miami, FL, US",
         "degree": "AS",
         "majors": ["Computer Science"],
         "dates": "present"
     }
     ],


     "onlineCourses": [{
         "title": "Front-End Nanodegree",
         "school": "Udacity",
         "dates": "2017-2018",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

     },
    ]
}

function displayBio(){

    //Replace %data% with job title
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    // Replace %data% with full name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // Add welcome message
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    //Add picture
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    //Replace %data% with top contact information
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twiter)
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
    $("#topContacts").append(formattedLocation);

    

    //Add skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        
    }


    //Replace %data% with footer contact information
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twiter)
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
    $("#footerContacts").append(formattedLocation);


}

displayBio();


function displayWork(){
    for (job in work.jobs){

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace( "%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);


        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);


        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);


        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedDescription);

    }

}

displayWork();


function displayProjects() {
    for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);
    

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);
            
            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);  
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }

}

displayProjects();



function displayEducation(){
    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace( "%data%", education.schools[edu].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        
        var formattedDegreeName = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry").append(formattedDegreeName);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry").append(formattedSchoolDates);


        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
        $(".education-entry").append(formattedSchoolLocation);


        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry").append(formattedSchoolMajor);

        //var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.schools[edu]);
        //$(".education-entry:last").append(formattedOnlineClasses);

    }; 
        var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.schools[edu].title);
        $(".education-entry").append(formattedOnlineClasses);

   // $("#education").append(HTMLonlineClasses);

    for (courses in education.onlineCourses){
        

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
       
        var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry").append(formattedOnlineSchoolTitle);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
        $(".education-entry").append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry").append(formattedOnlineUrl);



    }



}

displayEducation();










function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUppercase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);

