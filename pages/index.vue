<template lang="pug">
body
  header
    a.logo(href="#")
      vue-typer.vue-typer(:text='["Apiwit","Thammachai"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
    ul
      li
        a(href="#" class="active") Home
      li
        a(href="#projects") Projects
      li
        a(href="#aboutme") About me
      li
        a(href="#contact") Contact
      li
        img.w-10.h-10(id="icon" src="~//static/img/play.png")
        audio(id="myAudio")
          source(src="/music/BEAUZ & JVNA - Crazy.mp3" type="audio/mp3")
  section.sunset
    img(id="stars" src="~//static/img/star.png")
    img(id="wind" src="~//static/img/wind.png")
    img(id="light" src="~//static/img/light.png")
    img(id="sunset" src="~//static/img/sunset.png")
    img(id="land" src="~//static/img/land.png")
    img(src="~//static/img/gra.png")
    img.smallBalloon(id="small_balloon" src="~//static/img/balloon2.png")
    img(id="left_could" src="~//static/img/left_could.png")
    img(id="right_could" src="~//static/img/right_could.png")
    h2(id="text") Hi There!
    img.balloon(id="big_balloon" src="~//static/img/balloon.png")
  .sec(id="projects")
    .project.h-full.w-full.p-5.space-y-6
      .flex.justify-between
        .title(data-aos="fade-down")
          vue-typer#title.uppercase.vue-typer(:text='["Projects"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
          .bg-white.h-2.w-28
        a(href="https://github.com/axonapiwit?tab=repositories" target="_blank" data-aos="fade-left"
          data-aos-anchor="#trigger-left").justify-end.flex.justify-center.cursor-pointer
          .bg-black.p-4.rounded-md.h-10.w-32.flex.items-center.justify-center
            h3.text-white  View More
      .works.grid.grid-cols-3.gap-4
        a(href="https://github.com/axonapiwit/educate_discord_bot" target="_blank" data-aos="fade-up").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/document.png")
            h3.font-bold educate_discord_bot
          .text-center.space-y-3
            h3 It is a bot for studying, such as viewing the class schedule, develop by discord js
            .flex.justify-center.items-center.space-x-3
              .bg-yellow-300.w-4.h-4.rounded-full
              h3.text-left JavaScript
        a(href="https://github.com/axonapiwit/pet_lover" target="_blank" data-aos="fade-down").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/apps.png")
            h3.font-bold pet_lover
          .text-center.space-y-3
            h3 An application to provide homes for dogs and cats, useing flutter and firebase.
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/flutter_covid-19" target="_blank" data-aos="fade-left").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/apps.png")
            h3.font-bold flutter_covid-19
          .text-center.space-y-3
            h3 An application that can view the number of Covid-19 infections in Thailand using Sunday API.
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/smartdoc" target="_blank" data-aos="fade-right").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/apps.png")
            h3.font-bold smartdoc
          .text-center.space-y-3
            h3 Mid-Term work of Mobile Application Development course
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/NestJSProject" target="_blank" data-aos="fade-up").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/website.png")
            h3.font-bold NestJSProject
          .text-center.space-y-3
            h3 Homework to practice logic provided by the company during the summer internship
            .flex.justify-center.items-center.space-x-3
              .bg-gray-500.w-4.h-4.rounded-full
              h3.text-left TypeScript
        a(href="https://github.com/axonapiwit/ClanningServiceWebBooking" target="_blank" id="trigger-left" data-aos="fade-left").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/icons/website.png")
            h3.font-bold ClanningServiceWebBooking
          .text-center.space-y-3
            h3 Websites to recruit housewives around the university It is a work of the 1st year.
            .flex.justify-center.items-center.space-x-3
              .bg-yellow-700.w-4.h-4.rounded-full
              h3.text-left HTML
  section.fullmoon
    img(id="stars_night" src="~//static/img/star_night.png")
    img(id="moon" src="~//static/img/moon.png")
    img(src="~//static/img/land_night.png")
    img.could(id="could" src="~//static/img/could_night.png")
    img(id="big_balloon_night" src="~//static/img/balloon_night.png")
    img(id="small_balloon_night" src="~//static/img/balloon_night2.png")
  .content(id="aboutme")
    .block-content.space-y-10
      .title(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["About Me"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-28
      .subTitle.flex.items-center
        vue-typer.vue-typer(:text='["UI/UX Designer & Frontend Developer from Chiangrai, Thailand.","I aim to make a difference through my creative solution."]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
      .info(data-aos="fade-down")
        .grid.grid-cols-2.gap-4
          p <b>Name</b> : Apiwit Thammachai
          p <b>Date of birth</b> : February 13, 2000
          p <b>Address</b> : 203 House, Chiangrai City, Thailand County.
          p <b>Email</b> : axon.apiwit@gmail.com
          p <b>Phone</b> : + 66 951 862 791
          p <b>Skype</b> : Apiwit Thammachai
          p <b>Interest</b> : Frontend
      .title#skills(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["Skills"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-20
      .grid.grid-cols-7.gap-4
        .col-span-3
          img#developer(src="~//static/img/3800.png" data-aos="fade-left")
        .col-span-4.order-1.space-y-5
          h3.text-4xl What i do
            .show.space-y-3(v-if="show")
              .flex.flex-col.text-lg
                .flex.space-x-2.items-center
                  .bg-red-500.p-2.rounded-md.h-5.w-5
                  p Junior
                .flex.space-x-2.items-center
                  .bg-yellow-300.p-2.rounded-md.h-5.w-5
                  p Expert
                .flex.space-x-2.items-center
                  .bg-green-500.p-2.rounded-md.h-5.w-5
                  p Master
              .design.space-y-2
                h3.text-2xl Design
                .bg-white.h-1.w-20
              .text-center.flex.space-x-5.space-y-5.mt-3.flex-wrap
                span
                span(class="hover:text-green-500 text-gray-300")
                  svg(fill="currentColor" width="50px" height="50px" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg")
                    path(fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM19.2 38.4C21.851 38.4 24 36.251 24 33.6V28.8H19.2C16.549 28.8 14.4 30.949 14.4 33.6C14.4 36.251 16.549 38.4 19.2 38.4ZM14.4 24C14.4 26.651 16.549 28.8 19.2 28.8H24V19.2H19.2C16.549 19.2 14.4 21.349 14.4 24ZM14.4 14.4C14.4 17.051 16.549 19.2 19.2 19.2H24V9.6H19.2C16.549 9.6 14.4 11.749 14.4 14.4ZM24 9.6V19.2H28.8C31.451 19.2 33.6 17.051 33.6 14.4C33.6 11.749 31.451 9.6 28.8 9.6H24ZM33.6 24C33.6 21.349 31.451 19.2 28.8 19.2C26.149 19.2 24 21.349 24 24C24 26.651 26.149 28.8 28.8 28.8C31.451 28.8 33.6 26.651 33.6 24Z")
                  p.mt-2.text-sm Figma
                span.flex.flex-col.items-center.text-center(class="hover:text-green-500 text-gray-300")
                  svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                    path(d="M 6 4 C 4.9 4 4 4.9 4 6 L 4 44 C 4 45.1 4.9 46 6 46 L 44 46 C 45.1 46 46 45.1 46 44 L 46 6 C 46 4.9 45.1 4 44 4 L 6 4 z M 19.929688 14 L 22.650391 14 L 27.449219 36 L 25.009766 36 L 23.619141 29.570312 L 18.820312 29.570312 L 17.400391 36 L 15 36 L 19.929688 14 z M 32.730469 14 C 33.660469 14 34.25 14.630547 34.25 15.560547 C 34.25 16.500547 33.660469 17.130859 32.730469 17.130859 L 32.699219 17.130859 C 31.879219 17.130859 31.25 16.500547 31.25 15.560547 C 31.25 14.630547 31.910469 14 32.730469 14 z M 21.230469 16.439453 C 20.970469 18.069453 20.650078 19.930391 20.330078 21.400391 L 19.230469 27 L 23.320312 27 L 22.189453 21.369141 C 21.869453 19.829141 21.580312 18.039453 21.320312 16.439453 L 21.230469 16.439453 z M 31.5 19 L 34 19 L 34 36 L 31.5 36 L 31.5 19 z")
                  p.mt-2.text-sm Illustrator
                span.flex.flex-col.items-center.text-center(class="hover:text-green-500 text-gray-300")
                  svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                    path(d="M 6 4 C 4.9 4 4 4.9 4 6 L 4 44 C 4 45.1 4.9 46 6 46 L 44 46 C 45.1 46 46 45.1 46 44 L 46 6 C 46 4.9 45.1 4 44 4 L 6 4 z M 18.580078 14 C 20.570078 14 22.260625 14.480313 23.390625 15.570312 C 24.410625 16.590312 24.949219 18.160781 24.949219 20.050781 C 24.949219 22.030781 24.470625 23.370938 23.640625 24.460938 C 22.490625 26.060938 20.470781 26.859375 18.550781 26.859375 C 18.140781 26.859375 17.820938 26.860078 17.460938 26.830078 L 17.460938 36 L 15 36 L 15 14.419922 C 15.99 14.159922 17.140078 14 18.580078 14 z M 18.980469 15.640625 C 18.400469 15.640625 17.919609 15.700781 17.599609 15.800781 L 17.599609 24.410156 C 17.889609 24.440156 18.179844 24.470703 18.589844 24.470703 C 20.989844 24.470703 22.619141 22.870078 22.619141 19.830078 C 22.619141 17.620078 21.730469 15.640625 18.980469 15.640625 z M 31.710938 20 C 32.980938 20 33.900312 20.390781 34.570312 20.800781 L 33.900391 22.669922 C 33.270391 22.249922 32.61 21.960938 31.75 21.960938 C 30.39 21.960938 29.689453 22.919219 29.689453 23.949219 C 29.689453 24.979219 30.089688 25.589141 31.679688 26.619141 C 33.539687 27.779141 35 29.219141 35 31.369141 C 35 34.489141 32.810391 36 30.150391 36 C 28.990391 36 27.7 35.649609 27 35.099609 L 27.630859 33.240234 C 28.200859 33.590234 29.190703 34.039062 30.220703 34.039062 C 31.650703 34.039062 32.580078 33.169062 32.580078 31.789062 C 32.580078 30.599062 32.149531 29.770234 30.519531 28.740234 C 28.429531 27.420234 27.300781 26.070547 27.300781 24.310547 C 27.300781 21.770547 29.220938 20 31.710938 20 z")
                  p.mt-2.text-sm Photoshop
              .programLanguages.space-y-2
                h3.text-2xl Programming Languages
                .bg-white.h-1.w-20
              .text-center.flex.space-x-5.space-y-5.mt-3.flex-wrap
                span
                span(class="hover:text-red-500 text-gray-300")
                  font-awesome-icon(:icon="['fab', 'java']" style="font-size: 50px")
                  p.mt-2.text-sm Java
                span.flex.flex-col.items-center.text-center(class="hover:text-yellow-300 text-gray-300")
                  svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                    path(d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z")
                  p.mt-2.text-sm JavaScript
                span.flex.flex-col.items-center.text-center(class="hover:text-yellow-300 text-gray-300")
                  svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px")
                    path(d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z")
                  p.mt-2.text-sm TypeScript
                span(class="hover:text-red-500 text-gray-300")
                  font-awesome-icon(:icon="['fab', 'python']" style="font-size: 50px")
                  p.mt-2.text-sm Python
              .frontend.space-y-2
                h3.text-2xl Frontend Framework
                .bg-white.h-1.w-20
              .text-center.flex.space-x-5.space-y-5.mt-3.flex-wrap
                span
                span(class="hover:text-yellow-300 text-gray-300")
                  font-awesome-icon(:icon="['fab', 'vuejs']" style="font-size: 50px")
                  p.mt-2.text-sm Vue js
                span(class="hover:text-green-500 text-gray-300")
                  svg(fill="currentColor" width="50px" height="50px" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg")
                    path(d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z")
                    path(d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z")
                  p.mt-2.text-sm Nuxt js
                span(class="hover:text-yellow-300 text-gray-300")
                  svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                    path(d="M26.707 3.293l-21 21c-.391.391-.391 1.024 0 1.414l5.586 5.586c.391.391 1.024.391 1.414 0L39.293 4.707C39.923 4.077 39.477 3 38.586 3H27.414C27.149 3 26.895 3.105 26.707 3.293zM39.293 24.707L22 42l-6.293-6.293c-.391-.391-.391-1.024 0-1.414l11-11C26.895 23.105 27.149 23 27.414 23h11.172C39.477 23 39.923 24.077 39.293 24.707zM39.293 45.293L32 38l-10 4 4.707 4.707C26.895 46.895 27.149 47 27.414 47h11.172C39.477 47 39.923 45.923 39.293 45.293z")
                  p.mt-2.text-sm Flutter
              .backend.space-y-2
                h3.text-2xl Backend Framework
                .bg-white.h-1.w-20
              .text-center.flex.space-x-5.space-y-5.mt-3.flex-wrap
                span
                span(class="hover:text-yellow-300 text-gray-300")
                  font-awesome-icon(:icon="['fab', 'node-js']" style="font-size: 50px")
                  p.mt-2.text-sm Node js
                span(class="hover:text-yellow-300 text-gray-300")
                  svg(fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512")
                    path(d="m302.1321 73.922069c-9.30491-14.64563-6.32907-24.304287-1.1936-34.275436 4.59699-8.925656 6.47434-24.437213-9.76802-36.644934 14.95458-5.5042765 38.55341 4.2278168 38.95994 22.055318-8.67813 11.940547-32.38239 16.685289-27.99832 48.865053zm107.37131 329.11377c-7.261 23.53463-3.94994 36.05661-35.52619 84.91955 55.82887-37.68846 82.16945-86.34931 90.86259-141.57663 5.45854 23.02878 5.97411 43.9183 3.82994 63.65669 46.26414-60.90761 77.96333-183.72841-28.65864-307.18953-4.28882 54.57255-57.06814 97.54218-117.93682 80.69298 104.3656-11.50519 111.05487-144.21443 21.39498-174.85831 1.75098 36.920425-48.62229 24.830624-33.80845 74.222241-51.30826-29.02881-163.40839-34.994944-207.97358 9.046298-22.974166 22.704032-38.656285 41.481252-67.36875 42.721542-23.707695 1.0241-55.013058 39.4939-14.28164 59.16861 3.890334 16.39427 17.56184 25.72977 25.48927 27.3383-1.971628 29.19522 4.238808 14.30952 13.339044 1.58483-3.057785 36.90452 1.981383 23.60984 16.24432 4.62236 120.66905-24.40425 187.31087 74.00281 188.06447 134.44493-0.53029-10.96604-18.06118-23.71929-27.33799-20.20634-6.26784 13.27945-13.09792 24.5509-21.52706 30.11142 0.88123-8.80452 0.2795-17.60904-1.32065-26.41357-2.77851 10.64701-8.01182 21.70311-16.37647 33.28112-16.63731 0.92852-39.92261-11.4466-33.14924-31.96044 9.55475-19.94981-9.18642-24.09818-24.28479-18.38656-11.34505 4.29173-19.01137 16.17804-20.06039 19.87354-3.78431 13.33145-2.53892 43.09379 23.34639 62.83045-6.78602 1.24958-13.75302 2.36345-18.48922 5.15043 44.03256 26.63067 88.9772 17.63267 114.00544 7.58355 40.97817-16.45326 69.24127-61.99437 73.66284-97.12527 11.37397 49.41377-9.00297 104.33158-54.67799 133.78547 13.04942 1.38191 38.59297-7.45938 64.71353-16.77286-19.74586 24.85017-43.34928 48.41446-82.01403 66.95833 76.15734-6.37931 131.86317-44.61769 169.83909-107.50313")
                  p.mt-2.text-sm Nest js
              .others.space-y-2
                h3.text-2xl Others
                .bg-white.h-1.w-20
              .text-center.flex.space-x-5.space-y-5.mt-3.flex-wrap
                span
                button(class="hover:bg-yellow-300 bg-gray-300 text-lg px-1 py-3 rounded-md w-28 flex items-center justify-center")
                  h3.text-white Bootstrap
                button(class="hover:bg-green-500 bg-gray-300 text-lg px-1 py-3 rounded-md w-28 flex items-center justify-center")
                  h3.text-white Tailwind
            .text-center.flex.space-x-5.space-y-5.mt-3.justify-center.flex-wrap(v-if="!show")
              span
              span(class="hover:text-green-500 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z")
                p.mt-2.text-sm HTML
              span(class="hover:text-green-500 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z")
                p.mt-2.text-sm CSS
              span(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M43.03,27.802c-1.747,0.009-3.261,0.429-4.53,1.054c-0.464-0.926-0.934-1.741-1.013-2.347 c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125c-0.007-0.089-0.109-0.518-1.117-0.526 c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.296,0.865-0.416,1.49c-0.177,0.914-2.012,4.174-3.055,5.879 c-0.341-0.666-0.631-1.252-0.691-1.716c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125 c-0.007-0.089-0.109-0.518-1.117-0.526c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.21,0.888-0.416,1.49 c-0.207,0.602-2.647,6.039-3.286,7.448c-0.326,0.718-0.609,1.295-0.809,1.689c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.012,0.026-0.034,0.071c-0.171,0.335-0.273,0.521-0.273,0.521s0.001,0.003,0.003,0.007c-0.136,0.246-0.281,0.475-0.353,0.475 c-0.05,0-0.151-0.656,0.022-1.555c0.363-1.886,1.235-4.828,1.227-4.929c-0.004-0.052,0.162-0.564-0.57-0.833 c-0.711-0.26-0.965,0.174-1.03,0.175c-0.063,0.001-0.11,0.153-0.11,0.153s0.793-3.308-1.512-3.308c-1.44,0-3.436,1.576-4.42,3.004 c-0.62,0.338-1.948,1.063-3.357,1.837c-0.541,0.297-1.093,0.601-1.617,0.89c-0.036-0.039-0.071-0.079-0.108-0.118 c-2.794-2.981-7.958-5.089-7.739-9.096c0.08-1.457,0.586-5.293,9.924-9.946c7.649-3.812,13.773-2.763,14.831-0.438 c1.512,3.321-3.273,9.494-11.216,10.384c-3.027,0.339-4.62-0.834-5.017-1.271c-0.417-0.46-0.479-0.481-0.635-0.394 c-0.254,0.141-0.093,0.547,0,0.789c0.237,0.617,1.21,1.712,2.87,2.256c1.46,0.479,5.013,0.742,9.311-0.92 c4.813-1.862,8.571-7.041,7.468-11.37c-1.123-4.403-8.423-5.85-15.332-3.396c-4.112,1.461-8.563,3.754-11.764,6.747 c-3.806,3.56-4.412,6.658-4.162,7.952c0.889,4.6,7.228,7.595,9.767,9.815c-0.125,0.069-0.243,0.134-0.35,0.193 c-1.273,0.63-6.105,3.159-7.314,5.831c-1.371,3.031,0.218,5.206,1.271,5.499c3.26,0.907,6.606-0.725,8.404-3.407 c1.798-2.681,1.578-6.172,0.753-7.766c-0.01-0.02-0.022-0.039-0.032-0.059c0.329-0.195,0.664-0.392,0.996-0.587 c0.648-0.38,1.284-0.735,1.836-1.036c-0.309,0.846-0.535,1.86-0.653,3.325c-0.138,1.721,0.567,3.945,1.49,4.82 c0.406,0.385,0.895,0.394,1.205,0.394c1.074,0,1.564-0.893,2.103-1.95c0.662-1.296,1.249-2.804,1.249-2.804 s-0.737,4.075,1.271,4.075c0.731,0,1.467-0.949,1.795-1.432c0.001,0.005,0.001,0.008,0.001,0.008s0.019-0.031,0.056-0.095 c0.076-0.116,0.119-0.19,0.119-0.19s0.002-0.008,0.004-0.021c0.294-0.51,0.946-1.674,1.924-3.594 c1.263-2.48,2.475-5.586,2.475-5.586s0.113,0.76,0.482,2.015c0.217,0.739,0.679,1.556,1.043,2.339 c-0.293,0.407-0.473,0.64-0.473,0.64s0.002,0.004,0.005,0.012c-0.234,0.311-0.497,0.646-0.772,0.974 c-0.997,1.188-2.185,2.544-2.344,2.936c-0.187,0.461-0.143,0.801,0.219,1.073c0.264,0.199,0.735,0.23,1.227,0.197 c0.896-0.06,1.527-0.283,1.838-0.418c0.485-0.171,1.05-0.441,1.58-0.831c0.978-0.719,1.568-1.748,1.512-3.111 c-0.031-0.751-0.271-1.495-0.574-2.198c0.089-0.128,0.178-0.256,0.267-0.387c1.542-2.255,2.738-4.732,2.738-4.732 s0.113,0.76,0.482,2.015c0.187,0.636,0.556,1.329,0.887,2.009c-1.45,1.178-2.349,2.547-2.662,3.445 c-0.577,1.661-0.125,2.414,0.723,2.585c0.384,0.078,0.927-0.098,1.335-0.271c0.508-0.168,1.118-0.449,1.688-0.868 c0.978-0.719,1.919-1.726,1.862-3.089c-0.026-0.62-0.194-1.236-0.422-1.828c1.229-0.512,2.821-0.797,4.848-0.56 c4.349,0.508,5.202,3.223,5.039,4.359c-0.163,1.137-1.075,1.761-1.38,1.95c-0.305,0.189-0.398,0.254-0.372,0.394 c0.037,0.204,0.178,0.196,0.438,0.152c0.358-0.06,2.283-0.924,2.366-3.022C50.102,30.703,47.55,27.778,43.03,27.802z M9.512,39.102 c-1.44,1.571-3.453,2.165-4.316,1.665c-0.932-0.54-0.563-2.854,1.205-4.521c1.077-1.016,2.468-1.952,3.391-2.529 c0.21-0.126,0.518-0.312,0.893-0.537c0.062-0.035,0.097-0.055,0.097-0.055l-0.001-0.002c0.072-0.043,0.147-0.088,0.223-0.134 C11.647,35.363,11.024,37.453,9.512,39.102z M20.005,31.968c-0.502,1.223-1.552,4.352-2.191,4.184 c-0.549-0.144-0.883-2.523-0.11-4.863c0.389-1.178,1.22-2.586,1.709-3.133c0.786-0.879,1.652-1.167,1.862-0.81 C21.544,27.8,20.32,31.201,20.005,31.968z M28.675,36.105c-0.213,0.111-0.408,0.181-0.498,0.127 c-0.067-0.04,0.088-0.186,0.088-0.186s1.084-1.167,1.512-1.698c0.248-0.309,0.537-0.676,0.85-1.086 c0.003,0.041,0.004,0.082,0.004,0.122C30.627,34.782,29.277,35.725,28.675,36.105z M35.354,34.582 c-0.159-0.113-0.132-0.478,0.389-1.614c0.205-0.446,0.672-1.198,1.485-1.916c0.094,0.295,0.152,0.578,0.15,0.842 C37.367,33.653,36.112,34.31,35.354,34.582z")
                p.mt-2.text-sm SASS
              span.flex.flex-col.items-center.text-center(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z")
                p.mt-2.text-sm JavaScript
              span.flex.flex-col.items-center.text-center(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z")
                p.mt-2.text-sm TypeScript
              span(class="hover:text-yellow-300 text-gray-300")
                font-awesome-icon(:icon="['fab', 'vuejs']" style="font-size: 50px")
                p.mt-2.text-sm Vue js
              span(class="hover:text-green-500 text-gray-300")
                svg(fill="currentColor" width="50px" height="50px" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg")
                  path(d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z")
                  path(d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z")
                p.mt-2.text-sm Nuxt js
              span(class="hover:text-yellow-300 text-gray-300")
                font-awesome-icon(:icon="['fab', 'node-js']" style="font-size: 50px")
                p.mt-2.text-sm Node js
              span(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512")
                  path(d="m302.1321 73.922069c-9.30491-14.64563-6.32907-24.304287-1.1936-34.275436 4.59699-8.925656 6.47434-24.437213-9.76802-36.644934 14.95458-5.5042765 38.55341 4.2278168 38.95994 22.055318-8.67813 11.940547-32.38239 16.685289-27.99832 48.865053zm107.37131 329.11377c-7.261 23.53463-3.94994 36.05661-35.52619 84.91955 55.82887-37.68846 82.16945-86.34931 90.86259-141.57663 5.45854 23.02878 5.97411 43.9183 3.82994 63.65669 46.26414-60.90761 77.96333-183.72841-28.65864-307.18953-4.28882 54.57255-57.06814 97.54218-117.93682 80.69298 104.3656-11.50519 111.05487-144.21443 21.39498-174.85831 1.75098 36.920425-48.62229 24.830624-33.80845 74.222241-51.30826-29.02881-163.40839-34.994944-207.97358 9.046298-22.974166 22.704032-38.656285 41.481252-67.36875 42.721542-23.707695 1.0241-55.013058 39.4939-14.28164 59.16861 3.890334 16.39427 17.56184 25.72977 25.48927 27.3383-1.971628 29.19522 4.238808 14.30952 13.339044 1.58483-3.057785 36.90452 1.981383 23.60984 16.24432 4.62236 120.66905-24.40425 187.31087 74.00281 188.06447 134.44493-0.53029-10.96604-18.06118-23.71929-27.33799-20.20634-6.26784 13.27945-13.09792 24.5509-21.52706 30.11142 0.88123-8.80452 0.2795-17.60904-1.32065-26.41357-2.77851 10.64701-8.01182 21.70311-16.37647 33.28112-16.63731 0.92852-39.92261-11.4466-33.14924-31.96044 9.55475-19.94981-9.18642-24.09818-24.28479-18.38656-11.34505 4.29173-19.01137 16.17804-20.06039 19.87354-3.78431 13.33145-2.53892 43.09379 23.34639 62.83045-6.78602 1.24958-13.75302 2.36345-18.48922 5.15043 44.03256 26.63067 88.9772 17.63267 114.00544 7.58355 40.97817-16.45326 69.24127-61.99437 73.66284-97.12527 11.37397 49.41377-9.00297 104.33158-54.67799 133.78547 13.04942 1.38191 38.59297-7.45938 64.71353-16.77286-19.74586 24.85017-43.34928 48.41446-82.01403 66.95833 76.15734-6.37931 131.86317-44.61769 169.83909-107.50313")
                p.mt-2.text-sm Nest js
              span(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M26.707 3.293l-21 21c-.391.391-.391 1.024 0 1.414l5.586 5.586c.391.391 1.024.391 1.414 0L39.293 4.707C39.923 4.077 39.477 3 38.586 3H27.414C27.149 3 26.895 3.105 26.707 3.293zM39.293 24.707L22 42l-6.293-6.293c-.391-.391-.391-1.024 0-1.414l11-11C26.895 23.105 27.149 23 27.414 23h11.172C39.477 23 39.923 24.077 39.293 24.707zM39.293 45.293L32 38l-10 4 4.707 4.707C26.895 46.895 27.149 47 27.414 47h11.172C39.477 47 39.923 45.923 39.293 45.293z")
                p.mt-2.text-sm Flutter
              span(class="hover:text-yellow-300 text-gray-300")
                svg(fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px")
                  path(d="M46 46L6 46 26 26zM45 4L4 45.17 4 25.83 25.83 4zM23 4L4 23 4 4z")
                p.mt-2.text-sm Kotlin
              span(class="hover:text-red-500 text-gray-300")
                font-awesome-icon(:icon="['fab', 'java']" style="font-size: 50px")
                p.mt-2.text-sm Java
          .flex.justify-center(v-if="!show")
            button(v-on:click="(show = !show),(isView = !isView)" class="bg-black text-xl px-2 py-5 rounded-md h-10 w-32 flex items-center justify-center")
              h3.text-white(v-if="!isView") View More
          .flex.justify-center(v-if="show")
            a(href="#skills")
              button(v-on:click="(show = !show),(isView = !isView)" class="bg-black text-xl px-2 py-5 rounded-md h-10 w-32 flex items-center justify-center")
                h3.text-white(v-if="isView") View Less
      .title(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["Education"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-28
      .educate.w-full.flex.justify-between
        ul.events
          li
            time
            span
              strong University of Phayao • Present
              p Software Engineering
          li
            time
            span
              strong Padad Wittayakom School • 2013 - 2018
              p Sci-Math
      .title(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["Experience"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-24
      .educate.w-full.flex.justify-between
        ul.events
          li
            time
            span
              strong OneDee Solution Co., Ltd. • April 2020
              p Internship
              p Fullstack Developer
      .title(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["Awards"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-28
      .grid.grid-cols-3.gap-4
        .award
          img(src="~//static/certificate/Certificate.jpeg" alt="")
          p TOCPC 2021
        .award
          img(src="~//static/certificate/Figma.jpg" alt="")
          p Web Design (Figma) HACKaTHAILAND
        .award
          img(src="~//static/certificate/FullStack.jpg" alt="")
          p Web App Development HACKaTHAILAND
  .contactme(id="contact")
    .block-content.space-y-10
      .title(data-aos="fade-down")
        vue-typer#title.uppercase.vue-typer(:text='["Contact"]' :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="70" :type-delay="70" :pre-erase-delay="2000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink" data-aos="fade-right")
        .bg-white.h-2.w-20
      .grid.grid-cols-7.gap-4.flex.items-center
        form.col-span-4.space-y-3(ref="form" @submit.prevent="sendEmail" autocomplete="off")
          input.text-black(type="text" placeholder="Full name" name="user_name")
          input.text-black(type="email" placeholder="Email" name="user_email")
          textarea.resize-none.text-black(placeholder="Message" name="message")
          .flex.justify-end
            button.bg-black.p-4.rounded-md.h-10.w-32.flex.items-center.justify-center(type="submit" value="Send")
              h3.text-white Send!
        .col-span-3
          img#developer(src="~//static/img/3700.png")
</template>
<script lang="js">
import emailjs from '@emailjs/browser';
export default ({
  data() {
    return {
      show: false,
      isView: false
    }
  },
  mounted() {
    let stars = document.getElementById('stars')
    let left_could = document.getElementById('left_could')
    let right_could = document.getElementById('right_could')
    let wind = document.getElementById('wind')
    let sunset = document.getElementById('sunset')
    let big_balloon = document.getElementById('big_balloon')
    let small_balloon = document.getElementById('small_balloon')
    let big_balloon_night = document.getElementById('big_balloon_night')
    let small_balloon_night = document.getElementById('small_balloon_night')
    let text = document.getElementById('text')
    let header = document.querySelector('header')
    let moon = document.getElementById('moon')

    window.addEventListener('scroll', function() {
      let value = window.scrollY
      stars.style.left = value * 0.25 + 'px'
      wind.style.top = value * 0.25 + 'px'
      light.style.top = value * 1.05 + 'px'
      sunset.style.top = value * 1.05 + 'px'
      left_could.style.left = value * -0.25 + 'px'
      right_could.style.left = value * 0.50 + 'px'
      big_balloon.style.left = value * -1.25 + 'px'
      small_balloon.style.left = value * 1.25 + 'px'
      text.style.marginTop = value * 1.5 + 'px'
      header.style.top = value * 0.5 + 'px'
      big_balloon_night.style.left = value * -0.25 + 'px'
      small_balloon_night.style.left = value * 0.25 + 'px'
      moon.style.top = value * -0.25 + 'px'
    })
    var myAudio = document.getElementById("myAudio")
    var icon = document.getElementById("icon")

    icon.onclick = function() {
      if(myAudio.paused){
        myAudio.play();
        icon.src = "img/pause.png"
      }
      else {
        myAudio.pause();
        icon.src = "img/play.png"
      }
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_wudk2wn', 'template_af0dgpt', this.$refs.form, 'user_mmL3u6OisVNPIn7j3dCtF')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
})
</script>

<style lang="postcss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow: hidden;
}
h3#title {
  @apply text-4xl;
}
a {
  text-decoration: none;
}
body {
  min-height: 100vh;
}
section.sunset {
  min-height: 100vh;
  background: linear-gradient(#9a09b8, #d6702b);
}
section.fullmoon {
  min-height: 100vh;
  background: linear-gradient(#d6702b, #9a09b8);
}
.content {
  min-height: 100vh;
  background: linear-gradient(#000000, #9a09b8);
}
.contactme {
  min-height: 100vh;
  background: linear-gradient(#29095c, #d6702b);
}
section {
  @apply relative w-full flex;

  height: 100vh;
  padding: 100px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.sec {
  @apply relative w-full;

  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #d6702b;
}
.content {
  @apply relative w-full;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #29095c;
}
.contact {
  @apply relative w-full;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #9a09b8;
}
section img#light {
  @apply mix-blend-screen;
}
section img#sunset {
  @apply mix-blend-screen;
}
section img#moon {
  @apply mix-blend-screen;

  margin-top: 400px;
}
section img#stars_night {
  @apply mix-blend-screen;
}
.sunset::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #d6702b, transparent);
  z-index: 1000;
}
.sec::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #d6702b, transparent);
  z-index: 1000;
}
.fullmoon::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #29095c, transparent);
  z-index: 1000;
}
.content::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #29095c, transparent);
  z-index: 1000;
}
section img {
  @apply absolute top-0 left-0 w-full h-full object-cover pointer-events-none;
}
header {
  @apply absolute top-0 left-0 w-full flex justify-between;

  padding: 30px 100px;
  align-items: center;
  z-index: 1000;
}
header .logo {
  @apply uppercase text-white font-semibold text-4xl space-x-2;

  text-decoration: none;
}
header ul {
  @apply flex;
}
header ul li {
  @apply ml-5 flex justify-center;

  list-style: none;
}
header ul li a {
  @apply text-white rounded-full flex items-center;

  text-decoration: none;
  padding: 6px 15px;
}
header ul li a:hover,
header ul li a.active {
  @apply bg-white;

  color: #2b1055;
}
section img#big_balloon {
  z-index: 10;
}
#text {
  @apply absolute text-white whitespace-nowrap;

  font-size: 7.5vw;
  z-index: 9;
}
.project {
  padding: 50px;
}
.folder {
  @apply h-11;
}
.works {
  height: 500px;
}
.work {
  @apply rounded-lg cursor-pointer flex flex-col items-center justify-center space-y-6;

  background: linear-gradient(to bottom, #29095c, transparent);
}
.work:hover {
  background: linear-gradient(to top, #d0cdd6, transparent);
}
.work:hover h3 {
  color: #000000;
}
::v-deep .custom.char.typed {
  color: #fff !important;
}
::v-deep .custom.char.selected {
  color: #ffffff;
}
::v-deep .custom.caret.typing {
  background-color: #ffffff;
}
::v-deep .custom.caret {
  width: 10px;
  background-color: #ffffff;
}

.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  font-size: 40px;

  .custom.char {
    /* Styles for each character
       e.g. color, background-color */

    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
    }
    &.selected {
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
    }
    &.erased {
      /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */

    &.pre-type {
      /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
    }
    &.pre-erase {
      /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
    }
    &.idle {
      /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
    }
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
    }
    &.selecting {
      /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
    }
    &.erasing {
      /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
    }
    &.complete {
      /* Styles for the idle caret when VueTyper has finished all typing/erasing */
    }
  }
}
.block-content {
  @apply text-white;

  padding: 50px;
}
.myskill {
  font-size: 20px;
}
.edu-icon {
  @apply mb-8;

  width: 50px;
  height: 50px;
}
.events li {
  display: flex;
  cursor: auto;
}
.events time {
  position: relative;
  padding: 0 1.5em;
}
.events time::after {
  content: "";
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  transform: translateX(50%);
  border-radius: 50%;
  background: #fff;
  border: 1px #ccc solid;
  width: 0.8em;
  height: 0.8em;
}
.events span {
  padding: 0 1.5em 1.5em 1.5em;
  position: relative;
}
.events span::before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  height: 100%;
  border-left: 1px #ccc solid;
}
.events strong {
  display: block;
  font-weight: bolder;
}
.events,
.events *::before,
.events *::after {
  box-sizing: border-box;
}
.award {
  @apply space-y-3;
}
.award img {
  height: 300px;
}
.award p {
  @apply text-center;
}
input {
  @apply w-full px-4 border-blue-500 border rounded-sm;

  height: 3.5rem;
  background-color: #29095c;

  &::placeholder {
    @apply text-gray-400;
  }

  &:focus {
    @apply border border-white outline-none;
  }
}

textarea {
  @apply w-full px-4 py-2 border-blue-500 border rounded-sm;

  height: 15rem;
  background-color: #29095c;

  &::placeholder {
    @apply text-gray-400;
  }

  &:focus {
    @apply border border-white outline-none;
  }
}

input[type="text"],
input[type="email"],
textarea {
  margin: 0;
  color: #fff;
}
</style>
