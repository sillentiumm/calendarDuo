
<template>
  <div class="main">
    <div class="main-left">
      <div class="main-left-header">
        <div 
          v-if="!user.room"
          class="main-bubble"
        >
          <!-- Воспользуйтесь настройками <br> для смены имени пользователя и вступлением в комнату -->
          Воспользуйтесь настройками для вступления в комнату
        </div>

        <div class="mobile">
          <div class="main-details-mini">
            <div class="main-details-block-mini main-details-messages"
              @click="this.contentVisible = 'messages'"
            >
              <svg class="main-details-img-mini" enable-background="new 0 0 494.001 494.001" viewBox="0 0 494.001 494.001" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m445.288 89.009h-396.579c-26.889.03-48.679 21.82-48.709 48.709v218.564c.03 26.888 21.82 48.679 48.709 48.709h396.579c26.89-.029 48.682-21.819 48.712-48.709v-218.564c-.03-26.889-21.822-48.679-48.712-48.709zm-112.464 157.991 140.458-118.303c.943 2.914 1.422 5.958 1.421 9.02v218.564c.001 3.062-.478 6.106-1.42 9.02zm112.464-138.694c5.822-.006 11.513 1.725 16.346 4.972l-214.634 180.781-214.634-180.781c4.832-3.247 10.523-4.978 16.344-4.971zm-424.569 256.999c-.943-2.915-1.422-5.959-1.421-9.022v-218.565c-.001-3.062.479-6.107 1.421-9.021l140.456 118.303zm27.99 20.39c-5.82.008-11.511-1.722-16.343-4.967l143.786-121.108 64.632 54.436c3.591 3.025 8.84 3.025 12.431 0l64.632-54.437 143.785 121.103c-4.832 3.247-10.523 4.979-16.345 4.972h-396.578z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></g></g></svg>
            </div>
            <div class="main-details-block-mini main-details-settings"
              @click="this.contentVisible = 'settings'"
            >
              <svg class="main-details-img-mini" viewBox="0 0 24 24"><path d="M17.18268,15a2,2,0,1,0,2,2A2.0026,2.0026,0,0,0,17.18268,15Zm0,3a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,17.18268,18Zm5.2832-2.10645a.9907.9907,0,0,0-.10058-.75878l-.97559-1.69141a1.00176,1.00176,0,0,0-1.36621-.36524l-.84082.44629V12.5a1.00067,1.00067,0,0,0-1-1h-2a1.00067,1.00067,0,0,0-1,1l-.00977,1.05762-.831-.48047a1.00208,1.00208,0,0,0-1.36524.36719l-.97754,1.6914a1.00209,1.00209,0,0,0,.36719,1.36524l.81836.52539-.81933.47265a1.00238,1.00238,0,0,0-.36524,1.36621l.97559,1.68946a1.00086,1.00086,0,0,0,1.36718.36719l.83985-.47266V21.5a1.00067,1.00067,0,0,0,1,1h2a1.00067,1.00067,0,0,0,1-1l.00781-1.04395.0127-.00781.82129.47461a1.0049,1.0049,0,0,0,1.36523-.36719l.97559-1.68945A1.00106,1.00106,0,0,0,22.001,17.499h-.001l-.81055-.53027L22.001,16.501A.99369.99369,0,0,0,22.46588,15.89355Zm-1.77637.21a1.03713,1.03713,0,0,0,0,1.793l.81055.46778-.97656,1.69238-.83008-.47949a.97048.97048,0,0,0-.97168-.00391l-.03613.01953a.98977.98977,0,0,0-.50293.85645V21.5h-2V20.44922a.99144.99144,0,0,0-.51172-.86133,1.02984,1.02984,0,0,0-.51465-.13965.95855.95855,0,0,0-.4834.12891l-.831.47851-.97559-1.6914.81641-.47168a1.04583,1.04583,0,0,0,.002-1.78418l-.81933-.47363.97753-1.69141.82813.47852a1.0012,1.0012,0,0,0,1.00684-.01368.988.988,0,0,0,.50488-.85742V12.5h2v1.05078a.98869.98869,0,0,0,.5039.85645l.00879.00488a.98933.98933,0,0,0,.998.01074l.83106-.47851.97558,1.6914ZM10.00006,7.3125a2.99121,2.99121,0,1,0,2.99121,2.99121A2.99453,2.99453,0,0,0,10.00006,7.3125Zm0,4.98242a1.99121,1.99121,0,1,1,1.99121-1.99121A1.99385,1.99385,0,0,1,10.00006,12.29492Zm-6.70019,3.75-1.6211-2.80859A1.33207,1.33207,0,0,1,2.1651,11.419l1.36035-.78516a.36534.36534,0,0,0,.16309-.3252.37132.37132,0,0,0-.16309-.335L2.1651,9.18848a1.33023,1.33023,0,0,1-.48633-1.81641l1.6211-2.80859a1.33239,1.33239,0,0,1,1.8164-.48828l1.37988.79687a.33169.33169,0,0,0,.32715-.01758l.01075-.00683a.32248.32248,0,0,0,.1748-.27149V2.83008A1.3316,1.3316,0,0,1,8.33893,1.5h3.32226a1.3316,1.3316,0,0,1,1.33008,1.33008V4.57617a.32465.32465,0,0,0,.17383.27149c.01367.00781.02734.01562.03906.02343a.31738.31738,0,0,0,.29883.001l1.37988-.7959a1.33445,1.33445,0,0,1,1.81739.48731l1.62109,2.80859A1.33023,1.33023,0,0,1,17.835,9.18848l-1.3457.77636c-.01477.00855-.02167.02485-.035.03516H15.35278a1.35908,1.35908,0,0,1,.63654-.90039l1.3457-.77637a.33165.33165,0,0,0,.1211-.45117L15.835,5.06348a.33027.33027,0,0,0-.45312-.1211L14.004,5.7373a1.36554,1.36554,0,0,1-2.0127-1.16113V2.83008A.33093.33093,0,0,0,11.66119,2.5H8.33893a.33093.33093,0,0,0-.33008.33008V4.57617a1.3104,1.3104,0,0,1-.67676,1.13867c-.01465.00879-.03027.01661-.0459.02442a1.31994,1.31994,0,0,1-1.291-.002L4.61725,4.94141a.334.334,0,0,0-.45215.12207L2.544,7.87207a.33164.33164,0,0,0,.12109.45117l1.36035.78516a1.40889,1.40889,0,0,1,0,2.39062l-1.36035.78516a.33256.33256,0,0,0-.12109.45215L4.1651,15.54492a.33392.33392,0,0,0,.45215.1211l1.3789-.7959a1.30045,1.30045,0,0,1,1.32422.0166c.01368.00781.02735.01562.03907.02344a1.30977,1.30977,0,0,1,.64941,1.12109v1.74609a.33093.33093,0,0,0,.33008.33008H10v1H8.33893a1.3316,1.3316,0,0,1-1.33008-1.33008V16.03125a.32155.32155,0,0,0-.17578-.27148.33423.33423,0,0,0-.33594-.02442l-1.37988.7959A1.33037,1.33037,0,0,1,3.29987,16.04492Z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>
            </div>          
            <div class="main-details-block-mini main-details-customization"
              @click="this.contentVisible = 'theme'"
            >
              <svg class="main-details-img-mini" viewBox="0 0 60 60"><path d="m14.474 37.111-10.712 7.26a8.55 8.55 0 0 0 4.777 15.629h.008a8.467 8.467 0 0 0 6.027-2.478 8.052 8.052 0 0 0 1.055-1.283l7.26-10.713a2.054 2.054 0 0 1 2.711-.626 34.965 34.965 0 0 1 5.7 4.156 3.025 3.025 0 0 0 4.158-.118l2.2-2.2 7.179-7.179a2.013 2.013 0 0 0 .514-1.946 93.076 93.076 0 0 1 13.293-11.147 3.016 3.016 0 0 0 .69-4.408l-.152-.2a121.453 121.453 0 0 0 -10.03-11.013 119.552 119.552 0 0 0 -10.881-9.918l-.331-.263a3.028 3.028 0 0 0 -2.34-.629 3.059 3.059 0 0 0 -2.063 1.321 92.974 92.974 0 0 1 -11.137 13.287 2.015 2.015 0 0 0 -1.946.514l-7.179 7.179-2.2 2.2a3.021 3.021 0 0 0 -.125 4.151 34.95 34.95 0 0 1 4.161 5.7 2.054 2.054 0 0 1 -.637 2.724zm20.726-34.642a1.036 1.036 0 0 1 .705-.457 1 1 0 0 1 .787.212l.342.271a117.837 117.837 0 0 1 10.708 9.767 119.744 119.744 0 0 1 9.858 10.816l.178.232a1 1 0 0 1 .215.789 1.028 1.028 0 0 1 -.456.7 94.739 94.739 0 0 0 -13.39 11.19l-2.174-2.174a111.937 111.937 0 0 1 10.66-9.266 1 1 0 1 0 -1.1-1.668c-2.558 1.689-8.131 6.757-10.972 9.52l-2.173-2.173c2.563-2.463 8.188-7.528 11.39-9.986a1 1 0 0 0 -1.216-1.586c-3.263 2.5-8.99 7.66-11.589 10.158l-2.185-2.185 11.5-11.5a1 1 0 1 0 -1.414-1.414l-11.5 11.5-2.183-2.184c2.373-2.451 5.775-6.312 10.155-11.529a1 1 0 1 0 -1.531-1.285c-4.34 5.168-7.7 8.986-10.038 11.4l-2.177-2.169a85.316 85.316 0 0 0 9.513-10.969 1 1 0 0 0 -1.663-1.112 85.492 85.492 0 0 1 -9.266 10.667l-2.177-2.176a94.7 94.7 0 0 0 11.193-13.389zm-13.3 14.1 3.586 3.587 3.586 3.586 3.587 3.587 3.585 3.586 3.584 3.584 3.586 3.585a.028.028 0 0 1 0 .028l-1.92 1.919-21.539-21.531zm-3.355 3.341 21.555 21.559-3.138 3.138-21.562-21.563zm-1.693 13.51a37.04 37.04 0 0 0 -4.415-6.059 1.024 1.024 0 0 1 .045-1.407l1.5-1.5 21.561 21.567-1.5 1.5a1.023 1.023 0 0 1 -1.414.038 37.183 37.183 0 0 0 -6.056-4.409 4.045 4.045 0 0 0 -5.345 1.258l-7.253 10.706a6.271 6.271 0 0 1 -.8.985 6.49 6.49 0 0 1 -4.628 1.901h-.007a6.547 6.547 0 0 1 -3.657-11.973l10.717-7.259a4.046 4.046 0 0 0 1.252-5.348z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="main-calendar">
        <div class="calendar__title">
          <div 
          @click="decrementCalendar"
            class="calemdar-arrow__left">
          </div>
          <div> {{ currentMonth }}  {{ currentYear }}</div>
          <div 
            @click="incremectCalendar"
            class="calemdar-arrow__right">
          </div>
        </div>
        <div class="calendar">
          <div class="calendar-table">
            <div v-for="item in calendarDaysTitle" class="calendar_cell calendar_cell_up">
              {{ item }}
            </div>
            <div 
              v-for="item in calendarDays" 
              @click="routerCalenar(item)"
              class="calendar_cell"
            >
              {{ item }}
            </div>
            <div 
              v-if="calendarExtraWeek"
              v-for="item in 7" class="calendar_cell calendar_cell_invissible">
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="main-right desktop">
      <div class="main-right-header">
        <div class="main-details">
          <div class="main-details-block main-details-messages"
            @click="this.contentVisible = 'messages'"
          >
            <svg class="main-details-img" enable-background="new 0 0 494.001 494.001" viewBox="0 0 494.001 494.001" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m445.288 89.009h-396.579c-26.889.03-48.679 21.82-48.709 48.709v218.564c.03 26.888 21.82 48.679 48.709 48.709h396.579c26.89-.029 48.682-21.819 48.712-48.709v-218.564c-.03-26.889-21.822-48.679-48.712-48.709zm-112.464 157.991 140.458-118.303c.943 2.914 1.422 5.958 1.421 9.02v218.564c.001 3.062-.478 6.106-1.42 9.02zm112.464-138.694c5.822-.006 11.513 1.725 16.346 4.972l-214.634 180.781-214.634-180.781c4.832-3.247 10.523-4.978 16.344-4.971zm-424.569 256.999c-.943-2.915-1.422-5.959-1.421-9.022v-218.565c-.001-3.062.479-6.107 1.421-9.021l140.456 118.303zm27.99 20.39c-5.82.008-11.511-1.722-16.343-4.967l143.786-121.108 64.632 54.436c3.591 3.025 8.84 3.025 12.431 0l64.632-54.437 143.785 121.103c-4.832 3.247-10.523 4.979-16.345 4.972h-396.578z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></g></g></svg>
          </div>
          <div class="main-details-block main-details-settings"
            @click="this.contentVisible = 'settings'"
          >
            <svg class="main-details-img" viewBox="0 0 24 24"><path d="M17.18268,15a2,2,0,1,0,2,2A2.0026,2.0026,0,0,0,17.18268,15Zm0,3a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,17.18268,18Zm5.2832-2.10645a.9907.9907,0,0,0-.10058-.75878l-.97559-1.69141a1.00176,1.00176,0,0,0-1.36621-.36524l-.84082.44629V12.5a1.00067,1.00067,0,0,0-1-1h-2a1.00067,1.00067,0,0,0-1,1l-.00977,1.05762-.831-.48047a1.00208,1.00208,0,0,0-1.36524.36719l-.97754,1.6914a1.00209,1.00209,0,0,0,.36719,1.36524l.81836.52539-.81933.47265a1.00238,1.00238,0,0,0-.36524,1.36621l.97559,1.68946a1.00086,1.00086,0,0,0,1.36718.36719l.83985-.47266V21.5a1.00067,1.00067,0,0,0,1,1h2a1.00067,1.00067,0,0,0,1-1l.00781-1.04395.0127-.00781.82129.47461a1.0049,1.0049,0,0,0,1.36523-.36719l.97559-1.68945A1.00106,1.00106,0,0,0,22.001,17.499h-.001l-.81055-.53027L22.001,16.501A.99369.99369,0,0,0,22.46588,15.89355Zm-1.77637.21a1.03713,1.03713,0,0,0,0,1.793l.81055.46778-.97656,1.69238-.83008-.47949a.97048.97048,0,0,0-.97168-.00391l-.03613.01953a.98977.98977,0,0,0-.50293.85645V21.5h-2V20.44922a.99144.99144,0,0,0-.51172-.86133,1.02984,1.02984,0,0,0-.51465-.13965.95855.95855,0,0,0-.4834.12891l-.831.47851-.97559-1.6914.81641-.47168a1.04583,1.04583,0,0,0,.002-1.78418l-.81933-.47363.97753-1.69141.82813.47852a1.0012,1.0012,0,0,0,1.00684-.01368.988.988,0,0,0,.50488-.85742V12.5h2v1.05078a.98869.98869,0,0,0,.5039.85645l.00879.00488a.98933.98933,0,0,0,.998.01074l.83106-.47851.97558,1.6914ZM10.00006,7.3125a2.99121,2.99121,0,1,0,2.99121,2.99121A2.99453,2.99453,0,0,0,10.00006,7.3125Zm0,4.98242a1.99121,1.99121,0,1,1,1.99121-1.99121A1.99385,1.99385,0,0,1,10.00006,12.29492Zm-6.70019,3.75-1.6211-2.80859A1.33207,1.33207,0,0,1,2.1651,11.419l1.36035-.78516a.36534.36534,0,0,0,.16309-.3252.37132.37132,0,0,0-.16309-.335L2.1651,9.18848a1.33023,1.33023,0,0,1-.48633-1.81641l1.6211-2.80859a1.33239,1.33239,0,0,1,1.8164-.48828l1.37988.79687a.33169.33169,0,0,0,.32715-.01758l.01075-.00683a.32248.32248,0,0,0,.1748-.27149V2.83008A1.3316,1.3316,0,0,1,8.33893,1.5h3.32226a1.3316,1.3316,0,0,1,1.33008,1.33008V4.57617a.32465.32465,0,0,0,.17383.27149c.01367.00781.02734.01562.03906.02343a.31738.31738,0,0,0,.29883.001l1.37988-.7959a1.33445,1.33445,0,0,1,1.81739.48731l1.62109,2.80859A1.33023,1.33023,0,0,1,17.835,9.18848l-1.3457.77636c-.01477.00855-.02167.02485-.035.03516H15.35278a1.35908,1.35908,0,0,1,.63654-.90039l1.3457-.77637a.33165.33165,0,0,0,.1211-.45117L15.835,5.06348a.33027.33027,0,0,0-.45312-.1211L14.004,5.7373a1.36554,1.36554,0,0,1-2.0127-1.16113V2.83008A.33093.33093,0,0,0,11.66119,2.5H8.33893a.33093.33093,0,0,0-.33008.33008V4.57617a1.3104,1.3104,0,0,1-.67676,1.13867c-.01465.00879-.03027.01661-.0459.02442a1.31994,1.31994,0,0,1-1.291-.002L4.61725,4.94141a.334.334,0,0,0-.45215.12207L2.544,7.87207a.33164.33164,0,0,0,.12109.45117l1.36035.78516a1.40889,1.40889,0,0,1,0,2.39062l-1.36035.78516a.33256.33256,0,0,0-.12109.45215L4.1651,15.54492a.33392.33392,0,0,0,.45215.1211l1.3789-.7959a1.30045,1.30045,0,0,1,1.32422.0166c.01368.00781.02735.01562.03907.02344a1.30977,1.30977,0,0,1,.64941,1.12109v1.74609a.33093.33093,0,0,0,.33008.33008H10v1H8.33893a1.3316,1.3316,0,0,1-1.33008-1.33008V16.03125a.32155.32155,0,0,0-.17578-.27148.33423.33423,0,0,0-.33594-.02442l-1.37988.7959A1.33037,1.33037,0,0,1,3.29987,16.04492Z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>
          </div>          
          <div class="main-details-block main-details-customization"
            @click="this.contentVisible = 'theme'"
          >
            <svg class="main-details-img" viewBox="0 0 60 60"><path d="m14.474 37.111-10.712 7.26a8.55 8.55 0 0 0 4.777 15.629h.008a8.467 8.467 0 0 0 6.027-2.478 8.052 8.052 0 0 0 1.055-1.283l7.26-10.713a2.054 2.054 0 0 1 2.711-.626 34.965 34.965 0 0 1 5.7 4.156 3.025 3.025 0 0 0 4.158-.118l2.2-2.2 7.179-7.179a2.013 2.013 0 0 0 .514-1.946 93.076 93.076 0 0 1 13.293-11.147 3.016 3.016 0 0 0 .69-4.408l-.152-.2a121.453 121.453 0 0 0 -10.03-11.013 119.552 119.552 0 0 0 -10.881-9.918l-.331-.263a3.028 3.028 0 0 0 -2.34-.629 3.059 3.059 0 0 0 -2.063 1.321 92.974 92.974 0 0 1 -11.137 13.287 2.015 2.015 0 0 0 -1.946.514l-7.179 7.179-2.2 2.2a3.021 3.021 0 0 0 -.125 4.151 34.95 34.95 0 0 1 4.161 5.7 2.054 2.054 0 0 1 -.637 2.724zm20.726-34.642a1.036 1.036 0 0 1 .705-.457 1 1 0 0 1 .787.212l.342.271a117.837 117.837 0 0 1 10.708 9.767 119.744 119.744 0 0 1 9.858 10.816l.178.232a1 1 0 0 1 .215.789 1.028 1.028 0 0 1 -.456.7 94.739 94.739 0 0 0 -13.39 11.19l-2.174-2.174a111.937 111.937 0 0 1 10.66-9.266 1 1 0 1 0 -1.1-1.668c-2.558 1.689-8.131 6.757-10.972 9.52l-2.173-2.173c2.563-2.463 8.188-7.528 11.39-9.986a1 1 0 0 0 -1.216-1.586c-3.263 2.5-8.99 7.66-11.589 10.158l-2.185-2.185 11.5-11.5a1 1 0 1 0 -1.414-1.414l-11.5 11.5-2.183-2.184c2.373-2.451 5.775-6.312 10.155-11.529a1 1 0 1 0 -1.531-1.285c-4.34 5.168-7.7 8.986-10.038 11.4l-2.177-2.169a85.316 85.316 0 0 0 9.513-10.969 1 1 0 0 0 -1.663-1.112 85.492 85.492 0 0 1 -9.266 10.667l-2.177-2.176a94.7 94.7 0 0 0 11.193-13.389zm-13.3 14.1 3.586 3.587 3.586 3.586 3.587 3.587 3.585 3.586 3.584 3.584 3.586 3.585a.028.028 0 0 1 0 .028l-1.92 1.919-21.539-21.531zm-3.355 3.341 21.555 21.559-3.138 3.138-21.562-21.563zm-1.693 13.51a37.04 37.04 0 0 0 -4.415-6.059 1.024 1.024 0 0 1 .045-1.407l1.5-1.5 21.561 21.567-1.5 1.5a1.023 1.023 0 0 1 -1.414.038 37.183 37.183 0 0 0 -6.056-4.409 4.045 4.045 0 0 0 -5.345 1.258l-7.253 10.706a6.271 6.271 0 0 1 -.8.985 6.49 6.49 0 0 1 -4.628 1.901h-.007a6.547 6.547 0 0 1 -3.657-11.973l10.717-7.259a4.046 4.046 0 0 0 1.252-5.348z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>
          </div>
        </div>
      </div>

      <div class="main-right-content main-right-content-settings"
        v-if="this.contentVisible == 'settings'"
      >
        <h3 class="main-right-content__title" >Настройки</h3>
        <div class="main-right-content__list">{{ user.name }}</div>
        <div v-if="user.room" class="main-right-content__list">комната: {{ user.room }}</div>
        <div></div>
        <div 
          class="main-form-data" 
        >
          <form 
            @submit.prevent="createRoom"
            v-if="!user.room"
            class="main-form-input main-form-data-flex"
          >
            <div>
              Создать комнату
            </div>
            <div>
              <input 
                type="text"
                placeholder="Название комнаты"
                v-model="create_room_form.name"
              />
              <input 
                class="main-form-btn" 
                type="submit"
                value="✔"
              />
            </div>
            
            
          </form>

          <form 
            @submit.prevent="joinRoom" 
            v-if="!user.room"
            class="main-form-input main-form-data-flex"
          >
            <div>Вступить в комнату</div>
            <div>
              <input 
                type="text"
                placeholder="Название комнаты"
                v-model="join_room_form.name"
              />
              <input 
                class="main-form-btn" 
                type="submit"
                value="✔"
              />
            </div>
          </form>

          <button 
            @click="$store.dispatch('logout')"
            class="main-form-logout"
          >
            Выйти из аккаунта
          </button>
        </div>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
      <div class="main-right-content main-right-content-messages"
        v-if="this.contentVisible == 'messages'"
      >
        <h3 class="main-right-content__title">Последние сообщения</h3>
      <div v-for="(item, index) in $store.state.allMessages"
        class="allMessages__element"
      >
        {{ item.name }} {{ item.day }} {{ item.month.slice(0, -1) + 'я' }}: {{ item.message }}
      </div>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
      <div class="main-right-content main-right-content-theme"
        v-if="this.contentVisible == 'theme'"
      >
      <h3 class="main-right-content__title">В разработке</h3>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
    </div>
    <div  v-if="this.contentVisible == 'messages'" class="main-mobile">
      <div class="main-mobile-content">
        <h3 class="main-right-content__title">Последние сообщения</h3>
        <div v-for="(item, index) in $store.state.allMessages"
        class="allMessages__element"
      >
        {{ item.name }} {{ item.day }} {{ item.month.slice(0, -1) + 'я' }}: {{ item.message }}
      </div>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
    </div>

    <div  v-if="this.contentVisible == 'theme'" class="main-mobile">
      <div class="main-mobile-content">
        <h3 class="main-right-content__title">В разработке</h3>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
    </div>

    <div v-if="this.contentVisible == 'settings'" class="main-mobile">
      <div class="main-mobile-content"
      >
        <h3 class="main-right-content__title" >Настройки</h3>
        <div class="main-right-content__list">{{ user.name }}</div>
        <div v-if="user.room" class="main-right-content__list">комната: {{ user.room }}</div>
        <div></div>
        <div 
          class="main-form-data" 
        >
          <form 
            @submit.prevent="createRoom"
            v-if="!user.room"
            class="main-form-input main-form-data-flex"
          >
            <div>
              Создать комнату
            </div>
            <div>
              <input 
                type="text"
                placeholder="Название комнаты"
                v-model="create_room_form.name"
              />
              <input 
                class="main-form-btn" 
                type="submit"
                value="✔"
              />
            </div>
          </form>

          <form 
            @submit.prevent="joinRoom" 
            v-if="!user.room"
            class="main-form-input main-form-data-flex"
          >
            <div>Вступить в комнату</div>
            <div>
              <input 
                type="text"
                placeholder="Название комнаты"
                v-model="join_room_form.name"
              />
              <input 
                class="main-form-btn" 
                type="submit"
                value="✔"
              />
            </div>
          </form>

          <button 
            @click="$store.dispatch('logout')"
            class="main-form-logout"
          >
            Выйти из аккаунта
          </button>
        </div>
        <div class="main-right-content__exit"
          @click="this.contentVisible = null"
        >
          ✖
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'
import router from '../router/router'

export default {
  setup() {
    const store = useStore()
    const create_room_form =({ref})
    const join_room_form =({ref})
    const change_name_form = ({ref})

    const createRoom = () => {
      if(create_room_form.name) store.dispatch('createRoom', create_room_form.name)
      else alert('Введите название комнаты')
    }

    const joinRoom = () => {
      if(join_room_form.name) store.dispatch('joinRoom', join_room_form.name)
      else alert('Введите название комнаты')
    }

    const specValue = () => {
      store.dispatch('onValueCurrentRoom')
    }

    // const changeName = () => {
    //   store.dispatch('changeName', change_name_form)
    // }

    return {
      create_room_form,
      join_room_form,
      createRoom,
      joinRoom,
      specValue,
      // changeName,
    }
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        room: null,
      },
      calendarDaysTitle: [
        'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
      ],
      calendarDays: [],
      calendarMonth: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      calendarExtraWeek: false,
      currentDate: null,
      currentMonth: '',
      currentYear: '',
      
      contentVisible: null
    }
  },
  methods: {
    createCalendar(currentDate) {
      let mon = currentDate.getMonth() 
      let year = currentDate.getFullYear()
      Date.prototype.daysInMonth = function() {
		    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	    };
      function getDay(date) {
        let day = date.getDay()
        if(day==0) day =7
        return day-1
      }
      let d = new Date(year, mon)
      for(let i=0; i<getDay(d); i++) {
        this.calendarDays.push('')
      }
      for(let j=0; j<d.daysInMonth(); j++) {
        this.calendarDays.push(j+1)
      }
      while (this.calendarDays.length % 7 !== 0) {
        this.calendarDays.push('')
      }
      if(this.calendarDays.length == 35) {
        this.calendarExtraWeek = true
      }
      else {
        this.calendarExtraWeek = false
      }
    },
    incremectCalendar() {
      let month = this.currentDate.getMonth() + 1
      let year = this.currentDate.getFullYear()
      if (month == 12) {
        month = 0
        year++
      }
      this.updateCalendar(month, year)
    },

    decrementCalendar() {
      let month = this.currentDate.getMonth() - 1
      let year = this.currentDate.getFullYear()
      if (month == -1) {
        month = 11
        year--
      }
      this.updateCalendar(month, year)
    },

    updateCalendar(month, year) {
      this.calendarDays = []
      this.currentDate = new Date (year, month)
      this.currentMonth = this.calendarMonth[this.currentDate.getMonth()]
      this.currentYear = this.currentDate.getFullYear()
      this.createCalendar(this.currentDate)
    },

    routerCalenar(day) {
      if(this.user.room) router.push({ name: 'details', query: { year:this.currentYear , month: this.currentMonth, day: day}})
    },

    setVisibleSettings() {
      this.contentVisible = 'settings'
    }
  },
  async beforeMount() {
    const store = useStore()
    this.user.name = await localStorage.name
    this.user.email = await localStorage.email
    this.user.room = await localStorage.room

    this.currentDate = new Date()
    this.currentMonth = this.calendarMonth[this.currentDate.getMonth()]
    this.currentYear = this.currentDate.getFullYear()

    this.createCalendar(this.currentDate)
    this.specValue()
  }
}

</script>