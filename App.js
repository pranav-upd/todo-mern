import React, {useEffect, useState} from 'react';
import './App.css';

 

function App() {
  const [data_output, setData] = useState(0);
  const myref = React.createRef();
  
  useEffect(()=> {
       fetch('http://127.0.0.1:5000').then(data1=>data1.json()).then(data=>{
         var op_data = {};
         var temp_data = {};
         for (var i=0;i<data.length;i++){
         temp_data[data[i].index] = [data[i].data, data[i].isTrue]
         op_data = Object.assign(temp_data);
         }
         setData(op_data);
        })   
  }, []);
  
  function add_data(){
    var descr = myref.current.value;
    fetch('http://127.0.0.1:5000/listener?add_data='+descr).catch(err=>console.log(err)).finally(console.log('Data Added successfully!'));
    window.location.reload();
  }
  
  function bool(checkbox_id){
    fetch('http://127.0.0.1:5000/listener?bool='+checkbox_id).catch(err=>console.log(err)).finally(console.log('Boolean value updated!'));
    window.location.reload(); 
  }
  
  function del(index_id){
    fetch('http://127.0.0.1:5000/listener?del='+index_id).catch(err=>console.log(err)).finally(console.log('Document deleted!'));  
    window.location.reload();
  }
  
  return (
  <div>
   <div className="div_wrapper">
   <input alt="iptext" type="text" className="iptext" ref={myref}/>
   <img alt="img1" src="https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_1280.png" width="16" height="16" className="img_ip" onClick={()=>add_data()}/>
   </div>
   <div>
   <ul>
     {Object.entries(data_output).map(([key, value]) => {
       return ( <li key={key}>{key}. {value[0]}<input type="checkbox" defaultChecked={value[1]} onClick={()=>bool(key)}/>
                <img alt="img2" src="https://freesvg.org/img/milker_X_icon.png" height="16" width="16" onClick={()=>del(key)}/></li>
                )     
     })
    }
    </ul>
  </div>
 </div>  
 ); 
}  

export default App;
