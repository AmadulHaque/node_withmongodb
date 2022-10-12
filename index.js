var MongodbClint = require('mongodb').MongoClient;
// var URl = "mongodb+srv://1rqrFVn4Vi5iR4o0:1rqrFVn4Vi5iR4o0@cluster0.zfrg8j8.mongodb.net?retryWrites=true&w=majority";
var URl = "mongodb://127.0.0.1:27017/";

var config = {useUnifiedTopology:true};


MongodbClint.connect(URl,config,function (error,MyMongoClient) {
    if (error){
        console.log("connection Faild");
    }else{
        console.log("connection Sucess!");
        inserData(MyMongoClient);
        // deleteData(MyMongoClient);
        // deleteAll(MyMongoClient);
        // findOneWithCondition(MyMongoClient);
        // findOneprojection(MyMongoClient);
        // findOnequery(MyMongoClient);
        // updatedata(MyMongoClient)
        // MycreateCollection(MyMongoClient);
        // deleteCollection(MyMongoClient);
    }
});


function inserData(MyMongoClient) {

    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');

    let MyData = {nmae:'Halim',age:'01',position:'maneager'};
    MyCollection.insertOne(MyData,function (error) {
        if (error){
            console.log("data insert fail");
        }else{
            console.log("data insert success");
        }
    });
}
function deleteData(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    var deleId = {nmae:'Halim'}
    MyCollection.deleteOne(deleId,function (error) {
        if (error){
            console.log("data delete fail");
        }else{
            console.log("data delete success");
        }
    });
}
function deleteAll(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    MyCollection.deleteMany(function (error,resultObject) {
        if (error){
            console.log("data delete fail");
        }else{
            console.log(resultObject);
        }
    });
}
function findOneWithCondition(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    let withOutcondition = {};
    MyCollection.find().toArray(function (error,result) {
        console.log(result);
    })
}
function findOneprojection(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    let itemObj ={};
    let ItemProjetion ={projection:{age:"1"}};
    MyCollection.find(itemObj,ItemProjetion).toArray(function (error,result) {
        console.log(result);
    })
}
function findOnequery(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    // let query ={age:"25"};
    let shortdata = {age:-1}
    MyCollection.find().sort(shortdata).toArray(function (error,result) {
        console.log(result);
    })
}
function updatedata(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    let MyCollection = MyDataBase.collection('employee');
    let Myquery ={age:"04"};
    let MyUpdata = {$set:{name:'karim',position:'developer'}};
    MyCollection.updateOne(Myquery,MyUpdata,function (error,result) {
        console.log(result);
    })
}

function MycreateCollection(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    MyDataBase.createCollection('teacher',function (error,result) {
        console.log(result);
    });

}

function deleteCollection(MyMongoClient) {
    let MyDataBase = MyMongoClient.db('office');
    MyDataBase.dropCollection('teacher',function (error,result) {
        console.log(result);
    });

}
