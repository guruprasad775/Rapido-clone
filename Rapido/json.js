// fetch('data.json')
//     .then(response=>response.json())
//     .then(data=>
//     {
//         console.log(data);
//         let table = document.createElement('table');
//         let headerRow = document.createElement('tr');
//         let headers = Object.keys(data[0]);
//         headers.forEach(header => {
//             let th = document.createElement('th');
//             th.textContent = header;
//             headerRow.appendChild(th);
//         });
//         table.appendChild(headerRow);

//         data.forEach(item => {
//             let row = document.createElement('tr');
//             headers.forEach(header => {
//                 let td = document.createElement('td');
//                 td.textContent = item[header];
//                 row.appendChild(td);
//             });
//             table.appendChild(row);
//         });

//         document.body.appendChild(table);
//     }
//     )
   
    // let obj = {
    //    emp:[
    //     {name:"John", age:30, city:"New York"},
    //     {name:"Anna", age:22, city:"London"},
    //    ]
    // };
    // let jsondata = JSON.stringify(obj);
    // console.log(jsondata);
    // let jsondata1 = JSON.parse(jsondata);
    // console.log(jsondata1);
    // let jsondata2 = JSON.parse(jsondata1);



    let div=document.getElementsByTagName('div');
    console.log(div);
    div[0].style.backgroundColor='red';
    div[1].style.backgroundColor='blue';
    div[2].style.backgroundColor='green';
    div[3].style.backgroundColor='yellow';
    div[4].style.backgroundColor='pink';
    document.body.children[0].style.backgroundColor='blue';