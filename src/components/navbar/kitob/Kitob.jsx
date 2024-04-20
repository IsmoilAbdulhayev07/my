import React from 'react'
import './Kitob.css'
import Logo2 from '../../../assests/Bookmain.jpeg'
// import Logo3 from '../../assests/chip.jpg'
// import Logo4 from '../../assests/jazbar.jpg'
// import Logo5 from '../../assests/kankulyator.jpg'
// import Logo6 from '../../assests/kankulyator2.jpg'
// import Logo7 from '../../assests/kiley.jpg'
// import Logo8 from '../../assests/kiley2.jpg'
// import Logo9 from '../../assests/kundalik.jpg'
// import Logo10 from '../../assests/qaychi.jpg'
// import Logo11 from '../../assests/pen.jpg'
// import Logo12 from '../../assests/shtrix.jpg'
// import Logo13 from '../../assests/sichqoncha.jpg'
// import Logo14 from '../../assests//spidametr.jpg'
// import Logo15 from '../../assests/uchburchak.jpg'
// import Logo16 from '../../assests/yopishqoq.jpg'
// import Logo17 from '../../assests/stiper2.jpg'
// import Logo18 from '../../assests/buluts.jpg'
// import Logo19 from '../../assests/marker.jpg'
// import Logo20 from '../../assests/quloqchin.jpg'
// import Logo21 from '../../assests/pen.jpg'
// import Logo22 from '../../assests/marker2.jpg'
// import Logo23 from '../../assests/ruchka.jpg'
// import Logo24 from '../../assests/uchburchak.jpg'
// import Logo25 from '../../assests/ruchka2.jpg'


function Kitob() {
  
  const Data = [
    { ism: 'Ikki eshik orasi ',shoir: 'Otkir Hoshimov', narx: ' 20000 som' },
    { ism: '.....',shoir: 'Otkir Hoshimov',  narx: ' 25000 som' },
    { ism: 'Jazbar',shoir: 'Otkir Hoshimov',  narx: ' 3000 som' },
    { ism: 'Kankulyator',shoir: 'Otkir Hoshimov',  narx: ' 10000 som' },
    { ism: 'Kankulyator',shoir: 'Otkir Hoshimov',  narx: ' 15000 som' },
    { ism: 'Yelim',shoir: 'Otkir Hoshimov',  narx: ' 25000 som' },
    { ism: 'Yelim',shoir: 'Otkir Hoshimov',  narx: ' 2000 som' },
    { ism: 'Yondaftar',shoir: 'Otkir Hoshimov',  narx: ' 5000 som' },
    {  ism: 'Qaychi',shoir: 'Otkir Hoshimov',  narx: ' 7000 som' },
    {  ism: 'Qalam',shoir: 'Otkir Hoshimov',  narx: ' 8000 som' },
    {  ism: 'Ochirgich',shoir: 'Otkir Hoshimov',  narx: ' 5000 som' },
    {  ism: 'Sichqoncha',shoir: 'Otkir Hoshimov',  narx: ' 35000 som' },
    {  ism: 'Chizgich',shoir: 'Otkir Hoshimov',  narx: ' 2000 som' },
    {  ism: 'Chizgich',shoir: 'Otkir Hoshimov',  narx: ' 1000 som' },
    {  ism: 'Yopishtirgich',shoir: 'Otkir Hoshimov',  narx: ' 4000 som' },
    {  ism: 'petno',shoir: 'Otkir Hoshimov',  narx: ' 25000 som' },
    {  ism: 'Quloqchin',shoir: 'Otkir Hoshimov',  narx: ' 15000 som' },
    {  ism: 'Marker',shoir: 'Otkir Hoshimov',  narx: ' 3000 som' },
    {  ism: 'Quloqchin',shoir: 'Otkir Hoshimov',  narx: ' 30000 som' },
    {  ism: 'Rangli qalam',shoir: 'Otkir Hoshimov',  narx: ' 8000 som' },
    {  ism: 'Ruchka',shoir: 'Otkir Hoshimov',  narx: ' 3000 som' },
    {  ism: 'Marker',shoir: 'Otkir Hoshimov',  narx: ' 4000 som' },
    {  ism: 'Chizgich',shoir: 'Otkir Hoshimov',  narx: ' 2000 som' },
    {  ism: 'Ruchka',shoir: 'Otkir Hoshimov',  narx: ' 4000 som' },
]
  return (
    <div className='Kitob'>
      <div className="Book">
      <h1>Kitoblar</h1>
      <a href='Badiiy kitoblar'>Badiiy kitoblar</a>
      <a href='Darslik kitoblar'>Darslik kitoblar</a>
      <a href='Darslik kitoblar'>Ilmiy kitoblar</a>
      </div>
      <div className="oddi">
      <input type='text' placeholder='Kitob nomini yozing'></input>

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

export default Kitob;
