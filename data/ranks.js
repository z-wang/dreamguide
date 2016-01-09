/**
 * Created by zihanwang on 1/8/16.
 */
var ranks = {
    finance : {
        schools:
            [ 'University at Buffalo',
                'The University of Texas at Dallas',
                'DePaul University',
                'Clark University',
                'Bentley University',
                'Stony Brook University',
                'American University',
                'University of Delaware',
                'University of Connecticut',
                'The University of Maryland',
                'Rutgers University',
                'University of Pittsburgh',
                'Tulane University',
                'University of Florida',
                'Boston University',
                'Northeastern University',
                'Johns Hopkins University',
                'University of Southern California (Marshall)',
                'Fordham University',
                'Ohio State University (Fisher)',
                'Case Western Reserve University',
                'Lehigh University',
                'George Washington University',
                'University of Rochester (Simon)',
                'University of Illinois Urbana-Champaign',
                'Syracuse University',
                'University of Texas Austin (McCombs)',
                'Purdue University',
                'Boston College',
                'Brandeis University',
                'University of California-Los Angeles',
                'Vanderbilt University',
                'Georgia Institute of Technology',
                'Washington University in St. Louis (Olin)',
                'Columbia University',
                'Cornell University',
                'Carnegie Mellon University',
                'New York University',
                'University of California-Berkeley',
                'Massachusetts Institute of Technology (Sloan)' ],
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
            0.22,
            0.22,
            0.21,
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
    ranks : function(major){
        return ranks[major];
    }
};