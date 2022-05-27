import React from 'react'
import { Bölümm } from './bölümm'

export const Classtart = () => {
  return (
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">POPULER SINIFLAR</span></p>
                <h1 class="mb-4">ÖĞRENME SINIFLARIMIZ</h1>
            </div>
            <div class="row">

            <Bölümm 
             img="class-1.jpg" title="OKUL BAŞARISI" desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo" age="3 - 6 Years" seats="40 Seats" hour="08:00 - 10:00<" pay="290"/>    
               
               <Bölümm 
             img="class-2.jpg" title="KENDİNİ VE ÖĞRENME TARZINI KEŞFET" desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo" 
             age="3 - 6 Years" seats="40 Seats" hour="08:00 - 10:00<" pay="290"/>    

              <Bölümm 
             img="class-3.jpg" title="KENDİ KENDİNE ÖĞRENMEYİ ÖĞREN " desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo" 
             age="3 - 6 Years" seats="40 Seats" hour="08:00 - 10:00<" pay="290"/>    
            
               
                
            </div>
        </div>
    </div>


  )
}
