const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

//   console.log(current,hours,minutes);
 let passenger_id = 1001;
 let seat_no = 1;
  const name =['SS','SL','AC','EC','FC','AC1-','AC2-','AC3-'];
  const seats =[60,50,40,30,40,30,30,30];
  const status_ = ['Booked','Waiting'];
  for (let id=1101; id <= 1101+2000; id++) {


  var current = new Date();
  var date = current.toLocaleDateString();
//   var hours = current.getHours();
//   var minutes = current.getMinutes();
    //user
    // let email = faker.internet.email();
    // let last_name = faker.name.lastName();
    // let first_name = faker.name.firstName();
    // let phone = faker.phone.phoneNumberFormat();
    
    // let gender = faker.name.gender();
    // let age = Math.floor(Math.random() * 61)+15; 
    // let city = faker.address.city();
    // console.log(`INSERT INTO user_details."user"(
    //     id, email, last_name, first_name, gender, age, mobile, city)
    //     VALUES (${id},'${email}','${last_name}','${first_name}', '${gender}',${age},${phone},'${city}');`)
    // users.push({
    //    "email":email,
    //    "phone_no":phone
    // });

    //station
    let city = faker.address.city();
    console.log(`INSERT INTO station_details.station(
        id, "Name")
        VALUES (${id}, '${city}');`);


    //train
    // let name = faker.address.city()+" express";

    // let source = Math.floor(Math.random() * 1100)+100; 

    // while(source > 1001)
    // {
    //     source = Math.floor(Math.random() * 1100)+100; 
    // }
    
    // let destination = Math.floor(Math.random() * 1100)+100;

    // while(source == destination || destination >1001)
    // {
    //     destination = Math.floor(Math.random() * 1100)+100;
    // }

    // console.log(`INSERT INTO train_details.train(
    //     id, name, source, destination, arrival_time, destination_time)
    // VALUES (${id},'${name}',${source},${destination},'${hours}:${minutes}:00', '${(hours+10)%23}:${minutes}:00');`);
      
    // //passes_by
    // console.log(`INSERT INTO station_details.passes_by(
    //     station_id, train_no, arrival_time, departure_time)
    //                 VALUES (${source},${id},'${hours}:${minutes}:00', '${hours}:${(minutes+5)%60}:00');`);
    
    //                 console.log(`INSERT INTO station_details.passes_by(
    //                     station_id, train_no, arrival_time, departure_time)
    //                                 VALUES (${destination},${id},'${(hours+10)%23}:${minutes}:00', '${(hours+10)%23}:${(minutes+5)%60}:00');`);

    // for(let i=0;i<8;i++)
    // {
    //     hours = (hours+1)%23;
    //     let station = Math.floor(Math.random() * 1100)+100;
        
    //     while(station === source || station === destination || station >1001)
    //     {
    //         station = Math.floor(Math.random() * 1100)+100;  
    //     }
    //     console.log(`INSERT INTO station_details.passes_by(
    //         station_id, train_no, arrival_time, departure_time)
    //                     VALUES (${station},${id},'${hours}:${minutes}:00', '${hours}:${(minutes+5)%60}:00');`);
                        
    // }


    //compartment
    // for(let i=0;i<3;i++)
    // {
    //     let type_id = Math.floor(Math.random() * 8);
    //     for(let j=1;j<6;j++)
    //     {
    //         console.log(`INSERT INTO train_details.compartment(
    //             type_id, train_no, name, seat_available)
    //             VALUES (${type_id+1},${id},'${name[type_id]}${j}',${seats[type_id]});`);
    //     }
    // }

    //ticket
    // let train_no = Math.floor(Math.random() * 1425)+1234;

    // while(train_no > 1425 )
    // {
    //     train_no = Math.floor(Math.random() * 1425)+1234;
    // }

    // let user_id = Math.floor(Math.random() * 100);
 
    // let status = Math.floor(Math.random() * 2);
    // let no_of_passengers = Math.floor(Math.random() * 6)+1;
    // console.log(`INSERT INTO journey_details.ticket_details(
    //     id, train_no, user_id, no_of_passengers, status)
    //             VALUES (${id},${train_no},${user_id}, ${no_of_passengers},'${status_[status]}');`);

    // //passenger
    // let type_id = Math.floor(Math.random() * 8); 
    // let j=1;
    // for(let i=0;i<no_of_passengers;i++)
    // {
    //     let first_name = faker.name.firstName();
    //     let gender = faker.name.gender();
    //     let age = Math.floor(Math.random() * 61)+15; 
    //     console.log(`INSERT INTO journey_details.passenger_details(
    //         age, coach, gender, id, name, seat_no, ticket_id, train_no, journey_date)
    //                 VALUES (${age},'${name[type_id]}${j}','${gender}',${passenger_id},'${first_name}',${seat_no},${id},${train_no},'${date}');`);
    //     passenger_id++;
    //     seat_no++;
    //     if(seat_no>60)
    //     {
    //         seat_no = 1;
    //         j=2
    //     }
    // }
    

    
    
  }

  return { "data": users }
}


let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));