'use client' //

import React from 'react'
import { useState } from 'react'
import Benchmarks from './Benchmarks'
import CommunityMetrics from './CommunityMetrics'
import Ecosystem from './Ecosystem'
import NetworkMetrics from './NetworkMetrics'
import Overview from './Overview'
import Timeline from './Timeline'

export default function Router() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [screen, setScreen] = useState(0)
  return (
    <div className='text-white flex justify-between'>
      {
        mobileMenu == true ?
        <div id='mobile-nav' class="flex h-screen flex-col justify-between bg-[#202021] w-full md:w-auto md:hidden">
        <div class="px-4 py-6">
            <div className='flex justify-between'>
            <img src='https://waku.org/theme/image/logo.svg' className='w-20' />
            <button onClick={()=>setMobileMenu(false)} className='md:hidden'>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>
            </button>
          </div>

          <ul class="mt-6 space-y-1">
            <li>
              <div
                onClick={()=>{setScreen(0); setMobileMenu(false)}}
                className={screen == 0 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                Overview
              </div>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                  <span class="text-sm font-medium">Metrics</span>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <div
                onClick={()=>{setScreen(1); setMobileMenu(false)}}
                className={screen == 1 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                      >
                      Community
                    </div>
                  </li>

                  <li>
                    <div
                onClick={()=>{setScreen(2); setMobileMenu(false)}}
                className={screen == 2 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                      >
                      Network
                    </div>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                  <span class="text-sm font-medium"> Growth </span>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <div
                onClick={()=>{setScreen(3); setMobileMenu(false)}}
                className={screen == 3 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                      >
                      Timeline
                    </div>
                  </li>

                  <li>
                    <div
                onClick={()=>{setScreen(4); setMobileMenu(false)}}
                className={screen == 4 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                      >
                      Ecosystem
                    </div>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <div
                onClick={()=>{setScreen(5); setMobileMenu(false)}}
                className={screen == 5 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                Benchmarks
              </div>
            </li>

          </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t-4 border-e-4 border-[#202021]">
          <a href="#" class="flex items-center gap-2 bg-[#000000] p-4 hover:bg-gray-50 animate-pulse">
            <div
              class="h-10 w-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full object-cover"
              />

            <div>
              <p class="text-xs">
                <strong class="block font-medium">Live</strong>
              </p>
            </div>
          </a>
        </div>
      </div>
      :
      <div className='block md:hidden w-full'>
      <div id='mobile-header' className='flex justify-between w-full px-4 py-6'>
          <img src='https://waku.org/theme/image/logo.svg' className='w-20' />
          <button onClick={()=>setMobileMenu(true)} className='md:hidden'>
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
</svg>
          </button>
        </div>
              <div className='p-5 w-full'>
        {
          screen == 0 && <Overview /> || screen == 1 && <CommunityMetrics /> || screen == 2 && <NetworkMetrics /> || screen == 3 && <Timeline /> || screen == 4 && <Ecosystem /> || screen == 5 && <Benchmarks />
        }
      </div>
        </div>
  }
        <div className='hidden md:flex w-full'>

        <div id='desktop-nav' class="flex sticky top-0 h-screen flex-col justify-between bg-[#202021] w-full md:w-1/6 ">
        <div class="px-4 py-6">
            <div className='flex justify-between'>
            <img src='https://waku.org/theme/image/logo.svg' className='w-20' />
            <button onClick={()=>setMobileMenu(false)} className='md:hidden'>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>
            </button>
          </div>

          <ul class="mt-6 space-y-1">
            <li>
              <div
                onClick={()=>setScreen(0)}
                className={screen == 0 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                Overview
              </div>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                  <span class="text-sm font-medium">Metrics</span>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <div
                onClick={()=>setScreen(1)}
                className={screen == 1 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                      Community
                    </div>
                  </li>

                  <li>
                    <div
                onClick={()=>setScreen(2)}
                className={screen == 2 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                      Network
                    </div>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                  <span class="text-sm font-medium"> Growth </span>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <div
                onClick={()=>setScreen(3)}
                className={screen == 3 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                      Timeline
                    </div>
                  </li>

                  <li>
                    <div
                onClick={()=>setScreen(4)}
                className={screen == 4 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                      Ecosystem
                    </div>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <div
                onClick={()=>setScreen(5)}
                className={screen == 5 ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-black hover:text-white"}
                >
                Benchmarks
              </div>
            </li>

          </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-x-4 border-[#202021]">
          <a href="#" class="flex items-center gap-2 bg-[#000000] p-4 hover:bg-gray-50 animate-pulse rounded-lg">
            <div
              class="h-5 w-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full object-cover"
              />

            <div>
              <p class="text-xs">
                <strong class="block font-medium">Live</strong>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className='p-10 w-full'>
        {
          screen == 0 && <Overview /> || screen == 1 && <CommunityMetrics /> || screen == 2 && <NetworkMetrics /> || screen == 3 && <Timeline /> || screen == 4 && <Ecosystem /> || screen == 5 && <Benchmarks />
        }
      </div>
              </div>

    </div>
  )
}
