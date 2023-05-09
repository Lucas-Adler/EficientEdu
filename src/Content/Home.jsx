import React from "react"
import image01 from "../Images/Iso-office-2.png"


export default function Home() {
  return( 
      <section className="flex items-center justify-between lg:max-w-7xl lg:mx-auto max-w-full px-[8%] flex-wrap w-full lg:py-36 py-[20%] h-screen font-display" id="Home">
        <div className="flex flex-col items-start self-center max-w-sm">
            <h2 className="text-m font-semibold">Bem Vindo ao</h2>
            <h1 className="text-4xl font-bold">EficientEdu!</h1>
            <p className="font-regular text-primary-500 ">aplicativo com o objetivo de auxiliar no ensino de eficiencia energética em edificações.</p>
            <a href="#Sim">
            <button className="mt-5 mb-2 px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-primary-50
            text-black 
            hover:bg-secondary-300 hover:transition hover:ease-in hover:duration-200 hover:shadow-md
            dark:border-white rounded" href="#Sim">Começe Agora!</button></a>
            {/* <a href="http://www.google.com" className="italic text-primary-500">Saiba Mais -</a> */}
        </div>
        <div className="col-start-2 invisible">
          <img src={image01} className="justify-self-end lg:relative md:inset-0 lg:visible max-w-lg rounded" alt="logo" />
        </div>
      </section>
  )
}