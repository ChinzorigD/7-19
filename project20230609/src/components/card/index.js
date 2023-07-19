import React from "react";
import './style.css'

const Card=()=>{
return(

<>
    <div>
        <div>
            <div className='big-img'>
                <img src="https://i.ytimg.com/vi/l2nT6LIbyXA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5Yxh-2w8gYy5JWTzPVoqXDeQgFQ" alt=""></img>
            </div>
            <div className="flex card-p">
                <div className='small-img'>
                    <img src="https://yt3.ggpht.com/cnvbgEqHrRg46GuZeFUBHrBhdEMf_dJESZybP_sCKPDKbahIeYCjuwlQPdrIjDSP7dXEiJy4xw=s68-c-k-c0x00ffffff-no-rj" alt=""></img>
                </div>
                <div className="text">
                    <h1  className="card-title">Оффисын ажилчдын үхлийн тоглоом</h1>
                    <p className="card-des">Red Burger</p>
                    <span className="sp">158K views * 1 day ago</span>
                </div>
            </div>
        </div>

    </div>

</>

  )
}

export default Card