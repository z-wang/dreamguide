/**
 * Created by zihanwang on 12/5/15.
 */
/**
 * Created by zihanwang on 10/31/15.
 */
/**
 * Created by zihanwang on 10/25/15.
 */
define(['app'], function(app)
{
    app.factory("constantService",
        ["$http","$q", "$log",
            function($http, $q, $log){
                var fields = ["Architecture",  "Design", "Landscape Architecture", "Urban & Regional Planning", "Teaching",
                    "Counseling", "Social Work", "Library/Info Services", "Internships & Short-Term Work", "Volunteering", "Translation & Interpretation", "Tourism", "Business",
                    "Research", "Arts", "Broadcasting", "Fashion", "Films", "Museums", "Performing Arts","Advertising", "Journalism",
                    "Aerospace", "Civil/Environ", "EE", "CS/IT", "IEOR", "Mech", "MatSci", "Nuclear", "Statistics", "Law", "Public Advocacy",
                    "Accounting", "Consulting", "HR", "Insurance", "Real Estate", "Environmental Engineering",  "PR", "Finance", "Investment",
                    "Dentistry", "Optometry", "Pharmacy", "Veterinary Medicine", "Health Management", "Agriculture", "Bioinformatics & Biostatistics",
                    "Biotechnology", "Botany", "Forensic Science", "Genetics", "Marine Science", "Science Education", "Zoology"];
                var countries = ["Australia", "Canada", "China", "France", "Germany", "Greece", "Hong Kong", "Japan", "South Korea",
                    "Russia", "Singapore", "Taiwan", "United States", "United Kingdom", "Other" ];
                var degrees = ["Associate", "Associate of Arts", "Associate of Business", "Associate of Science", "Bachelor", "Bachelor of Business",
                    "Bachelor of Engineering", "Bachelor of Arts", "Bachelor of Science", "Master", "Master of Business", "MBA", "Master of Engineering",
                    "Master of Science", "Master of Arts", "PhD", "JD", "MD"];
                return {
                    fields : fields,
                    countries : countries,
                    degrees : degrees
                }
            }]);
});