function addRow(){
var table = document.getElementById('myTable');
//var row = document.getElementById("myTable");
var x = table.insertRow(0);
var e =table.rows.length - 1;
var l =table.rows[e].cells.length;
//x.innerHTML = "&nbsp;";
 for (var c =0,  m=l; c < m; c++) {
table.rows[0].insertCell(c);
   table.rows[0].cells[c].innerHTML  = "&nbsp;&nbsp;";
}
  }

 function add() {
        var trArray = myTable.getElementsByTagName('tr');
        for (var i = 0, dlina = trArray.length; i < dlina; i++)
            trArray[i].insertCell(0);
    }