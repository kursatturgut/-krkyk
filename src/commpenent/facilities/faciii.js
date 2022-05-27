import React from 'react'

export const Faciii = (props) => {
  return (
    <div class="col-lg-4 col-md-6 pb-1">
                    <div class="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: 30}}>
                        <i class={`flaticon-${props.icon} h1 font-weight-normal text-primary mb-3`}></i>
                        <div class="pl-4">
                            <h4>{props.title}</h4>
                            <p class="m-0">{props.desc}</p>
                        </div>
                    </div>
                    </div>
  )
}
