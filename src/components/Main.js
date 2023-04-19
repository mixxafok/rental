import React, { useState } from 'react'
import {FiBookmark} from  "react-icons/fi";
import {CgCloseO} from "react-icons/cg";


export default function Main() {

   let [OpenModal, setOpenModal] = useState(true);
   function isOpenModal () { 
      setOpenModal(OpenModal = !OpenModal);
      (OpenModal) ? document.body.style.overflow = 'unset' : document.body.style.overflow = 'hidden';
   }

   const [textName, setTextName] = useState();
   const [textSurname, setTextSurname] = useState();
   function handleChangeName(e) {
    setTextName(e.target.value);
   }
   function handleChangeSurname(e) {
    setTextSurname(e.target.value);
   }

   let [fbookmark, setfbookmark] = useState(false)
   const [catalog, setcatalog] = useState([
      {
        id: 1,
        img: require('../img/VWPassat.jpg'),
        Brand: "Volkswagen",
        Model: "Passat",
        Year: "2010",
        Gearbox: "робот",
        Engine_L: 2.0,
        Fuel: "дизель",
        Body_style: "универсал",
        Price: 55,
        Bookmark: false
      },
      {
        id: 2,
        img: require('../img/AudiA6.jpg'),
        Brand: "Audi",
        Model: "A6",
        Year: "2013",
        Gearbox: "вариатор",
        Engine_L: 2.0,
        Fuel: "бензин",
        Body_style: "седан",
        Price: 70,
        Bookmark: false
      },
      {
        id: 3,
        img: require('../img/BMWX1.jpg'),
        Brand: "BMW",
        Model: "X1",
        Year: "2010",
        Gearbox: "механика",
        Engine_L: 2.0,
        Fuel: "бензин",
        Body_style: "внедорожник",
        Price: 60,
        Bookmark: false
      },
      {
        id: 4,
        img: require('../img/MersVivo.jpg'),
        Brand: "Mercedes-Benz",
        Model: "Viano W639",
        Year: "2009",
        Gearbox: "механика",
        Engine_L: 2.1,
        Fuel: "дизель",
        Body_style: "микроавтобус пассажирский",
        Price: 100,
        Bookmark: false
      },
      {
        id: 5,
        img: require('../img/FordMondeo.jpg'),
        Brand: "Ford",
        Model: "Mondeo IV",
        Year: "2009",
        Gearbox: "механика",
        Engine_L: 1.8,
        Fuel: "дизель",
        Body_style: "универсал",
        Price: 40,
        Bookmark: false
      },
      {
        id: 6,
        img: require('../img/HuyndaiSolaris.jpg'),
        Brand: "Huyndai",
        Model: "solaris",
        Year: "2016",
        Gearbox: "автомат",
        Engine_L: 1.6,
        Fuel: "бензин",
        Body_style: "седан",
        Price: 50,
        Bookmark: false
      },
      {
        id: 7,
        img: require('../img/MisthuSpace.jpg'),
        Brand: "Mitsubishi",
        Model: "Space Star II",
        Year: "2019",
        Gearbox: "механика",
        Engine_L: 1.0,
        Fuel: "бензин",
        Body_style: "хэтчбек",
        Price: 45,
        Bookmark:  false
      },
      {
        id: 8,
        img: require('../img/VolvoS80.jpg'),
        Brand: "Volvo",
        Model: "S80 II",
        Year: "2008",
        Gearbox: "автомат",
        Engine_L: 3.2,
        Fuel: "бензин",
        Body_style: "седан",
        Price: 45,
        Bookmark: false
      },
      {
        id: 9,
        img: require('../img/SkodaRoomster.jpg'),
        Brand: "Skoda",
        Model: "Roomster I",
        Year: "2010",
        Gearbox: "механика",
        Engine_L: 1.2,
        Fuel: "бензин",
        Body_style: "минивэн",
        Price: 50,
        Bookmark:  false
      },
      {
        id: 10,
        img: require('../img/ToyotaCamry.jpg'),
        Brand: "Toyota",
        Model: "Camry XV40",
        Year: "2011",
        Gearbox: "автомат",
        Engine_L: 2.4,
        Fuel: "бензин",
        Body_style: "седан",
        Price: 65,
        Bookmark: false
      },
     ])
  return (
    <main>

      {
        catalog.map(item => (
          
          <div key={item.id} className='MainCatalog'>
              <div className='BrandModel'>
                {item.Brand} &nbsp;
                {item.Model}
              <FiBookmark  className={`FiBookmark ${(item.Bookmark) ? 'active' : ''} `} 
              onClick={()=>{item.Bookmark = !item.Bookmark; setfbookmark(!fbookmark)}}  />
              </div>
              
              <span className='PriceAuto'>{item.Price} р. </span> <br/>
              <div className='divimg'>
                <img key={item.id} src={item.img} alt="dfg" width="100%" height="100%" object-fit="cover" />
              </div>
              <ul className='Description'>
                <li>{item.Year} г.,&nbsp;</li> 
                <li>{item.Gearbox},&nbsp;</li> 
                <li>{item.Fuel},&nbsp;</li> 
                <li>{item.Engine_L} л,&nbsp;</li>
                <li>{item.Body_style}</li>
                </ul>
                <hr />
                <button name='Modal-Rent'className='Modal-rent' onClick={()=>isOpenModal()}>Забронировать</button>
              <p></p>

              <div className={`modal ${OpenModal ? 'block' : ''}`} onClick={()=>isOpenModal()}>
                  <section className='modal-main' onClick={e => e.stopPropagation()} >
                     <header className='ModalHeader'>
                        <p>Бронирование</p>
                        <CgCloseO className='VscClose' onClick={()=>isOpenModal()}/>
                     </header>

                     <main className='modalmainForm'>
                        <div>
                           {item.Brand} &nbsp;
                           {item.Model}
                        </div>
                        <form>
                           <div>
                              <label>Имя:</label>
                              <input type='text' name='Name' value={textName} onChange={handleChangeName} placeholder='Введите ваше имя' />
                              {textName}
                           </div>

                           <div>
                           <label>Фамилия:</label>
                              <input type='text' name='Surname' value={textSurname} onChange={handleChangeSurname} placeholder='Введите вашу фамилию' />
                              {textSurname}
                           </div>

                           <div>
                           <label>Телефон:</label>
                              <input type='number' name='PhoneNumber' placeholder='Введите номер телефона' />
                           </div>

                           <div>
                           <label>Паспорт:</label>
                              <input type='text' name='Passport' placeholder='Введите номер паспорта' />
                           </div>
                        </form>
                        <p className='Consultant'>Наш консультант в течение 30 минут свяжется с вами для подтверждения бронирования автомобиля</p>
                        <button name='Rent' className='Rent' onClick={()=>{isOpenModal(); alert('Ваша заявка одобрена')}} /* type = 'submit'*/>Забронировать</button>
                     </main>
                  </section>
               </div>
         </div>
          ))
      }

    </main>
  )
}
