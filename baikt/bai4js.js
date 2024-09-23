class worker{
    STT;
    name;
    birthday;
    address;
    wage;
    position;
   constructor(STT,name,birthday,Address,wage,position){
       this.STT=STT;
       this.name=name;
       this.birthday=birthday;
       this.address=Address;
       this.wage= wage;
       this.position=position;
   }
}


let workerA = [];
workerA.push(new worker(1, 'Trương Tấn A', '11-11-1997', 'quản nam', 2000, 'Abc'));
workerA.push(new worker(1, 'Trương Tấn C', '11-11-1998', 'Đà Nẵng', 2000, 'Abc'));
workerA.push(new worker(1, 'Trương Tấn B', '11-11-1999', 'Huế', 2000, 'Abc'));

function display(){
    let h = '';
    h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;color: chartreuse; background: darkslategray'>";
    h += '<tr>'+
        '<td style="width: 30px"></td>'+
        '<td>'+'STT'+'</td>'+
        '<td>'+'Họ Và Tên'+'</td>'+
        '<td>'+'Ngày Sinh'+'</td>'+
        '<td>'+'Địa Chỉ'+'</td>'+
        '<td>'+'Lương'+'</td>'+
        '<td>'+'Chức Vụ'+'</td>'+
        '</tr>'+ "</table>";

    for (let i = 0; i < workerA.length; i++)
    {
      if (i % 2 === 0){
          h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black; background: darkgray'>";
      }else {
          h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
      }

        h += '<tr>'+
            '<td style="width: 30px"></td>'+
            `<td> ${workerA[i].STT}</td>`+
            `<td>${workerA[i].name}</td>`+
            `<td>${workerA[i].birthday}</td>`+
            `<td>${workerA[i].address}</td>`+
            `<td>${workerA[i].wage}</td>`+
            `<td>${workerA[i].position}</td>`+
            '</tr>'+
            "</table>";
    }

    document.getElementById('view').innerHTML = h;
}
function sortByName() {
    workerA.sort((a, b) => a.name.localeCompare(b.name));
}
window.onload = function(){
    sortByName();
    display();
}
