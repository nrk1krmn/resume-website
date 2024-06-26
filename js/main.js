let lang = true;
setLang(lang);

const languageButton = document.getElementById('lang_button');
languageButton.addEventListener('click', () => {
    lang = !lang;
    setLang(lang);
})

function setLang(lang) {
    const myAge = getMyAge();
    const headerParagraph = document.getElementById('header_p');
    const headerParagraph2 = document.getElementById('header_p2');
    const softSkillsHeader = document.getElementById('soft_skills_header');
    const hardSkillsHeader = document.getElementById('hard_skills_header');
    const projectsHeader = document.getElementById('projects_header');
    const projectsUl = document.getElementById('projects_ul');
    const languageButton = document.getElementById('lang_button');
    if (lang) {
        headerParagraph.innerHTML =
            `Hi there! I’m Narek, a ${myAge}-year-old developer from Saint-Petersburg, Russia.`;
        headerParagraph2.innerHTML =
            `Right now, my main focus is on developing Telegram-bots and extensions for Chromium-based browsers. In my free time, I'm studying C and computer science. Apart from coding, I enjoy active hobbies like cycling and basketball, as well as reading literature, particularly classical and philosophical works.
        `;
        softSkillsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">My soft skills:</p> Сommunicativness, punctuality, desire for growth`
        hardSkillsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">My hard skills:</p> TypeScript, JavaScript, NodeJS, SQL, Linux, C, C++ (Qt, QML), Git, Telegram-bots, Chrome-extensions, Scraping, Parsing`
        projectsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">My projects:</p>`
        projectsUl.innerHTML = `
        <li><a href="https://t.me/avito_parser_krmn_bot" target="_blank">Avito Monitor</a> - Telegram-bot for tracking ads on the Avito service</li>
        <li><a href="https://t.me/at_bw_bot" target="_blank">BestWatch Monitor</a> - Telegram-bot for tracking the prices of wristwatches from the website BestWatch.ru</li>
        <li><a href="https://github.com/nrk1krmn/srt-translator" target="_blank">SRT Translator</a> - NodeJS script for translating subtitles in .srt format</li>
        <li><a href="https://t.me/geekbenchscores_bot" target="_blank">GeekBench Scraper</a> - Telegram-bot for scraping CPU benchmark scores from GeekBench browser</li>
        <li><a href="https://t.me/img_comb_bot" target="_blank">Image Combiner</a> - Telegram-bot for quick photo merging</li>
        <li><a href="https://t.me/wheremymoney_krmn_bot" target="_blank">Где деньги?</a> - Telegram-bot for personal finance accounting</li>
        `
        languageButton.innerHTML = `<img src="./pics/uk.png" width="25vh" height="25vh">`
    } else {
        headerParagraph.innerHTML =
            `Привет, меня зовут Нарек! Мне ${myAge}, я разработчик из Санкт-Петербурга.`;
        headerParagraph2.innerHTML =
            `В данный момент времени я преимущественно занимаюсь разработкой Телеграм-ботов и расширений для Chromium-based браузеров, изучаю C и информатику. В свободное от разработки и учебы время предпочитаю активный отдых, в особенности люблю велопоездки и баскетбол. Но отдых отдыху рознь и сил подняться с дивана хватает не всегда. В таких случаях предпочитаю пропадать на страницах классической и философской литературы.
        `;
        softSkillsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">Мои софт скиллы:</p> Коммуникативность, пунктуальность, стремление к профессиональному росту`
        hardSkillsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">Мои хард скиллы:</p> TypeScript, JavaScript, NodeJS, SQL, Linux, C, C++ (Qt, QML), Git, Телеграм-боты, Chrome-расширения, Скрейпинг, Парсинг`
        projectsHeader.innerHTML = `<p style=" color: #332942; background-color: #BB9AF7 ">Мои проекты:</p>`
        projectsUl.innerHTML = `
        <li><a href="https://t.me/avito_parser_krmn_bot" target="_blank">Avito Monitor</a> - Телеграм-бот для отслеживания товаров на Авито</li>
        <li><a href="https://t.me/at_bw_bot" target="_blank">BestWatch Monitor</a> - Телеграм-бот для отслеживания цен на наручные часы на сайте BestWatch.ru</li>
        <li><a href="https://github.com/nrk1krmn/srt-translator" target="_blank">SRT Translator</a> - NodeJS скрипт для перевода субтитров формата .srt</li>
        <li><a href="https://t.me/geekbenchscores_bot" target="_blank">GeekBench Scraper</a> - Телеграм-бот для сбора информации о синтетических тестах процессоров проведенных в сервисе GeekBench</li>
        <li><a href="https://t.me/img_comb_bot" target="_blank">Image Combiner</a> - Телеграм-бот для быстрого объединения фотографий</li>
        <li><a href="https://t.me/wheremymoney_krmn_bot" target="_blank">Где деньги?</a> - Телеграм-бот для учета личных финансов</li>
        `
        languageButton.innerHTML = `<img src="./pics/russia.png" width="25vh" height="25vh">`
    }
}

function getMyAge() {
    const birthDate = new Date('2005-06-18');
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (currentMonth == 6 && currentDay >= 18 || currentMonth > 6) {
        return currentYear - birthDate.getFullYear();
    } else {
        return currentYear - birthDate.getFullYear() - 1;
    };
}
