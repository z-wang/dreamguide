/**
 * Created by zihanwang on 1/7/16.
 */
var schools = {
    "University of Pittsburgh" : {
        data : [ [ 4, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 2, 2, 6, 6 ],
            [ 2, 4, 6, 6 ],
            [ 5, 3, 5, 4 ],
            [ 3, 3, 6, 3 ],
            [ 3, 5, 6, 6 ],
            [ 2, 3, 6, 6 ],
            [ 6, 5, 6, 4 ],
            [ 4, 5, 6, 6 ],
            [ 2, 5, 6, 4 ],
            [ 2, 6, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 1, 6, 6, 4 ],
            [ 6, 5, 6, 6 ],
            [ 5, 6, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 3, 6, 6 ],
            [ 3, 3, 6, 6 ],
            [ 6, 4, 6, 6 ],
            [ 2, 4, 6, 4 ],
            [ 5, 3, 6, 6 ],
            [ 6, 4, 6, 6 ],
            [ 3, 6, 6, 6 ],
            [ 2, 5, 6, 6 ] ],
        result : [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ]
    },
    "Boston College" : {
        data : [ [ 3, 2, 2, 4 ],
            [ 1, 5, 2, 6 ],
            [ 4, 3, 2, 3 ],
            [ 2, 5, 5, 6 ],
            [ 5, 5, 3, 6 ],
            [ 3, 3, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 2, 3, 3, 3 ],
            [ 2, 5, 2, 6 ],
            [ 6, 1, 5, 2 ],
            [ 1, 2, 2, 2 ],
            [ 3, 2, 2, 2 ],
            [ 3, 3, 1, 4 ],
            [ 3, 1, 2, 4 ],
            [ 2, 2, 5, 3 ],
            [ 3, 5, 5, 6 ],
            [ 1, 3, 1, 3 ],
            [ 4, 4, 3, 3 ],
            [ 2, 3, 6, 3 ],
            [ 3, 2, 3, 3 ],
            [ 2, 4, 3, 3 ],
            [ 6, 1, 2, 3 ],
            [ 4, 2, 1, 3 ],
            [ 6, 1, 2, 4 ],
            [ 2, 3, 4, 4 ],
            [ 1, 3, 1, 3 ],
            [ 4, 3, 2, 3 ],
            [ 1, 2, 1, 2 ],
            [ 4, 3, 2, 3 ] ],
        result : [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1 ]
    },
    "Case Western Reserve University" : {
        data : [ [ 4, 1, 4, 3 ],
            [ 1, 5, 5, 6 ],
            [ 3, 5, 5, 6 ],
            [ 2, 5, 2, 6 ],
            [ 2, 4, 2, 4 ],
            [ 4, 5, 3, 3 ],
            [ 3, 3, 3, 2 ],
            [ 2, 2, 2, 4 ],
            [ 1, 3, 2, 3 ],
            [ 5, 5, 3, 6 ],
            [ 4, 4, 5, 3 ],
            [ 3, 5, 2, 6 ],
            [ 2, 2, 2, 4 ],
            [ 2, 5, 6, 6 ],
            [ 1, 5, 2, 6 ],
            [ 1, 2, 1, 3 ],
            [ 5, 3, 2, 6 ],
            [ 6, 4, 6, 3 ],
            [ 3, 1, 2, 3 ],
            [ 5, 2, 3, 2 ],
            [ 6, 3, 5, 3 ],
            [ 2, 2, 2, 4 ],
            [ 4, 5, 1, 6 ],
            [ 2, 5, 2, 6 ],
            [ 1, 3, 5, 3 ],
            [ 1, 4, 3, 3 ],
            [ 5, 3, 4, 4 ],
            [ 1, 3, 2, 4 ],
            [ 4, 5, 3, 6 ] ],
        result : [ 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ]
    },
    "Clark University" : {
        data : [ [ 4, 5, 5, 6 ],
            [ 3, 3, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 5, 3, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 5, 3, 6, 4 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 4, 6, 4 ],
            [ 4, 5, 6, 6 ],
            [ 5, 6, 5, 6 ],
            [ 5, 6, 6, 4 ],
            [ 2, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 2, 3, 6, 4 ],
            [ 3, 3, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 2, 6, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 2, 5, 6, 6 ] ],
        result : [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ]
    },
    "University of Delaware" : {
        data : [ [ 2, 5, 5, 6 ],
            [ 5, 4, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 4, 3, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 2, 3, 6, 6 ],
            [ 3, 3, 6, 4 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 4 ],
            [ 6, 6, 6, 3 ],
            [ 5, 6, 6, 6 ],
            [ 4, 6, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 1, 6, 6, 4 ],
            [ 6, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 2, 4, 6, 6 ],
            [ 4, 4, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 6, 6, 4 ],
            [ 3, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 4, 4, 6, 6 ] ],
        result : [ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ]
    },
    "Fordham University" : {
        data : [ [ 1, 3, 2, 3 ],
            [ 5, 5, 5, 6 ],
            [ 3, 4, 5, 3 ],
            [ 2, 2, 2, 3 ],
            [ 1, 5, 2, 6 ],
            [ 6, 5, 2, 6 ],
            [ 4, 2, 3, 4 ],
            [ 3, 3, 5, 3 ],
            [ 2, 2, 2, 3 ],
            [ 1, 5, 2, 6 ],
            [ 3, 4, 5, 3 ],
            [ 4, 5, 2, 6 ],
            [ 1, 1, 3, 2 ],
            [ 3, 5, 2, 6 ],
            [ 3, 5, 4, 6 ],
            [ 5, 3, 3, 3 ],
            [ 4, 2, 2, 6 ],
            [ 2, 2, 3, 3 ],
            [ 1, 2, 3, 3 ],
            [ 2, 5, 2, 6 ],
            [ 4, 4, 4, 3 ],
            [ 3, 1, 3, 3 ],
            [ 1, 1, 2, 3 ],
            [ 4, 3, 2, 3 ],
            [ 2, 4, 2, 3 ],
            [ 5, 5, 2, 6 ],
            [ 6, 1, 2, 4 ],
            [ 3, 5, 3, 6 ],
            [ 1, 3, 2, 3 ] ],
        result : [ 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1 ]
    },
    "Lehigh University" : {
        data : [ [ 4, 4, 6, 3 ],
            [ 1, 3, 2, 3 ],
            [ 3, 5, 4, 6 ],
            [ 2, 3, 5, 2 ],
            [ 5, 4, 3, 3 ],
            [ 2, 3, 2, 3 ],
            [ 3, 4, 5, 4 ],
            [ 2, 4, 5, 2 ],
            [ 1, 2, 5, 3 ],
            [ 3, 3, 3, 4 ],
            [ 5, 3, 5, 3 ],
            [ 2, 2, 5, 2 ],
            [ 4, 3, 4, 4 ],
            [ 3, 3, 4, 3 ],
            [ 2, 2, 4, 3 ],
            [ 1, 3, 4, 3 ],
            [ 5, 5, 2, 6 ],
            [ 6, 3, 3, 4 ],
            [ 3, 5, 3, 6 ],
            [ 5, 5, 5, 6 ],
            [ 2, 1, 2, 3 ],
            [ 1, 2, 2, 6 ],
            [ 4, 3, 5, 3 ],
            [ 6, 5, 5, 6 ],
            [ 2, 5, 3, 6 ],
            [ 3, 1, 2, 3 ],
            [ 5, 2, 2, 3 ],
            [ 1, 3, 2, 3 ],
            [ 4, 3, 5, 4 ] ],
        result : [ 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0 ]
    },
    "Michigan State University" : {
        data : [ [ 4, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 3, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 3, 6, 6 ],
            [ 2, 5, 6, 4 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 4 ],
            [ 2, 6, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 5, 6, 4 ],
            [ 5, 6, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 5, 6, 6, 6 ],
            [ 2, 5, 6, 4 ],
            [ 4, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 5, 5, 6 ],
            [ 3, 6, 6, 6 ],
            [ 5, 6, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 4, 5, 6, 6 ] ],
        result : [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1 ]
    },
    "Northeastern University" : {
        data : [ [ 5, 2, 2, 3 ],
            [ 3, 2, 3, 3 ],
            [ 3, 2, 2, 2 ],
            [ 3, 2, 2, 3 ],
            [ 4, 2, 5, 3 ],
            [ 6, 5, 3, 3 ],
            [ 2, 3, 2, 3 ],
            [ 3, 3, 5, 2 ],
            [ 6, 3, 5, 2 ],
            [ 3, 4, 2, 3 ],
            [ 5, 5, 2, 2 ],
            [ 6, 3, 2, 3 ],
            [ 3, 5, 5, 6 ],
            [ 6, 2, 2, 3 ],
            [ 4, 3, 2, 3 ],
            [ 3, 5, 5, 6 ],
            [ 2, 5, 5, 6 ],
            [ 6, 3, 3, 4 ],
            [ 3, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 1, 3, 3, 4 ],
            [ 3, 5, 5, 6 ],
            [ 5, 5, 5, 6 ],
            [ 2, 2, 4, 4 ],
            [ 4, 5, 5, 6 ],
            [ 3, 4, 4, 3 ],
            [ 2, 4, 2, 3 ],
            [ 5, 3, 3, 3 ],
            [ 1, 2, 3, 3 ] ],
        result : [ 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1 ]
    },
    "The Ohio State University" : {
        data : [ [ 5, 2, 2, 2 ],
            [ 3, 3, 3, 4 ],
            [ 2, 3, 2, 2 ],
            [ 4, 2, 2, 3 ],
            [ 1, 2, 3, 2 ],
            [ 2, 2, 3, 2 ],
            [ 3, 3, 2, 3 ],
            [ 3, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 5, 3, 5, 4 ],
            [ 2, 3, 5, 3 ],
            [ 1, 2, 3, 2 ],
            [ 6, 5, 4, 6 ],
            [ 5, 3, 3, 4 ],
            [ 3, 3, 3, 3 ],
            [ 6, 2, 4, 2 ],
            [ 4, 2, 3, 2 ],
            [ 5, 5, 5, 6 ],
            [ 3, 2, 2, 2 ],
            [ 4, 3, 5, 2 ],
            [ 2, 1, 2, 3 ],
            [ 1, 2, 3, 3 ],
            [ 6, 2, 2, 3 ],
            [ 5, 5, 4, 6 ],
            [ 2, 2, 3, 4 ],
            [ 3, 2, 5, 2 ],
            [ 5, 3, 5, 3 ],
            [ 4, 3, 3, 3 ],
            [ 1, 2, 2, 3 ] ],
        result : [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1 ]
    },
    "Purdue University" : {
        data : [ [ 2, 3, 5, 3 ],
            [ 1, 2, 2, 4 ],
            [ 5, 5, 2, 6 ],
            [ 3, 1, 5, 3 ],
            [ 3, 4, 4, 3 ],
            [ 1, 1, 3, 3 ],
            [ 2, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 3, 2, 2, 2 ],
            [ 2, 2, 5, 3 ],
            [ 1, 2, 2, 1 ],
            [ 3, 1, 2, 3 ],
            [ 4, 5, 6, 6 ],
            [ 1, 3, 2, 3 ],
            [ 3, 3, 5, 3 ],
            [ 5, 5, 5, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 4, 3, 4 ],
            [ 2, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 4, 5, 2, 6 ],
            [ 5, 5, 5, 6 ],
            [ 4, 5, 3, 6 ],
            [ 3, 2, 5, 4 ],
            [ 1, 5, 5, 6 ],
            [ 2, 3, 2, 3 ],
            [ 4, 2, 5, 4 ],
            [ 3, 4, 5, 3 ],
            [ 3, 2, 4, 3 ] ],
        result : [ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ]
    },
    "Tulane University" : {
        data : [ [ 2, 5, 6, 6 ],
            [ 4, 4, 6, 6 ],
            [ 6, 3, 6, 6 ],
            [ 2, 5, 6, 4 ],
            [ 5, 4, 6, 3 ],
            [ 3, 5, 5, 6 ],
            [ 4, 4, 6, 4 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 5, 6, 4 ],
            [ 5, 5, 6, 6 ],
            [ 6, 4, 6, 6 ],
            [ 3, 5, 6, 4 ],
            [ 3, 5, 6, 6 ],
            [ 5, 6, 6, 6 ],
            [ 6, 4, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 5, 6, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 6, 6, 6 ],
            [ 6, 6, 6, 4 ],
            [ 2, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 4, 6, 2, 6 ],
            [ 4, 5, 6, 6 ] ],
        result : [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1 ]
    },
    //"University of Washington" : {
    //    data : [ [ 3, 2, 1, 2 ],
    //        [ 4, 2, 2, 3 ],
    //        [ 3, 3, 1, 3 ],
    //        [ 2, 1, 2, 3 ],
    //        [ 6, 4, 2, 3 ],
    //        [ 1, 2, 2, 2 ],
    //        [ 3, 2, 2, 3 ],
    //        [ 3, 3, 3, 4 ],
    //        [ 3, 2, 3, 3 ],
    //        [ 4, 3, 2, 3 ],
    //        [ 3, 5, 2, 6 ],
    //        [ 1, 5, 5, 6 ],
    //        [ 4, 4, 5, 4 ],
    //        [ 2, 2, 2, 3 ],
    //        [ 3, 3, 2, 3 ],
    //        [ 5, 4, 2, 3 ],
    //        [ 2, 3, 1, 4 ],
    //        [ 2, 2, 2, 3 ],
    //        [ 1, 5, 5, 6 ],
    //        [ 5, 3, 2, 3 ],
    //        [ 3, 3, 2, 3 ],
    //        [ 6, 3, 5, 3 ],
    //        [ 4, 3, 3, 3 ],
    //        [ 2, 2, 5, 3 ],
    //        [ 2, 3, 1, 2 ],
    //        [ 3, 3, 2, 2 ],
    //        [ 1, 2, 4, 3 ],
    //        [ 6, 2, 5, 2 ],
    //        [ 2, 2, 4, 3 ] ],
    //    result : [ 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1 ]
    //},
    "University of Illinois Urbana-Champaign" : {
        data : [ [ 6, 2, 2, 2 ],
            [ 4, 2, 3, 2 ],
            [ 3, 3, 2, 2 ],
            [ 2, 1, 2, 3 ],
            [ 6, 4, 5, 3 ],
            [ 1, 2, 3, 3 ],
            [ 3, 2, 2, 3 ],
            [ 3, 3, 5, 2 ],
            [ 5, 2, 5, 2 ],
            [ 2, 3, 2, 3 ],
            [ 3, 5, 2, 6 ],
            [ 1, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 2, 3, 2, 3 ],
            [ 3, 3, 2, 3 ],
            [ 5, 5, 5, 6 ],
            [ 6, 5, 5, 6 ],
            [ 2, 2, 3, 4 ],
            [ 1, 2, 2, 3 ],
            [ 5, 5, 5, 6 ],
            [ 3, 3, 3, 4 ],
            [ 6, 5, 5, 6 ],
            [ 4, 5, 5, 6 ],
            [ 2, 2, 4, 4 ],
            [ 5, 5, 5, 6 ],
            [ 3, 3, 4, 3 ],
            [ 1, 2, 2, 3 ],
            [ 6, 2, 3, 3 ],
            [ 2, 2, 3, 3 ] ],
        result : [ 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ]
    },
    "University of California, Davis" : {
        data : [ [ 2, 2, 3, 2 ],
            [ 3, 2, 5, 4 ],
            [ 2, 3, 2, 4 ],
            [ 1, 5, 5, 6 ],
            [ 3, 5, 5, 6 ],
            [ 4, 3, 5, 4 ],
            [ 3, 5, 4, 6 ],
            [ 2, 3, 2, 4 ],
            [ 1, 3, 2, 2 ],
            [ 3, 4, 5, 3 ],
            [ 4, 3, 2, 3 ],
            [ 5, 2, 2, 2 ],
            [ 5, 4, 5, 3 ],
            [ 3, 1, 3, 3 ],
            [ 5, 1, 5, 3 ],
            [ 1, 3, 5, 4 ],
            [ 2, 3, 4, 3 ],
            [ 4, 3, 4, 4 ],
            [ 2, 2, 5, 3 ],
            [ 1, 1, 3, 2 ],
            [ 4, 3, 5, 4 ],
            [ 5, 5, 5, 6 ],
            [ 1, 4, 2, 3 ],
            [ 3, 5, 4, 6 ],
            [ 2, 5, 4, 6 ],
            [ 3, 3, 3, 3 ],
            [ 4, 2, 3, 3 ],
            [ 2, 1, 4, 3 ],
            [ 3, 3, 5, 4 ] ],
        result : [ 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0 ]
    },
    "University of Florida" : {
        data : [ [ 6, 6, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 3, 3, 6, 4 ],
            [ 2, 3, 6, 3 ],
            [ 3, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 2, 3, 5, 6 ],
            [ 4, 4, 6, 6 ],
            [ 6, 3, 6, 4 ],
            [ 2, 5, 6, 6 ],
            [ 5, 4, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 6, 4, 6, 6 ],
            [ 2, 5, 6, 4 ],
            [ 3, 5, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 6, 6, 6 ],
            [ 6, 6, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 4, 4, 6, 4 ],
            [ 2, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 6, 6, 6 ],
            [ 3, 5, 6, 6 ] ],
        result : [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0 ]
    },
    "University of Rochester" : {
        data : [ [ 3, 2, 2, 2 ],
            [ 2, 3, 5, 3 ],
            [ 1, 2, 2, 2 ],
            [ 5, 2, 2, 3 ],
            [ 6, 3, 3, 4 ],
            [ 3, 2, 2, 4 ],
            [ 5, 2, 2, 3 ],
            [ 2, 3, 2, 3 ],
            [ 3, 4, 1, 3 ],
            [ 4, 2, 2, 3 ],
            [ 6, 3, 5, 3 ],
            [ 2, 1, 1, 2 ],
            [ 4, 2, 2, 3 ],
            [ 6, 3, 3, 3 ],
            [ 2, 3, 4, 2 ],
            [ 3, 3, 2, 3 ],
            [ 4, 3, 2, 2 ],
            [ 1, 5, 5, 2 ],
            [ 4, 3, 1, 4 ],
            [ 4, 2, 1, 4 ],
            [ 2, 5, 1, 6 ],
            [ 1, 5, 3, 6 ],
            [ 4, 1, 2, 3 ],
            [ 3, 2, 2, 4 ],
            [ 5, 3, 3, 3 ],
            [ 6, 3, 3, 2 ],
            [ 2, 2, 2, 3 ],
            [ 1, 3, 2, 3 ],
            [ 5, 5, 2, 6 ] ],
        result : [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 ]
    },
    "University of Texas, Austin" : {
        data : [ [ 4, 5, 6, 6 ],
            [ 1, 2, 1, 3 ],
            [ 3, 1, 1, 2 ],
            [ 2, 3, 1, 3 ],
            [ 5, 5, 3, 6 ],
            [ 1, 5, 6, 6 ],
            [ 3, 3, 3, 4 ],
            [ 2, 2, 2, 3 ],
            [ 1, 2, 2, 2 ],
            [ 3, 3, 3, 4 ],
            [ 5, 3, 3, 4 ],
            [ 2, 2, 2, 3 ],
            [ 4, 5, 5, 6 ],
            [ 3, 1, 2, 2 ],
            [ 2, 2, 2, 2 ],
            [ 1, 2, 1, 2 ],
            [ 5, 2, 2, 4 ],
            [ 6, 3, 3, 4 ],
            [ 3, 5, 2, 6 ],
            [ 5, 3, 3, 3 ],
            [ 2, 1, 2, 3 ],
            [ 1, 2, 2, 2 ],
            [ 4, 3, 3, 3 ],
            [ 2, 3, 3, 4 ],
            [ 2, 2, 2, 3 ],
            [ 3, 1, 1, 2 ],
            [ 5, 2, 2, 4 ],
            [ 1, 1, 2, 3 ],
            [ 4, 3, 3, 4 ] ],
        result : [ 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0 ]
    },
    "University of Southern California" : {
        data : [ [ 4, 5, 5, 6 ],
            [ 3, 5, 3, 6 ],
            [ 2, 2, 2, 3 ],
            [ 1, 2, 2, 3 ],
            [ 5, 1, 2, 4 ],
            [ 3, 5, 4, 6 ],
            [ 2, 2, 2, 3 ],
            [ 1, 2, 2, 3 ],
            [ 6, 5, 4, 6 ],
            [ 4, 2, 2, 2 ],
            [ 3, 2, 2, 3 ],
            [ 2, 1, 2, 2 ],
            [ 1, 1, 2, 3 ],
            [ 3, 5, 3, 6 ],
            [ 4, 3, 4, 4 ],
            [ 5, 2, 2, 3 ],
            [ 1, 2, 2, 3 ],
            [ 6, 2, 3, 3 ],
            [ 5, 3, 3, 3 ],
            [ 2, 1, 2, 2 ],
            [ 4, 5, 4, 6 ],
            [ 3, 1, 3, 3 ],
            [ 1, 2, 2, 3 ],
            [ 6, 3, 3, 3 ],
            [ 2, 2, 2, 3 ],
            [ 2, 2, 2, 3 ],
            [ 3, 1, 2, 3 ],
            [ 3, 5, 3, 6 ],
            [ 1, 1, 2, 3 ] ],
        result : [ 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1 ]
    },
    "Wake Forest University" : {
        data : [ [ 3, 3, 2, 2 ],
            [ 4, 2, 1, 2 ],
            [ 3, 3, 2, 2 ],
            [ 2, 2, 1, 3 ],
            [ 5, 3, 2, 3 ],
            [ 1, 2, 2, 3 ],
            [ 3, 2, 2, 3 ],
            [ 5, 3, 5, 2 ],
            [ 4, 2, 3, 2 ],
            [ 2, 3, 5, 3 ],
            [ 1, 2, 4, 3 ],
            [ 1, 3, 3, 3 ],
            [ 4, 5, 4, 6 ],
            [ 2, 2, 2, 3 ],
            [ 2, 3, 4, 3 ],
            [ 1, 5, 1, 6 ],
            [ 6, 5, 4, 6 ],
            [ 2, 1, 2, 4 ],
            [ 1, 3, 2, 3 ],
            [ 4, 5, 2, 6 ],
            [ 3, 3, 2, 4 ],
            [ 4, 5, 5, 6 ],
            [ 5, 5, 2, 6 ],
            [ 2, 2, 2, 3 ],
            [ 5, 5, 4, 6 ],
            [ 3, 4, 5, 3 ],
            [ 1, 1, 2, 3 ],
            [ 3, 2, 2, 3 ],
            [ 2, 3, 4, 3 ] ],
        result : [ 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1 ]
    },
    "University of Wisconsin, Madison" : {
        data : [ [ 3, 3, 2, 3 ],
            [ 3, 4, 1, 3 ],
            [ 2, 5, 2, 6 ],
            [ 1, 2, 1, 2 ],
            [ 3, 3, 2, 3 ],
            [ 5, 3, 2, 3 ],
            [ 2, 2, 2, 4 ],
            [ 4, 3, 5, 2 ],
            [ 3, 1, 3, 3 ],
            [ 2, 5, 5, 6 ],
            [ 1, 1, 4, 4 ],
            [ 1, 5, 3, 6 ],
            [ 2, 3, 4, 3 ],
            [ 3, 3, 2, 2 ],
            [ 5, 3, 4, 4 ],
            [ 4, 3, 1, 3 ],
            [ 1, 2, 4, 3 ],
            [ 3, 1, 2, 3 ],
            [ 6, 3, 2, 3 ],
            [ 2, 3, 2, 2 ],
            [ 4, 2, 2, 3 ],
            [ 1, 3, 5, 4 ],
            [ 1, 2, 2, 4 ],
            [ 2, 5, 2, 6 ],
            [ 4, 1, 4, 3 ],
            [ 3, 4, 5, 3 ],
            [ 2, 1, 2, 3 ],
            [ 3, 2, 2, 4 ],
            [ 2, 3, 5, 3 ] ],
        result : [ 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0 ]
    },
    "Washington University in St. Louis" : {
        data : [ [ 3, 2, 2, 3 ],
            [ 4, 5, 6, 6 ],
            [ 2, 2, 2, 3 ],
            [ 1, 1, 2, 3 ],
            [ 5, 4, 3, 3 ],
            [ 6, 5, 5, 6 ],
            [ 3, 3, 3, 3 ],
            [ 2, 2, 2, 3 ],
            [ 3, 1, 2, 3 ],
            [ 5, 5, 6, 6 ],
            [ 4, 3, 2, 3 ],
            [ 1, 2, 3, 3 ],
            [ 5, 3, 3, 3 ],
            [ 6, 5, 5, 6 ],
            [ 2, 3, 3, 3 ],
            [ 4, 3, 5, 4 ],
            [ 3, 2, 3, 3 ],
            [ 1, 2, 2, 3 ],
            [ 2, 2, 2, 3 ],
            [ 6, 5, 3, 6 ],
            [ 5, 5, 3, 6 ],
            [ 3, 1, 2, 2 ],
            [ 3, 1, 2, 3 ],
            [ 1, 2, 2, 2 ],
            [ 2, 1, 2, 2 ],
            [ 6, 2, 3, 4 ],
            [ 3, 3, 3, 3 ],
            [ 1, 2, 2, 3 ],
            [ 4, 3, 2, 3 ] ],
        result : [ 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0 ]
    },
    "Pace University" : {
        data : [ [ 5, 5, 5, 6 ],
            [ 3, 3, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 5, 3, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 5, 3, 6, 4 ],
            [ 6, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 2, 5, 6, 6 ],
            [ 3, 4, 6, 4 ],
            [ 4, 5, 6, 6 ],
            [ 5, 6, 5, 6 ],
            [ 5, 6, 6, 4 ],
            [ 2, 5, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 2, 3, 6, 4 ],
            [ 3, 3, 6, 6 ],
            [ 4, 5, 6, 6 ],
            [ 2, 6, 6, 6 ],
            [ 5, 5, 6, 6 ],
            [ 6, 5, 6, 6 ],
            [ 3, 4, 6, 6 ],
            [ 2, 4, 4, 6 ] ],
        result : [ 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    }
};
module.exports = {
    getSchoolNames : [
        "University of Pittsburgh",
        "Boston College",
        "Case Western Reserve University",
        "Clark University",
        "University of Delaware",
        "Fordham University",
        "Lehigh University",
        "Michigan State University",
        "Northeastern University",
        "The Ohio State University",
        "Purdue University",
        "Tulane University",
        "University of Illinois Urbana-Champaign",
        "University of California, Davis",
        "University of Florida",
        "University of Rochester",
        "University of Texas, Austin",
        "University of Southern California",
        "Wake Forest University",
        "University of Wisconsin, Madison",
        "Washington University in St. Louis",
        "Pace University"
    ],
    getSchoolDataAndResult : function(name) {
        return schools[name];
    },
    getPreprocessedData : function(raw) {
        //position: school, toefl, gre, gpa, so raw = [school, toefl, gre, gpa]
        //gre/gmat convert to level
        //1 for 330+/740+, 2 for 325-329/720+, 3 for 320-324/710+, 4 for 315-319/700+, 5 for 310-314/680+, 6 for <= 310/680
        //1 for 110+, 2 for 105-109, 3 for 100-104, 4 for 95-99, 5 for 90-94, 6 for <= 89
        //gpa number: 1 for 4, 2 for 3.8-3.99, 3 for 3.5-3.79, 4 for 3.3-3.49, 5 for 3 - 3.29, 6 for <= 2.99
        var processed = [raw[0]];
        var t = raw[1];
        var g = raw[2];
        var gpa = raw[3];
        var valueG = 6;
        var valueT = 6;
        var valueGpa = 6;

        if (g >= 330 && g < 500 || g >= 740) valueG = 1;
        else if (g >= 325 && g < 330 || g >= 720) valueG = 2;
        else if (g >= 320 && g < 325 || g >= 710) valueG = 3;
        else if (g >= 315 && g < 320 || g >= 700) valueG = 4;
        else if (g >= 310 && g < 315 || g >= 680) valueG = 5;

        if (t >= 110) valueT = 1;
        else if (t >= 105 && t < 110) valueT = 2;
        else if (t >= 100 && t < 105) valueT = 3;
        else if (t >= 95 && t < 100) valueT = 4;
        else if (t >= 90 && t < 95) valueT = 5;

        if (gpa >= 4) valueGpa = 1;
        else if (gpa >= 3.8 && gpa < 4) valueGpa = 2;
        else if (gpa >= 3.5 && gpa < 3.8) valueGpa = 3;
        else if (gpa >= 3.3 && gpa < 3.5) valueGpa = 4;
        else if (gpa >= 3 && gpa < 3.3) valueT = 5;

        processed.push(valueT, valueG, valueGpa);
        return processed;
    }
};