import React from 'react'
/* import resim2 from '../../assets/img/class-1.jpg' */

export const Bölümm = (props) => {
    
  return (
    <div class="col-lg-4 mb-5">
                    <div class="card border-0 bg-light shadow-sm pb-2">
                        <img class="card-img-top mb-2" src={`../../assets/img/${props.img}`} alt=""/>
                        <div class="card-body text-center">
                            <h4 class="card-title">{props.title}</h4>
                            <p class="card-text">{props.desc}</p>
                        </div>
                        <div class="card-footer bg-transparent py-4 px-5">
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                <div class="col-6 py-1">{props.age}</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                <div class="col-6 py-1">{props.seats}</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                <div class="col-6 py-1">{props.hour}</div>
                            </div>
                            <div class="row">
                                <div class="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                <div class="col-6 py-1">$ {props.pay} / Month</div>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                    </div>
                </div>
  )
}
