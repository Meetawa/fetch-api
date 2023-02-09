import React from 'react';
function App() {
  const fun=()=>{
    //TODO:Fetching the api 
    AP.request('/rest/api/2/search?jql=', {
      success: function(responseText){
        alert(responseText);
      },
      error:function(){
        alert("Error");
      }
      });
     } 
  return (
   <center>
    <button onClick={fun}>click</button>
   </center>
  );
}

export default App;
