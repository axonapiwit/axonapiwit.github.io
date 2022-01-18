<template lang="pug">
body
  header
    a.logo(href="#") Apiwit
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
        h3.uppercase.text-white.text-3xl(data-aos="fade-right") projects
        a(href="https://github.com/axonapiwit?tab=repositories" target="_blank" data-aos="fade-left"
          data-aos-anchor="#trigger-left").justify-end.flex.justify-center.cursor-pointer
          .bg-black.p-4.rounded-md.h-10.w-32.flex.items-center.justify-center
            h3.text-white  View More
      //- .folders.grid.grid-cols-4.gap-3(data-aos="fade-up")
      //-   img(src="~//static/img/html.png")
      //-   img(src="~//static/img/css.png")
      //-   img(src="~//static/img/js.png")
      //-   img(src="~//static/img/ts.png")
      //-   img(id="developer" src="~//static/img/3800.png" data-aos="fade-left")
      //-   img(src="~//static/img/vue.png")
      //-   img(src="~//static/img/nuxt.png")
      //-   img(src="~//static/img/flutter.png")
      //-   img(src="~//static/img/firebase.png")
      .works.grid.grid-cols-3.gap-4
        a(href="https://github.com/axonapiwit/educate_discord_bot" target="_blank" data-aos="fade-up").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
            h3.font-bold educate_discord_bot
          .text-center.space-y-3
            h3 It is a bot for studying, such as viewing the class schedule, develop by discord js
            .flex.justify-center.items-center.space-x-3
              .bg-yellow-300.w-4.h-4.rounded-full
              h3.text-left JavaScript
        a(href="https://github.com/axonapiwit/pet_lover" target="_blank" data-aos="fade-down").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
            h3.font-bold pet_lover
          .text-center.space-y-3
            h3 An application to provide homes for dogs and cats, useing flutter and firebase.
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/flutter_covid-19" target="_blank" data-aos="fade-left").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
            h3.font-bold flutter_covid-19
          .text-center.space-y-3
            h3 An application that can view the number of Covid-19 infections in Thailand using Sunday API.
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/smartdoc" target="_blank" data-aos="fade-right").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
            h3.font-bold smartdoc
          .text-center.space-y-3
            h3 Mid-Term work of Mobile Application Development course
            .flex.justify-center.items-center.space-x-3
              .bg-gray-400.w-4.h-4.rounded-full
              h3.text-left Dart
        a(href="https://github.com/axonapiwit/NestJSProject" target="_blank" data-aos="fade-up").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
            h3.font-bold NestJSProject
          .text-center.space-y-3
            h3 Homework to practice logic provided by the company during the summer internship
            .flex.justify-center.items-center.space-x-3
              .bg-gray-500.w-4.h-4.rounded-full
              h3.text-left TypeScript
        a(href="https://github.com/axonapiwit/ClanningServiceWebBooking" target="_blank" id="trigger-left" data-aos="fade-left").work.text-white
          .flex.justify-between.items-center.space-x-3
            img.folder(src="~//static/img/folder.png")
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
    .block-content.space-y-10(data-aos="fade-down")
      .title
        h3.uppercase About Me
        hr
      .subTitle
        h1.text-4xl I'm a <Strong>UI/UX Designer & Frontend Developer</Strong> from Chiangrai, Thailand. I aim to make a difference through my creative solution.
        hr
      .info.my-8
        .grid.grid-cols-2.gap-4
          p <b>Name</b> : Apiwit Thammachai
          p <b>Date of birth</b> : February 13, 2000
          p <b>Address</b> : 203 House, Chiangrai City, Thailand County.
          p <b>Email</b> : axon.apiwit@gmail.com
          p <b>Phone</b> : + 66 951 862 791
          p <b>Skype</b> : Apiwit Thammachai
          p <b>Interest</b> : Frontend
      h3.uppercase skill
      hr.info.my-8
      .w-full.grid.grid-cols-3.gap-4
        .fontend-frameworks
          h3.uppercase fontend-frameworks
          .flex.flex-col
            p.myskill Vue js - 2 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 65%" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500")  65%
            p.myskill Nuxt js - 2 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 70%" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500")  70%
        .backend-frameworks
          h3.uppercase backend-frameworks
          .flex.flex-col
            p.myskill Node js - 2 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 70%" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500")  70%
            p.myskill Nest js - 2 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 60%" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500")  60%
        .database
          h3.uppercase database
          .flex.flex-col
            p.myskill MySQL - 1 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 65%" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1500")  65%
            p.myskill Mongo DB - 2 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 70%" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1500")  70%
            p.myskill Firebase - 2.5 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 60%" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1500")  60%
        .tools
          h3.uppercase tools
          .flex.flex-col
            p.myskill PhotoShop - 7 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 75%" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500")  75%
            p.myskill Illustrator - 7 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 75%" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500")  75%
            p.myskill Animate - 3 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 50%" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500")  50%
            p.myskill Figma - 3 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 65%" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500")  65%
            p.myskill Wordpress - 3 years experience
            .w-full.bg-gray-200.rounded-full(data-aos="fade-right")
              .bg-gray-600.text-xs.font-medium.text-white.text-center.leading-none.rounded-l-full(class="p-0.5" style="width: 45%" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500")  45%
        .softs
          h3.uppercase Soft skill
          .flex.flex-col
            p Self leanning
            p Patience
            p Open-mindedness and adaptability
            p Critical thinking, creativity, and problem-solving
            p Accountability, humility, and humbleness
            p Management (people, time and project)
            p Teamwork and collaboration
        .other

      h3.uppercase education
      hr.info.my-8
      .pic.w-full.flex.justify-start.ml-7(data-aos="fade-right")
        img.edu-icon(src="~//static/icons/education.png")
      .educate.w-full.flex.justify-between
        ul.events
          li(data-aos="fade-down")
            time
            span
              strong University of Phayao • Present
              p Software Engineering
          li(data-aos="fade-down")
            time
            span
              strong Padad Wittayakom School • 2013 - 2018
              p Sci-Math
      h3.uppercase experience
      hr.info.my-8
      .pic.w-full.flex.justify-start.ml-6(data-aos="fade-right")
        img.edu-icon(src="~//static/icons/experience.png")
      .educate.w-full.flex.justify-between
        ul.events
          li(data-aos="fade-down")
            time
            span
              strong OneDee Solution Co., Ltd. • April 2020
              p Internship
              p Fullstack Developer
      h3.uppercase awards
      hr.info.my-8
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
  .contactme

</template>
<script lang="js">
export default ({
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
body {
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
&--primary {
  @include center-v;
  right: 20px;
  background: green;
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
</style>
