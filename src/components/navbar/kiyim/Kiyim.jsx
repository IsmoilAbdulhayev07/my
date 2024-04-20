import React from 'react'
import './Kiyim.css'
import Logo2 from '../../../assests/kiy.jpeg'

function Kiyim() {
  const Data = [
    { ism: 'Ikki eshik orasi ', shoir: 'Otkir Hoshimov', narx: ' 20000 som' },
    { ism: '.....', shoir: 'Otkir Hoshimov', narx: ' 25000 som' },
    { ism: 'Jazbar', shoir: 'Otkir Hoshimov', narx: ' 3000 som' },
    { ism: 'Kankulyator', shoir: 'Otkir Hoshimov', narx: ' 10000 som' },
    { ism: 'Kankulyator', shoir: 'Otkir Hoshimov', narx: ' 15000 som' },
    { ism: 'Yelim', shoir: 'Otkir Hoshimov', narx: ' 25000 som' },
    { ism: 'Yelim', shoir: 'Otkir Hoshimov', narx: ' 2000 som' },
    { ism: 'Yondaftar', shoir: 'Otkir Hoshimov', narx: ' 5000 som' },
    { ism: 'Qaychi', shoir: 'Otkir Hoshimov', narx: ' 7000 som' },
    { ism: 'Qalam', shoir: 'Otkir Hoshimov', narx: ' 8000 som' },
    { ism: 'Ochirgich', shoir: 'Otkir Hoshimov', narx: ' 5000 som' },
    { ism: 'Sichqoncha', shoir: 'Otkir Hoshimov', narx: ' 35000 som' },
    { ism: 'Chizgich', shoir: 'Otkir Hoshimov', narx: ' 2000 som' },
    { ism: 'Chizgich', shoir: 'Otkir Hoshimov', narx: ' 1000 som' },
    { ism: 'Yopishtirgich', shoir: 'Otkir Hoshimov', narx: ' 4000 som' },
    { ism: 'petno', shoir: 'Otkir Hoshimov', narx: ' 25000 som' },
    { ism: 'Quloqchin', shoir: 'Otkir Hoshimov', narx: ' 15000 som' },
    { ism: 'Marker', shoir: 'Otkir Hoshimov', narx: ' 3000 som' },
    { ism: 'Quloqchin', shoir: 'Otkir Hoshimov', narx: ' 30000 som' },
    { ism: 'Rangli qalam', shoir: 'Otkir Hoshimov', narx: ' 8000 som' },
    { ism: 'Ruchka', shoir: 'Otkir Hoshimov', narx: ' 3000 som' },
    { ism: 'Marker', shoir: 'Otkir Hoshimov', narx: ' 4000 som' },
    { ism: 'Chizgich', shoir: 'Otkir Hoshimov', narx: ' 2000 som' },
    { ism: 'Ruchka', shoir: 'Otkir Hoshimov', narx: ' 4000 som' },
  ]
  return (
    <div className='Kiyim'>
      <div className="Book">
        <h1>Kitoblar</h1>
        <a href='Badiiy kitoblar'>Maktab fo'rmalari</a>
        <a href='Darslik kitoblar'>Kastyumlar</a>
        <a href='Darslik kitoblar'>Ko'cha kiyimlar</a>
      </div>
      <div className="oddi">
        <input type='text' placeholder='Kiyim brendini yozing'></input>

      </div>
      <div className="Img">
        <img src={Logo2}></img>
      </div>
    
      <div className='Map'>
        {
          Data.map((value, inx) => {
            return (
              <div className='boxb' >
                {/* <img src={value.img} alt="" /> */}
                <p>{value.ism}</p>
                <p>{value.shoir}</p>
                <b>{value.narx}</b>


                <button>O'qish</button>
                <button>Sotib olish</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Kiyim
