/**
 * Created by zihanwang on 1/8/16.
 */
var ranks = {
    //all schools and values are calculted by Huang Shan's Model, from easiest to hardest
    //can try to use the rank online(USNews, etc.), and compare results.
    finance : {
        schools:
            [ 'University at Buffalo',
                'University of Florida',
                'DePaul University',
                'Clark University',
                'Bentley University',
                'Stony Brook University',
                'University of Pittsburgh',
                'University of Delaware',
                'Stevens Institute of Technology',
                'Syracuse University',
                'George Washington University',
                'Rutgers University',
                'University of Illinois Urbana-Champaign',
                'Fordham University',
                'Tulane University',
                'Boston University',
                'Stanford University',
                'Northeastern University',
                'Johns Hopkins University',
                'University of Southern California',
                'Ohio State University (Fisher)',
                'Case Western Reserve University',
                'Lehigh University',
                'University of Rochester (Simon)',
                'University of Washington, Seattle',
                'University of California-Berkeley',
                'Georgia State University',
                'Purdue University',
                'Boston College',
                'University of Arizona',
                'University of California-Los Angeles',
                'University of Minnesota, Twin City',
                'New York University',
                "University of Pennsylvania",
                'University of Maryland',
                'The University of Texas, Dallas',
                'Georgia Institute of Technology',
                'University of Michigan, Ann Arbor',
                'Washington University in St. Louis (Olin)',
                'Columbia University',
                'Cornell University',
                'Carnegie Mellon University',
                'MIT' ],
        values :    [ 0.86,
            0.84,
            0.84,
            0.81,
            0.8,
            0.79,
            0.76,
            0.71,
            0.6,
            0.45,
            0.44,
            0.43,
            0.42,
            0.4,
            0.36,
            0.36,
            0.34,
            0.31,
            0.31,
            0.31,
            0.3,
            0.3,
            0.3,
            0.29,
            0.29,
            0.29,
            0.29,
            0.24,
            0.24,
            0.24,
            0.22,
            0.22,
            0.21,
            0.2,
            0.2,
            0.2,
            0.19,
            0.18,
            0.18,
            0.18,
            0.17,
            0.17,
            0.14 ]
    }
};

module.exports = {
    getRankbyMajor : function(major){
        return ranks[major];
    }
};