	function add() {
        var trArray = table.getElementsByTagName('tr');
        for (var i = 0, dlina = trArray.length; i < dlina; i++)
            trArray[i].insertCell(0);
    }
	
	function rightAdd() {
          var table=document.getElementById('table').getElementsByTagName('td'),
              innerhtml='';
          for(var i in table) {
              table[i].onmouseover=function(event) {
                  //event=fixEvent(event);
                  innerhtml=event.target.innerHTML;
                  event.target.innerHTML='';
              };
              table[i].onmouseout=function(event) {
                  //event=fixEvent(event);
                  event.target.innerHTML=innerhtml;
              };
          }
      }
      rightAdd();