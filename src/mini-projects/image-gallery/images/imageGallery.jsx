import React from 'react'
import Img1 from '../images/image1.jpg'
import Img2 from '../images/image2.jpg'
import Img3 from '../images/image3.jpg'
import Img4 from '../images/image4.jpg'
import Img5 from '../images/image5.jpg'
import Img6 from '../images/image6.jpg'

function ImageGallery() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-sky-100 font-medium'>
    {/* Card Container */}
      <div className='bg-white rounded-xl shadow-2xl p-6 m-3 space-y-10 md:p-40'>
      {/* Menu Nav */}
      <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md: mb-24 md:justify-end'>
      <div className='group'>
        <button>Vector</button>
        <div className=' mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
      </div>
      <div className='group'>
        <button>Illustrations</button>
        <div className=' mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
      </div>
      <div className='group'>
        <button>Images</button>
        <div className=' mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
      </div>
      <div className='group'>
        <button>Icons</button>
        <div className=' mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
      </div>
      </div>
      {/* Menu Nav End */}

      {/* Search Container */}
      <div className='flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0'>
        <div className='flex items-center justify-between border-b'>
          <input placeholder='Search' type="text" className=' ml-6 border-none md:w-80 font-normal focus:outline-none'/>
          <svg class="text-gray-300 w-8 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        <button className='bg-black text-white rounded-lg py-3 w-full text-lg shadow-md border border-black hover:bg-white hover:text-black hover:shadow-2xl md:px-12 md:w-auto duration-200'>Upload</button>
      </div>
      {/* Search Container End */}
      
      {/* Gallery Container */}
      <div className='grid gap-4 md:grid-cols-3'>
      {/* Image 1 */}
        <div className='relative group'>
          <img src={Img1} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 1 End */}

        {/* Image 2 */}
        <div className='relative group'>
          <img src={Img2} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 2 End */}

        {/* Image 3 */}
        <div className='relative group'>
          <img src={Img3} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 3 End */}

        {/* Image 4 */}
        <div className='relative group'>
          <img src={Img4} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 4 End */}

        {/* Image 5 */}
        <div className='relative group'>
          <img src={Img5} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 5 End */}

        {/* Image 7 */}
        <div className='relative group'>
          <img src={Img6} alt='img' className='w-72'/>

          {/* Hover Container */}
          <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
            <div className='flex justify-between'>
            
            <div> {/* Text Div */}
              <p className='text-sm'>Abstract Painting</p>
              <p className='text-xs'>200 likes - 100 Shares</p>
            </div>

              <div className='flex items-center'> {/* Bookmark Div */}
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
            </button>
            </div>
            </div>
            
          </div>
          {/* Hover Container End */}
        </div>
        {/* Image 7 End */}
      </div>
      {/* Gallery Container End */}

      </div>
      {/* Card Container End */}
    </div>
  )
}

export default ImageGallery