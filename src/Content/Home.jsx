import React from "react"
import image01 from "../Images/Iso-office-2.png"


export default function Home() {
  return( 
      <section className="flex items-center justify-between lg:max-w-[75%] lg:mx-auto max-w-full px-[8%] flex-wrap w-full py-[15%] h-fit font-display" id="Home">
        <div className="flex flex-col max-w-[310px]">

            <div id='text-home' className="text-center">
            <h2 className="text-2xl font-clashRegular pt-12 pl-3 text-left">Bem Vindo ao</h2>
            <h1 className="text-5xl font-clashSemi pb-5">EficientEdu!</h1>
            <p className="font-display text-primary-500 pb-16 leading-tight text-left pl-3">aplicativo com o objetivo de auxiliar no ensino de eficiencia energética</p>
            </div>

            <div id='buttton-home' className="pb-14 mx-auto">
            <a href="#Sim" className="mx-auto">
            <button className="mt-5 mb-2  mx-auto h-12 w-64  font-clashBold text-2xl tracking-wider border-2 bg-primary-50
            
            hover:bg-secondary-300 hover:transition hover:ease-in hover:duration-200 hover:shadow-md
            dark:border-white rounded-lg" href="#Sim">Começe Agora!</button></a>
            <br/>
            <a href="http://www.google.com" className="italic text-primary-500 mx-auto">Saiba Mais →</a> 
            </div>
        </div>
        <div className="col-start-2 ">
          <img src={image01} className="justify-self-end lg:relative md:inset-0 lg:visible max-w-full lg:max-w-lg lg:mr-12" alt="logo" />
        </div>
      </section>
  )
}