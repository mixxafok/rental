import React, { useState } from 'react'
import {FiBookmark} from  "react-icons/fi";
import {CgCloseO} from "react-icons/cg";
import {default as catalog} from "../App";

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
