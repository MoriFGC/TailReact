import React, { useContext } from 'react'
import { ThemeContext } from '../modules/Modules';

 function Footer() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    
      let [themeCtx, setThemeCtx] = useContext(ThemeContext);
    


  return (

<footer className={classNames('mt-4 fixed bottom-0 w-full', themeCtx === 'dark' ? 'bg-slate-900' : 'bg-slate-100')}>
    <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src='src\assets\react.svg' alt='logo-react'/>
                <span className={classNames("self-center text-2xl font-semibold whitespace-nowrap ", themeCtx === 'dark' ? 'text-white' : '')}>Tailreact</span>
            </a>
            <ul className={classNames("flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0", themeCtx === 'dark' ? 'text-gray-400' : 'text-gray-500')}>
                <li>
                    <a href="#" className="hover:text-pink-400 me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-400 me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-400 me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-400">Contact</a>
                </li>
            </ul>
        </div>
        <hr className={classNames("my-6  sm:mx-auto lg:my-8", themeCtx === 'dark' ? 'border-gray-700' : 'border-gray-200')} />
        <span className={classNames("block text-sm  sm:text-center", themeCtx === 'dark' ? 'text-gray-400' : 'text-gray-500')}>© 2023 <a href="#" className="hover:underline">TailReact™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer;
