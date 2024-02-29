const resumeData = {
    basics: {
      name: "Krishnaraj",
      email: "kishorekrish255@email.com",
      phone: "638-087-3193",
      location: {
        address: "No 33 Sri Ram Nagar 6th Cross Street Thiruninravur",
        postalCode: "602024",
        city: "Chennai",
        country: "India",
        region: "Tamil Nadu"
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "Krishnaraj Mohan",
          url: "https://www.linkedin.com/feed/"
        }
        // Add other profiles if needed
      ]
    },
    work: [
      {
        company: "Justech Precision Industry India Pvt Ltd",
        position: "Junior Engineer",
        website: "http://www.justech.com/index_en.aspx",
        startDate: "2023-07-24",
        endDate: "", // Left blank for current position or provide an end date
      }
    ],
    education: [
      {
        institution: "St. Peter's Institute of Higher Education and Research",
        area: "ECE",
        startDate: "2017-07-21",
        endDate: "2021-05-22", 
        courses: [
          "Course 1",
          "Course 2"
          
        ]
      }
      // Other educational experiences
    ],
    skills: [
      {
        name: "Programming Languages",
        keywords: ["JavaScript", "Python", "Java"]
      }
      
    ],
    languages: [
      {
        language: "English",
        fluency: "Fluent"
      },
      {
        language: "Tamil",
        fluency: "Fluent"
      }
      
    ]
  };
  

  console.log(JSON.stringify(resumeData, null, 2));

  