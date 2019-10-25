<template>
  <div class="section">
    <navbar @scrolEv="scrollTo" :active="activeLink"/>
    <div class="block gray">
      <div class="container">
        <div class="hero home">
          <div class="hero-content">
            <div
              class="hero-title"
              v-scroll="{ class: 'fade-rigth-more'}"
            >Онлайн курс по копирайтингу</div>
            <div
              class="text"
              v-scroll="{ class: 'fade-rigth-more'}"
            >Освойте полный цикл создания контента, научитесь писать тексты для любой аудитории и удерживать внимание читателя.</div>

            <btnSplit
              span="Записаться"
              @click.native="scroll"
              v-scroll="{ class: 'fade-rigth-more'}"
            />
          </div>
          <img src="/image/banner1.svg" v-scroll="{ class: 'fade-left'}">
        </div>
      </div>
    </div>

    <div class="block text-center">
      <div class="container">
        <div class="title">Для кого курс</div>
        <div class="filter">
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <p class="item-icon">
              <svg width="24" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path
                    d="M23.47 13.365l-3.84-9.432c0-.002 0-.004-.002-.005v-.001c-.507-1.244-1.814-2.08-3.252-2.08-1.438 0-2.745.836-3.253 2.08a2.986 2.986 0 00-.22 1.129v4.125h-1.986V5.056c0-1.77-1.558-3.208-3.473-3.208-1.438 0-2.746.835-3.253 2.08 0 .001 0 .003-.002.005L.35 13.362A4.694 4.694 0 000 15.14c0 2.78 2.45 5.042 5.459 5.042 3.009 0 5.458-2.261 5.458-5.042v-.458h1.985v.458c0 2.78 2.45 5.042 5.459 5.042 3.009 0 5.458-2.261 5.458-5.042 0-.61-.117-1.207-.349-1.774zM5.46 18.348c-1.916 0-3.474-1.44-3.474-3.209 0-.388.074-.769.221-1.129.506-1.243 1.813-2.079 3.253-2.079 1.915 0 3.473 1.44 3.473 3.208 0 1.77-1.558 3.209-3.473 3.209zm12.902 0c-1.916 0-3.474-1.44-3.474-3.209 0-1.769 1.558-3.208 3.474-3.208 1.439 0 2.746.836 3.252 2.079.147.36.221.74.221 1.13 0 1.768-1.558 3.208-3.473 3.208z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h23.819v22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p class="item-title">Для новичков в копирайтинге</p>
            <p
              class="item-subtitle"
            >By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <p class="item-icon">
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path
                    d="M20.936 19.94H2.386a1.031 1.031 0 000 2.06h18.55a1.031 1.031 0 000-2.06zM8.756 18.907c.776 0 1.552-.295 2.143-.886l7.777-7.777a1.03 1.03 0 000-1.457L10.192.302a1.03 1.03 0 00-1.457 0L.956 8.08a3.034 3.034 0 000 4.284l5.657 5.657a3.022 3.022 0 002.143.887zm.707-16.42l7.027 7.027-.12.12H2.35c.024-.031.035-.07.064-.098l7.05-7.049zM16.813 16.246c0 1.468 1.156 2.662 2.576 2.662 1.42 0 2.576-1.194 2.576-2.662 0-1.182-1.477-3.517-1.93-4.203-.286-.435-1.006-.435-1.291 0-.454.686-1.931 3.02-1.931 4.203z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h22v22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p class="item-title">Для тех, кто хочет улучшить навыки</p>
            <p
              class="item-subtitle"
            >By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <p class="item-icon">
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.478 7.333H9.853c-1.39 0-2.521 1.13-2.521 2.52v9.626c0 1.39 1.13 2.52 2.52 2.52h9.626c1.39 0 2.52-1.13 2.52-2.52V9.854c0-1.39-1.13-2.521-2.52-2.521z"
                  ></path>
                  <path
                    d="M5.958 9.854a3.9 3.9 0 013.896-3.896h6.314A8.192 8.192 0 008.25 0C3.7 0 0 3.702 0 8.25a8.191 8.191 0 005.958 7.917V9.854z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h22v22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p class="item-title">Для тех, кто решил сменить профессию</p>
            <p
              class="item-subtitle"
            >By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="block gray" ref="about">
      <div class="container">
        <div class="work">
          <div class="item" v-scroll="{ class: 'fade-right'}">
            <div class="content" v-scroll="{ class: 'fade-left-more'}">
              <p class="title">Как происходит процесс обучения?</p>
              <p class="description">
                Мы убеждены, что достичь мастерства в копирайтинге можно через правильные знания, проверенную систему создания рекламного текста и отработку знаний в реальном проекте.
                <br>
                <br>Поэтому нам чужд подход, когда в основу закладывают только теорию и новые «фишки». Студент не в силах устроиться на работу с этими знаниями без практики.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="box" v-scroll="{ class: 'fade-down-more'}">
              <p class="box-icon">
                <svg width="119" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M56.9185 34.616L68.0545 33.848V83H94.1665V10.616L56.9185 11.768V34.616Z"
                    fill="black"
                  ></path>
                  <ellipse cx="14.5" cy="51" rx="14.5" ry="15" fill="#1300F2"></ellipse>
                </svg>
              </p>
              <p class="box-title">Изучение и разбор темы</p>
            </div>
            <div class="box" v-scroll="{ class: 'fade-down-more'}">
              <p class="box-icon">
                <svg width="127" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M121.463 83V60.728L107.351 61.592L94.9665 63.32V62.552C107.735 58.616 120.407 49.592 120.407 35C120.407 18.2 104.471 9.464 89.3985 9.464C67.6065 9.464 58.1985 18.968 56.2785 40.088H82.0065C82.1985 35.672 82.8705 30.968 88.4385 30.968C91.7025 30.968 94.3905 33.464 94.3905 36.728C94.3905 43.16 82.9665 53.336 78.4545 57.368L49.5585 83H121.463Z"
                    fill="black"
                  ></path>
                  <rect y="33" width="27" height="27" fill="#FFF200"></rect>
                </svg>
              </p>
              <p class="box-title">Домашняя работа</p>
            </div>
            <div class="box" v-scroll="{ class: 'fade-up-more'}">
              <p class="box-icon">
                <svg width="127" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M53.0145 57.656C53.8785 77.432 69.7185 84.152 87.3825 84.152C101.687 84.152 120.119 78.68 120.119 61.112C120.119 53.432 115.703 46.712 108.119 44.792V44.216C113.687 41.816 117.047 36.152 117.047 30.2C117.047 15.128 99.3825 9.464 87.1905 9.464C70.6785 9.464 57.5265 15.416 55.8945 33.56H81.8145C81.5265 30.68 83.4465 27.992 86.4225 27.992C89.3025 27.992 91.5105 29.816 91.5105 32.792C91.5105 35.768 88.9185 38.264 86.0385 37.976L83.9265 37.784V52.856C85.0785 52.664 86.2305 52.472 87.4785 52.472C91.0305 52.472 94.1025 55.544 94.1025 59.192C94.1025 62.84 90.5505 65.816 86.9985 65.816C82.5825 65.816 79.3185 61.976 79.5105 57.656H53.0145Z"
                    fill="black"
                  ></path>
                  <path d="M16 33L29.8564 57H2.14359L16 33Z" fill="#FFF200"></path>
                </svg>
              </p>
              <p class="box-title">Работа над ошибками</p>
            </div>
            <div class="box" v-scroll="{ class: 'fade-up-more'}">
              <p class="box-icon">
                <svg width="127" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85.3665 38.456C86.9025 36.632 88.3425 34.616 89.3985 32.408L89.9745 32.792C89.3025 34.712 88.8225 36.728 88.8225 38.744V49.592L76.0545 50.264V49.88L85.3665 38.456ZM52.0545 69.272L88.8225 68.504L87.8625 83H112.823L112.151 68.504L121.943 69.272V48.92L112.823 49.592V10.616H81.7185L52.0545 50.264V69.272Z"
                    fill="black"
                  ></path>
                  <path
                    d="M16.5 31L20.2045 42.4012H32.1924L22.494 49.4476L26.1985 60.8488L16.5 53.8024L6.80154 60.8488L10.506 49.4476L0.807568 42.4012H12.7955L16.5 31Z"
                    fill="#1300F2"
                  ></path>
                </svg>
              </p>
              <p class="box-title">Защита диплома</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="container">
        <div class="block-header">
          <span class="icon">
            <svg viewBox="0 0 104 111" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M43.2138 0.423999L18.8778 25.336C8.22175 36.28 0.44575 48.952 0.44575 64.792C0.44575 94.024 25.5018 110.728 52.5738 110.728C79.0698 110.728 103.55 95.176 103.55 66.52C103.55 48.376 90.4458 30.232 71.1498 30.232C67.5498 30.232 63.9498 31.24 60.3498 31.816L60.2058 30.952L94.9098 0.423999H43.2138ZM38.4618 66.376C38.4618 59.32 44.2218 52.84 51.5658 52.84C59.3418 52.84 65.3898 59.176 65.3898 66.952C65.3898 74.584 59.1978 79.768 51.8538 79.768C44.0778 79.768 38.4618 74.008 38.4618 66.376Z"
                fill="black"
              ></path>
            </svg>
          </span>
          <p>Причин обучаться именно у нас</p>
        </div>
        <div class="work">
          <div class="item">
            <div class="content-list">
              <ul v-scroll="{ class: 'fade-rigth-more'}">
                <li>Вы станете писать профессиональные тексты</li>
                <li>Сильная практика над реальными проектами</li>
                <li>Безлимитный доступ ко всем материалам школы</li>
              </ul>
              <ul v-scroll="{ class: 'fade-rigth-more'}">
                <li>Готовое портфолио по окончании курса</li>
                <li>Появится смелость в написании текстов</li>
                <li>Структурированные знания о профессии</li>
              </ul>
            </div>
          </div>
          <div class="item" v-scroll="{ class: 'fade-left-more'}">
            <img src="/image/banner2.svg">
          </div>
        </div>
      </div>
    </div>

    <div class="block gray text-center" ref="teachers">
      <div class="container">
        <div class="title">Преподаватели</div>
        <div class="team">
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <img src="/image/team/1.png">
            <p class="title">Никита Лабутин</p>
            <p class="text">Основатель школы, интернет-маркетолог</p>
          </div>
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <img src="/image/team/2.png">
            <p class="title">Ярослава Ли</p>
            <p class="text">Преподаватель, практикующий писатель</p>
          </div>
          <div class="item" v-scroll="{ class: 'fade-up-more'}">
            <img src="/image/team/3.png">
            <p class="title">Светлана Савичева</p>
            <p class="text">Преподаватель, интернет-маркетолог</p>
          </div>
        </div>
      </div>
    </div>

    <div class="block text-center" ref="program">
      <div class="container">
        <p class="title">Программа курса</p>
        <div class="item">
          <ul class="timeline timeline-centered">
            <li class="timeline-item">
              <div class="timeline-info">
                <span v-scroll="{ class: 'fade-right'}">1 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-left'}">
                <h3 class="timeline-title">Введение в профессию</h3>
                <p>На первом занятии мы рассматриваем, чем на самом деле занимается копирайтер, кто ему платит деньги, сколько и за что.</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-right'}">
                <h3 class="timeline-title">Основы структуры текста</h3>
                <p>Структурная организация текста: заголовки, списки, абзацы. Логическая организация информации в завершенный материал.</p>
              </div>
            </li>

            <li class="timeline-item">
              <div class="timeline-info">
                <span>3 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-left'}">
                <h3 class="timeline-title">Информационный текст</h3>
                <p>Особенности и принципы создания текста в информационном стиле. Алгоритм работы над текстом. Композиция текста: приемы линейного и параллельного изложения.</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>4 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-right'}">
                <h3 class="timeline-title">Основы структуры текста</h3>
                <p>Что такое продающий текст. Основные отличия от рекламного. Виды и особенности продающих текстов. Воронка копирайтинга.</p>
              </div>
            </li>

            <li class="timeline-item">
              <div class="timeline-info">
                <span>5 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-left'}">
                <h3 class="timeline-title">Креативный текст</h3>
                <p>Способы, методы и приемы добавления креатива в текст. Ключевые формулы креативных текстов. Виды и особенности.</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>6 занятие</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content" v-scroll="{ class: 'fade-right'}">
                <h3 class="timeline-title">Пишем дипломную работу</h3>
                <p>Подводим итоги, обобщаем опыт, пишем дипломную работу с коллективным разбором текста.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="block" ref="register">
      <div class="container">
        <div class="contact">
          <div class="content">
            <div class="item" v-scroll="{ class: 'fade-rigth-more'}">
              <form class="contact-form">
                <p class="title">Записаться на курс</p>
                <fieldset>
                  <input placeholder="Имя" type="text" required>
                </fieldset>
                <fieldset>
                  <input placeholder="Фамилия" type="email" required>
                </fieldset>

                <fieldset>
                  <textarea placeholder="Ваше сообщение...." required></textarea>
                </fieldset>
                <fieldset>
                  <btnSplit span="Записаться"/>
                </fieldset>
              </form>
            </div>
            <div class="item" v-scroll="{ class: 'fade-left-more'}">
              <p class="title">Присоединяйся</p>
              <p class="subtitle">Стоимость обучения</p>
              <p class="price">40.000 Р</p>
              <p class="price-through">60.000 Р</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
import btnSplit from "~/components/button.vue";

export default {
  components: {
    btnSplit,
    navbar
  },
  head: {
    title:
      "Онлайн курс по копирайтингу | Обучение копирайтингу с нуля дистанционно",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Освойте полный цикл создания контента, научитесь писать тексты для любой аудитории и удерживать внимание читателя."
      }
    ]
  },
  data() {
    return {
      activeLink: 0,
      sectionOffset: []
    };
  },
  methods: {
    scroll() {
      console.log(this.$refs.about.offsetTop);

      this.$refs.register.scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollTo(element) {
      this.$refs[element].scrollIntoView({
        behavior: "smooth"
      });
    },
    detectedScroll() {
      let index = this.sectionOffset.length;
      while (--index && window.scrollY + 150 < this.sectionOffset[index]) {}
      this.activeLink = index;
    }
  },
  mounted() {
    let section = Object.keys(this.$refs);
    section.forEach(el => this.sectionOffset.push(this.$refs[el].offsetTop));
    window.addEventListener("scroll", this.detectedScroll);
  }
};
</script>


