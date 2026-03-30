import React from 'react';
import User from './component/user';
import Cards from './component/cards';
function get(){
  const names=["Apple","Samsung","Oneplus","Redmi"];
  const loc =["USA","UK","AUSTRALIA","AFRICA"];
  const post=["Developer","Designer","Tester","Manager"];
  const log=["https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg","https://i.pinimg.com/1200x/d5/63/7c/d5637cf25d7d2a6d4a9cfb08f7756032.jpg","https://i.pinimg.com/1200x/ee/09/d6/ee09d6206b97811e57fbee835f294058.jpg","https://i.pinimg.com/1200x/72/51/24/7251240a4197b21361c5742e0ee8885d.jpg"];
   const index=Math.floor(Math.random()*names.length);
  return{
    name:names[index],
    salary:Math.floor(Math.random()*100)+"K",
    date:Math.floor(Math.random()*30)+" days ago",
    perhour:"$"+Math.floor(Math.random()*500),
    location:loc[Math.floor(Math.random()*loc.length)]  ,
    post:post[Math.floor(Math.random()*post.length)],
    logo:log[index]
  }
}

function App() {
  const brr=[get(),get(),get(),get(),get(),get(),get(),get(),get(),get(),get(),get()];
  return (
  <div className='parent'>
{
  brr.map((elem)=>{
    return <Cards name={elem.name} salary={elem.salary} date={elem.date} perhour={elem.perhour} location={elem.location} post={elem.post} logo={elem.logo} />;
  })
}























  {/* { */}
    {/* arr.forEach((elem)=>{ */}
      {/* console.log(elem.age,elem); */}
      {/* alert(elem.user); */}
      {/* <Cards name={elem.user}/> */}
      {/* return <h1>sdfghj</h1> */}
      {/* console.log(elem); */}
      {/* <Cards name={elem.user}/> */}
    {/* }) */}
  {/* } */}


{/* <User name={arr[0]}/> */}
{/* <User name={arr[1]}/> */}
    {/* <Cards name="Samsung" salary="10k" date="9 days ago" perhour="$170" location="UK"/> */}
    {/* <Cards name="Apple" salary="15k" date="12 days ago" perhour="$200" location="USA"/> */}
  </div> 
  )
}

export default App