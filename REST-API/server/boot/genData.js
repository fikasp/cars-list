

module.exports = function (app) {
  const data = [
    {
      "model": "Mazda Rx7",
      "type": "Coupe",
      "year": "1998",
      "color": "red",
      "cost": 1200,
      "isFullyDamaged": false,
      "clientFirstName": "Jan",
      "clientSurname": "Kowalski",
      "power": 155,
      "plate": "GWE2118",
      "deliveryDate": "2017-06-01T17:16:39.259Z",
      "deadline": "2017-07-01T17:16:39.260Z"
    },
    {
      "model": "Mercedes 124",
      "type": "Kombi",
      "year": "1993",
      "color": "green",
      "cost": 800,
      "isFullyDamaged": true,
      "clientFirstName": "Marcin",
      "clientSurname": "Kowal",
      "power": 96,
      "plate": "GD214X",
      "deliveryDate": "2017-05-03T17:16:39.259Z",
      "deadline": "2017-06-04T17:16:39.260Z"
    },
    {
      "model": "Audi R8",
      "type": "Coupe",
      "year": "2014",
      "color": "yellow",
      "cost": 4200,
      "isFullyDamaged": false,
      "clientFirstName": "Stefan",
      "clientSurname": "Tusk",
      "power": 420,
      "plate": "KRK333",
      "deliveryDate": "2017-05-12T17:16:39.259Z",
      "deadline": "2017-06-14T17:16:39.260Z"
    },
    {
      "model": "BMW M3",
      "type": "Sedan",
      "year": "2004",
      "color": "silver",
      "cost": 1800,
      "isFullyDamaged": false,
      "clientFirstName": "Karolina",
      "clientSurname": "Boczek",
      "power": 200,
      "plate": "KRK3001",
      "deliveryDate": "2017-03-11T17:16:39.259Z",
      "deadline": "2017-06-18T17:16:39.260Z"
    },
    {
      "model": "Renault Clio",
      "type": "Sedan",
      "year": "2012",
      "color": "silver",
      "cost": 1300,
      "isFullyDamaged": true,
      "clientFirstName": "Franek",
      "clientSurname": "Nowak",
      "power": 170,
      "plate": "CB104",
      "deliveryDate": "2017-04-17T17:16:39.259Z",
      "deadline": "2017-08-11T17:16:39.260Z"
    },
    {
      "model": "Renault Megane",
      "type": "Kombi",
      "year": "2011",
      "color": "black",
      "cost": 600,
      "isFullyDamaged": false,
      "clientFirstName": "Zbigniew",
      "clientSurname": "Kluska",
      "power": 136,
      "plate": "GPU4400",
      "deliveryDate": "2017-04-22T17:16:39.259Z",
      "deadline": "2017-07-22T17:16:39.260Z"
    },
    {
      "model": "Ford Fiesta",
      "type": "Coupe",
      "year": "1999",
      "color": "blue",
      "cost": 2000,
      "isFullyDamaged": false,
      "clientFirstName": "Anna",
      "clientSurname": "Gryc",
      "power": 130,
      "plate": "GBA033",
      "deliveryDate": "2017-04-30T17:16:39.259Z",
      "deadline": "2017-06-30T17:16:39.260Z"
    },
    {
      "model": "Ford Focus",
      "type": "Kombi",
      "year": "2004",
      "color": "red",
      "cost": 1750,
      "isFullyDamaged": true,
      "clientFirstName": "Monika",
      "clientSurname": "Bach",
      "power": 170,
      "plate": "KKP977",
      "deliveryDate": "2017-03-30T17:16:39.259Z",
      "deadline": "2017-05-30T17:16:39.260Z"
    }
  ];

  var db = app.dataSources.db;
  const CarModel = app.models.Car || db.buildModelFromInstance("Car", data, {idInjection: true});

  data.map(function(car) {
    CarModel.create(car, function (err, u) {
    if (err) {
      throw err;
    }
  });
})

}
