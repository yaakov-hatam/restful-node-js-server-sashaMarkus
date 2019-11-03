const dal = require('./dal-phone');

function getPhone(age, callback) {
    callback(null, { "age": age, "name": "abc", "km": 42 });
    /*
    dal.getPhone(age, function (PhoneData) {
    })
    */
}

function getAllPhones(callback) {
    dal.readAll((e, allPhones) => {
        if (e) {
            callback(e);
        } else {
            callback(null, allPhones);
        }
    })
}

function createPhone(addedPhone, callback) {
    if (typeof addedPhone.age !== 'number') {
        callback('Phone age should be string');
    } else {
        dal.saveOne(addedPhone, (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    }
}

function updatePhone(phone) {

}

function deletePhone(phoneToDelete, callback) {
    dal.deleteOne(phoneToDelete, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function filterPhonesList(selectedFiltersValues, callback) {
    dal.readAll((e, allPhones) => {
        let newArr = [];
        for (let i = 0; i < allPhones.length; i++) {
            if (allPhones[i].age == selectedFiltersValues.age) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].name == selectedFiltersValues.name) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].km == selectedFiltersValues.km) {
                newArr.push(allPhones[i]);
            }
        }
        if (e) {
            callback(e);
        } else {
            callback(null, newArr);
        }
    })
}
module.exports.updatePhone = function () {

}
module.exports.getPhone = getPhone;
module.exports.getAllPhones = getAllPhones;
module.exports.createPhone = createPhone;
module.exports.filterPhonesList = filterPhonesList;
module.exports.deletePhone = deletePhone;