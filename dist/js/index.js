$(document).ready(function() {
  // variabel
  let userContainer=[] ;
  let menu = document.querySelector(".navbar-toggler i");
  let btnSubmit = document.querySelector("#btnSubmit");
  const inp = document.querySelectorAll('.box-form .form-control');
  const btnFade = document.querySelector("#btnFade");


  btnSubmit.addEventListener("click",addUsers);
  btnFade.addEventListener("click", newAddAddress);


  // navber icon close
  menu.onclick = function(){
    menu.classList.toggle("fa-times");
  }

  // Validation form
  function validateForm(userName , userPhone){
    let userNameRegex = /^[A-Z][a-z]{3,8}/;
    let userPhoneRegex = /^(002)?(010|011|012|015)[0-9]/;
    if(userNameRegex.test(userName) == false || userPhoneRegex.test(userPhone) == false){
      return false;
    }
    else{
      return true;
    }
  }



  // addUsers
  function addUsers(e){
    e.preventDefault()
    const inpName = document.querySelector("#exampleInputName").value;
    const inpPhone = document.querySelector("#exampleInputPhone").value;

    if(validateForm(inpName, inpPhone) === true ){
      let users ={
        name:inpName,
        phone:inpPhone,
      }
      userContainer.push(users);
      console.log(userContainer)


      $("#exampleInputName").css({"border":"2px solid green"});
      $("#exampleInputPhone").css({"border":"2px solid green"});
      $(".form-text").css({"display":"none"})
      // clear Input
      clearInp()
    }
    else{
      $("#exampleInputName").css({"border":"2px solid red"});
      $("#exampleInputPhone").css({"border":"2px solid red"});
      $(".form-text").css({"display":"block"})
    }
  }
  // function clearInp
  function clearInp (){
    inp.forEach((i)=>{
      i.value =" "
    })
  } 
  // fade new addUsers
  $(".btnAdd").click(function(){
    $(".add-addresses").animate({"top":"0"},1000)
  })
  $("#btnFade").click(function(){
    $(".add-addresses").animate({"top":"-390%"},1000)
  })


  function newAddAddress (){
    let containerData =[];
    let phone = document.getElementById("phone");
    let name = document.getElementById("name");
    let country  = document.querySelectorAll("#country option");
    let government = document.querySelectorAll("#government option");
    let city = document.querySelectorAll("#city option");
    let streetDetails =document.querySelectorAll("#street-details");
    let buildingDetails = document.querySelectorAll("#building-details");
    let postCode = document.querySelectorAll("#post-code");

    let newData ={
      phone:phone.value,
      name:name.value,
      country:country.value,
      government:government.value,
      city:city.value,
      streetDetails:streetDetails.value,
      buildingDetails:buildingDetails.value,
      postCode:postCode.value
    }
    containerData.push(newData)
    console.log(containerData)
  }


})