import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Advertising from "../components/Advertising";
import AdvertisingMini from "../components/AdvertisingMini";
import { Container, Row, Col} from "react-bootstrap";
import set from "../components/AdvertisingMini/img/img_set.png";
import oil from "../components/AdvertisingMini/img/img_oil.png";
import corn from "../components/AdvertisingMini/img/img_corn.png";
import neck from "../components/AdvertisingMini/img/img_neck.png";
import Api from "../Api"
import Bestseller from "../components/Bestseller";
import Goodies from "../components/Goodies";
import Blog from "../components/Blog";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";



export default() => {
    const [data,setData]=useState([]);
    const [goods,setGoods]=useState([]);
    const [bests, setBests] =useState([]);
    const [token, setToken]=useState(localStorage.getItem('token'));
    const [api,setApi] = useState(new Api(token));
    const [transform, setTransform] = useState(0);
    const [cnt1, setCnt1] = useState(1);
    const [cnt2, setCnt2] = useState(1);
    const [cnt3, setCnt3] = useState(1);
    
   

    const text1 = ['Наборы','Микс масел','Рога \nсеверного \nоленя','Слипы из \n шеи индейки']
    const text2 = [`для дрессировке `,`пищевая здоровая \n натуральная добавка`,'от 10кг до 30кг','100% натуральное']
    const text3 = ['от 480 ₽','']
    const clr = ['#d7a216','#25b5be','#88b549','#db6825']
    const btn = { 
        borderRadius: "30px",
        border: "none",
        padding: "8px 15px",
        background:"#fff"
    }
    const title={
        background:"var(--main-color)",
        paddingTop: "30px",
        paddingBottom: "100px"    
    }
    const wrapper = {
        position: "relative",
        left: "7%",
        rigth: "7%"        
    }
    const container ={
        position: "relative",
        top: "-30px"
    }
    const arrow={
        width: "30px",
        height: "30px",
        marginLeft: "15px",
        cursor: "pointer"
    }
    const stCarousel={
        overflow: "hidden"
    }
    const marginCarousel ={
        margin: "20px 0px"
    }
    
    useEffect(() =>{
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                setBests(data.products.filter(g => g.likes.length>5))
                setGoods(data.products.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); 
                    const nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    return 0;
                  })
                ) ;
            })
        api.getBlog()
            .then(result => result.json())
            .then(data => setData(data))
        
    }, [api])

    
    
    console.log("goods",goods,"\nbests", bests, "\n data", data );


    // const mouveR =(goods) =>{
    //     const [cnt, setCnt]=useState(1);
    //     if( cnt <= goods.length / 4 ){
    //         setCnt(cnt + 1);
    //         setTransform(-(280 *4) * cnt)
    //         console.log(cnt, transform);
    //     }   
    // }

    // const mouveL =(goods) =>{
    //     const [cnt, setCnt]=useState(1);
    //     if( cnt !== 1 && goods.length !== 0){
    //         setCnt(cnt - 1);
    //         setTransform(transform + (280 *4))
    //         console.log(cnt, transform);  
    //     } 
    // }
   

    return <>
    <Header/>
    <div className="title-box" style={title}>    
        <div className="wrapper-box" style={wrapper}>
            <h1 className="home__title">
                Крафтовые<br/>
                лакомства длв <br/>
                собак
                </h1>
            <p className="home__text">
                Всегда свежие лакомства ручной<br/>
                работы с доставкой по России и Миру
            </p>
            <button className="btn-catalog" style={btn}>Каталог</button>
        </div>
    </div>

    <Container style={container}>
        <Row>
            <Col md={12} xs={12}style={{borderRadius: "15px", backgroundColor: "#ff9027", padding: "20px", marginBottom: "20px"}}>
                <Advertising/>
            </Col>
            <Col md={6} xs={6}>
                <h2>Хиты</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" >
                <ArrowLeftCircle className="goods"  style={arrow} onClick={() => {
                    if( cnt1 !== 1){
                        setCnt1(cnt1 - 1 )
                        setTransform(transform + (280 *4))
                        console.log(cnt1, transform);  
        }}}/>  
                <ArrowRightCircle className="goods" style={arrow} onClick={
                    () => {
                        if( cnt1 <= goods.length / 4 ){
                            setCnt1( cnt1 + 1);
                            setTransform(-(280 *4) * cnt1)
                            console.log(cnt1, transform);
                            }
                        }}/>
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Bestseller transform={transform} goods={goods} />
            </Col>
            <Col md={6} xs={12} style={{borderRadius: "15px",  backgroundColor: `${clr[0]}`,boxSizing: "border-box"}}>
                <AdvertisingMini text1={text1[0]} text2={text2[0]} 
                text3={text3[0]} img={set} color={clr[0]} />
            </Col>
            <Col md={6} xs={12} style={{borderRadius: "15px", backgroundColor: `${clr[1]}`}}>
                <AdvertisingMini text1={text1[1]} text2={text2[1]} 
                text3={text3[1]} img={oil} color={clr[1]}/>
            </Col>
            <Col md={6} xs={6} style={marginCarousel}>
                <h2>Лакомства</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" style={marginCarousel}>
             <ArrowLeftCircle className=" bests" style={arrow} onClick={() => {
                    if( cnt2 !== 1){
                        setCnt2(cnt2 - 1 )
                        setTransform(transform + (280 *4))
                        console.log(cnt2, transform);  
                    }}}/>  
            <ArrowRightCircle className=" bests" style={arrow} onClick={
                    () => {
                        if( cnt2 <= bests.length / 4 ){
                            setCnt2( cnt2 + 1);
                            setTransform(-(280 *4) * cnt2)
                            console.log(cnt2, transform);
                            }
                        }}/>
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Goodies transform={transform} bests={bests} />
            </Col>
            <Col md={6} xs={12} style={{borderRadius: "15px", backgroundColor: `${clr[2]}`}}>
                <AdvertisingMini text1={text1[2]} text2={text2[2] } 
                text3={text3[1]} img={corn} color={clr[2]}/>
            </Col>
            <Col md={6} xs={12} style={{borderRadius: "15px", backgroundColor: `${clr[3]}`}}>
                <AdvertisingMini text1={text1[3]} text2={text2[3]} 
                text3={text3[1]} img={neck} color={clr[3]}/>
            </Col>
            <Col md={6} xs={6} style={marginCarousel}>
                <h2>Новости</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" style={marginCarousel}>
                <ArrowLeftCircle className=" bests" style={arrow} onClick={() => {
                    if( cnt3 !== 1){
                        setCnt2(cnt3 - 1 )
                        setTransform(transform + (280 *4))
                        console.log(cnt3, transform);  
                    }}}/>  
                <ArrowRightCircle className=" bests" style={arrow} onClick={
                    () => {
                        if( cnt3 <= bests.length / 4 ){
                            setCnt2( cnt3 + 1);
                            setTransform(-(280 *4) * cnt3)
                            console.log(cnt3, transform);
                            }
                        }}/>
            </Col>
            <Col md={12} xs={12} style={{borderRadius: "15px", backgroundColor: "#ff9027"}}>
                <Advertising />
            </Col>
            
            <Col md={12} xs={12} style={stCarousel}>
                <Blog transform={transform} data={data} />
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
}

