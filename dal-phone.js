const mysql = require('mysql');

const fs = require('fs');


const _con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phones"
})

function readOne(age, callback) {

}

function readAll(sql, callback) {
    _con.query(sql, function(err, result){
        if(err){
            callback(err);
        }else {
            callback(null, result);
        }
    })
    /*fs.readFile(fileName, (e, data) => {
        const allPhones = data && data.length > 0 ? JSON.parse(data.toString()) : [];
        allPhones.sort(function (a, b) {
            return a.age - b.age;
        });
        if (e) {
            callback(e);
        } else {
            callback(null, allPhones);
        }
    })*/
}

function saveOne(addedPhone, callback) {
    fs.readFile(fileName, (e, data) => {
        const phonesArray = data && data.length > 0 ? JSON.parse(data.toString()) : [];
        phonesArray.push(addedPhone);
        fs.writeFile(fileName, JSON.stringify(phonesArray), (e) => {
            if (e) {
                callback('error');
            }
            else {
                callback(null);
            }

        });
    });
}

function updateOne(phoneToUpdate, callback) {

}

function deleteOne(phoneToDelete, callback) {
    fs.readFile(fileName, (e, d) => {
        let allPhones = d && d.length > 0 ? JSON.parse(d.toString()) : [];

        allPhones = allPhones.filter(r => r.age !== phoneToDelete);

        fs.writeFile(fileName, JSON.stringify(allPhones), (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    });
}

module.exports.readAll = readAll;
module.exports.saveOne = saveOne;
module.exports.deleteOne = deleteOne;