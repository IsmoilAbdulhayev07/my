import React from 'react'
import './Main.css'
import Logo2 from '../../assests/mak2.jpg'
import Logo1 from '../../assests/chiqargich1.jpg'
import Logo3 from '../../assests/chip.jpg'
import Logo4 from '../../assests/jazbar.jpg'
import Logo5 from '../../assests/kankulyator.jpg'
import Logo6 from '../../assests/kankulyator2.jpg'
import Logo7 from '../../assests/kiley.jpg'
import Logo8 from '../../assests/kiley2.jpg'
import Logo9 from '../../assests/kundalik.jpg'
import Logo10 from '../../assests/qaychi.jpg'
import Logo11 from '../../assests/pen.jpg'
import Logo12 from '../../assests/shtrix.jpg'
import Logo13 from '../../assests/sichqoncha.jpg'
import Logo14 from '../../assests//spidametr.jpg'
import Logo15 from '../../assests/uchburchak.jpg'
import Logo16 from '../../assests/yopishqoq.jpg'
import Logo17 from '../../assests/stiper2.jpg'
import Logo18 from '../../assests/buluts.jpg'
import Logo19 from '../../assests/marker.jpg'
import Logo20 from '../../assests/quloqchin.jpg'
import Logo21 from '../../assests/pen.jpg'
import Logo22 from '../../assests/marker2.jpg'
import Logo23 from '../../assests/ruchka.jpg'
import Logo24 from '../../assests/uchburchak.jpg'
import Logo25 from '../../assests/ruchka2.jpg'
import { Link } from 'react-router-dom'


function Main() {

    const Data = [
        { img: Logo1, ism: 'Chiqargich', narx: ' 2000 som' },
        { img: Logo3, ism: 'Chip', narx: ' 25000 som' },
        { img: Logo4, ism: 'Jazbar', narx: ' 3000 som' },
        { img: Logo5, ism: 'Kankulyator', narx: ' 10000 som' },
        { img: Logo6, ism: 'Kankulyator', narx: ' 15000 som' },
        { img: Logo7, ism: 'Yelim', narx: ' 25000 som' },
        { img: Logo8, ism: 'Yelim', narx: ' 2000 som' },
        { img: Logo9, ism: 'Yondaftar', narx: ' 5000 som' },
        { img: Logo10, ism: 'Qaychi', narx: ' 7000 som' },
        { img: Logo11, ism: 'Qalam', narx: ' 8000 som' },
        { img: Logo12, ism: 'Ochirgich', narx: ' 5000 som' },
        { img: Logo13, ism: 'Sichqoncha', narx: ' 35000 som' },
        { img: Logo14, ism: 'Chizgich', narx: ' 2000 som' },
        { img: Logo15, ism: 'Chizgich', narx: ' 1000 som' },
        { img: Logo16, ism: 'Yopishtirgich', narx: ' 4000 som' },
        { img: Logo17, ism: 'petno', narx: ' 25000 som' },
        { img: Logo18, ism: 'Quloqchin', narx: ' 15000 som' },
        { img: Logo19, ism: 'Marker', narx: ' 3000 som' },
        { img: Logo20, ism: 'Quloqchin', narx: ' 30000 som' },
        { img: Logo21, ism: 'Rangli qalam', narx: ' 8000 som' },
        { img: Logo22, ism: 'Ruchka', narx: ' 3000 som' },
        { img: Logo23, ism: 'Marker', narx: ' 4000 som' },
        { img: Logo24, ism: 'Chizgich', narx: ' 2000 som' },
        { img: Logo25, ism: 'Ruchka', narx: ' 4000 som' },
    ]
    const Doir = [
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
        {ism: 'Kitob'},
    ]
    return (
        <div className="Main">
            <div className="boxo">

                <div className="box1">
                    <div className='Name'>
                        <p>Online</p>
                        <h3>Shop</h3>
                        <h1>$</h1>
                        <h2>$</h2>
                        <h4>$</h4>
                    </div>
                    <div className="boxf">
                        <Link to='/Kitob'>Kitob</Link>
                        <Link to='/kiyim'>
                            Kiyim
                        </Link>
                        <Link to='/Konstavar'>Konstovar</Link>
                        <Link to='/Oquv'>O'quv qurollari</Link>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={Logo2} alt="" />
            </div>
            <div className="boxX">
                <input type="text" placeholder="Maxsulotlarni qidiring(Masalan: Kiyimlar, kitoblar va o'quv qurollari )" />
            </div >
            <div className="doira">
                {
                    Doir.map((value, inx) => {
                        return(
                            <div className="boxw">
                                <h2>{value.ism}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <div className='Map'>
                {
                    Data.map((value, inx) => {
                        return (
                            <div className='boxb' >
                                <img src={value.img} alt="" />
                                <p>{value.ism}</p>
                                <b>{value.narx}</b>

                                <div className="Add">
                                    <div className="plas">
                                        <p>+</p>
                                        <span>-</span>
                                    </div>

                                </div>
                                <button className='dubblyButton'>Buy</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="Footer">

            </div>

        </div>
    )
}

export default Main;