/**
 * Created by zihanwang on 10/25/15.
 */
define(['app'], function(app)
{
    app.factory("searchService",
        ["$http","$q", "$log",
            function($http, $q, $log){
                //server info
                var baseInfo = {
                    http : 'http://',
                    url : '115.28.86.184',   //
                    port : '9200',
                    query : 'select * from ',
                    dbname : 'dreamguide',
                    token : '/',
                    token2 : ':'
                };

                /*FixMe: server REST
                    var url = '/App/ES'
                    Host = env.elastic.host;
                    Index = env.elastic.index;
                */
                return {
                    makeQueryCallBack:function(indice, type, query, callback){
                        var path = baseInfo.http + baseInfo.url + ":" +baseInfo.port + "/" + indice + "/" +type + "/_search";
                        $http.post(path, query).success(function(data){
                            if(callback){
                                callback(data);
                            }
                        }).error(function(data){
                            console.log(data);
                        });
                    },
                    tutorFilterQuery: function(key,value,size){
                        var queryObj = {
                                from: 0,
                                size: size||10,
                                query:{
                                    filtered:{
                                        query : {
                                            term: {
                                                "registerAs": "Tutor"
                                            }
                                        },
                                    filter:{
                                        bool:{
                                            must:{
                                                term:{}
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        queryObj.query.filtered.filter.bool.must.term[key] = value;
                        return queryObj;
                    },
                    tutorMultiFiltersQuery: function(){
                        console.log("multi filters");
                    }
                }
        }]);
});