/*
Do przerobienia jest kreacja węzlów w formularzu i nie tylko - wczesniej aza wiedzy
//doda onas inne rozdzielczości do preload
*/



$( document ).ready(function() {

  var startHoverOnMenu =(function(){
    

  const toggler = (e)=>{e.target.classList.toggle("menu__item--hover")}

  ['mouseenter', 'mouseleave', 'touchstart', 'touchend'].forEach(function(e){
    [...$('.menu__item')].forEach(element =>{element.addEventListener(e, toggler, false)});
  });

  $('#onas').addClass("is-active");

  })();


  var startHamburgerMenu = (function(){

    var menu = (function(){
      var isHidden = true;
      return {
          isHidden:function(){return isHidden;},
          toggle:function(){isHidden = !isHidden}
      }
    })();

    function toggleClassMenu(){
      if (menu.isHidden()){TweenMax.to(".menu", 1, {xPercent:100, ease: Power2.easeInOut, onComplete: menu.toggle});}
      else {TweenMax.to(".menu", 1, {xPercent: -100, ease: Power2.easeInOut, onComplete: menu.toggle});}
    }
    
    $('.hamburger').on('click', toggleClassMenu)
  
  })();

  var createKonwledgeBase = (function(){
    var articlesOurs =[{h:'Wpływ masażu na organizm i jego układy',text:'Masaż pobudza krążenie i czynność wydalniczą gruczołów skóry, co przyczynia się do jej lepszego odżywienia i zdrowego wyglądu. Usuwa martwe komórki naskórka i likwiduje lub zmniejsza zrosty i zgrubienia. Ponadto powoduje rozbicie tkanki tłuszczowej, co wspomaga proces odchudzania. Masaż przeciwdziała wielu chorobom i uszkodzeniom skóry, zapobiega powstawaniu odleżyn. Dzięki pobudzeniu krwioobiegu masaż powoduje szybsze dostarczanie substancji odżywczych i tlenu do mięśni, a co za tym idzie - ich szybszy rozwój. Wywoływane przez masaż napięcie w mięśniach przeciwdziała ich zanikowi, zwiększa elastyczność i przyspiesza regenerację. Zabieg ten także znacząco zwiększa zdolność mięśni do wysiłku, a po wysiłku odpręża i daje ulgę.Masaż stymuluje układ krwionośny do wzmożonej pracy, co powoduje lepszy przepływ krwi i limfy, a co za tym idzie szybszy transport substancji odżywczych i odprowadzanie szkodliwych produktów przemiany materii, co działa niezwykle dobroczynnie na cały organizm, odżywiając i oczyszczając tkanki. Pobudzając naczynia włosowate, masaż również działa przeciwzakrzepowo.'},
    {h:'Ergonomia - czym jest i czy jest istotna',text:'Warto odpowiedzieć sobie na pytanie, czym jest ergonomia. Jest to dziedzina zajmująca się zapewnieniem bezpieczeństwa w miejscu pracy. Jednocześnie dzięki niej zapewniana jest większa wydajność pracowników.Jak już wspominaliśmy, przedsiębiorcy chcą zminimalizować ryzyko wypadków przy pracy. Dzięki ergonomii bada się warunki pracy pod kątem ich dopasowania do pracownika na danym stanowisku i dzięki temu zapewnia się mu bezpieczeństwo. Dodatkowo dzięki ergonomii można stworzyć nowe, dostosowane stanowiska pracy i naprawiać te, które już istnieją.Ergonomia dzieli się na ergonomię koncepcyjną i korekcyjną. Na czym polega różnica między nimi.Ergonomia koncepcyjna pozwala na stworzenie bezpiecznego miejsca pracy już na etapie planowania. Co to oznacza? Dzięki temu rodzajowi ergonomii to maszyny są dopasowywane do stanowiska i do danego pracownika.Dzięki temu projektanci maszyn już od początku mogą eliminować wady narzędzi i sprawić, by praca z nimi była jak najmniej ryzykowna.Ergonomia ta pomaga również w wyborze odpowiedniej maszyn do przedsiębiorstwa. Specjaliści BHP mogą określić, czy są one odpowiednie dla wykonywania danych czynności i czy warto je zakupić.'}]


    var articlesExternals =[{h:'Dieta Montignaca',text:'Według twórcy tej diety, nie należy ograniczać wielkości posiłków i ich kaloryczności, ale kontrolować zawartość węglowodanów w diecie. Średni ubytek masy ciała wynosi 1–2 kg na tydzień.Niełączenie produktów tłuszczowych z węglowodanami o wysokim indeksie glikemicznym oraz ograniczenie tłuszczy pochodzenia zwierzęcego - to założenia diety Montignaca. Odpowiednie zestawienie węglowodanów, białek i tłuszczów gwarantuje sprawny przebieg procesów trawiennych. Dzięki eliminacji produktów o wysokim indeksie glikemicznym następuje zmniejszenie wahania poziomu cukru we krwi, co wspomaga redukcję masy ciała.Ogólne założenia kuracji nie są specjalnie skomplikowane. Podstawowym obowiązkiem oczywiście jest spożywanie jak najwięcej produktów o niskim indeksie glikemicznym. W diecie Montignaca przyjdzie nam jeść co najmniej trzy podstawowe posiłki o stałych porach. Warto zauważyć że autor kuracji praktycznie nie każe liczyć nam kalorii, co jest niewątpliwie wielkim plusem dla wszystkich smakoszy. Według Dr Montignaca w innych kuracjach w których trzeba ograniczać spożywane kalorie występuje pewna zależność. Otóż rzeczywiście drastyczne odstawienie posiłków skutkuje natychmiastową utratą tłuszczu, lecz organizm po jakimś czasie przystosowuje się do tego i po skończeniu diety w której było dostarczane mało kalorii gdy wracamy do starych nawyków bardzo szybko na powrót odtłuszczamy się jest to tak zwany efekt jojo. By uniknąć takiego stanu, należy właśnie rozsądnie dobierać produkty. Dlatego komponując menu w diecie montignaca możemy nie liczyć kalorii komponowanych dań, należy jedynie robić je z jak najlepszych produktów o niskim indeksie glikemicznym. Omawiana dieta dzieli się na dwa etapy. Pierwszy jest to typowa faza uderzeniowa podczas której chudniemy i uczymy się jak przyrządzać zdrowe i smaczne posiłki. Czas jej trwania jest sprawą indywidualną. Może trwać od kilku tygodni do kilkunastu miesięcy. Drugi etap z kolei jest kontynuacją pierwszego i trwa przez resztę życia.'},
    {h:'Masaż tkanek głębokich',text:'Masaż tkanek głębokich, nazywany też masażem głębokim, wbrew groźnie brzmiącej nazwie, jest delikatny i przebiega w wolnym tempie. Cel masażu tkanek głębokich stanowi wpłynięcie na stan mięśni – zmniejszenie ich napięcia i rozluźnienie, a także zwiększenie płynności ruchów.Masaż głęboki (masaż tkanek głębokich) nie jest zabiegiem relaksacyjnym – wręcz przeciwnie – jego celem jest zwiększenie ruchliwości naszych tkanek, a jednak zabieg ten nie powoduje u pacjenta uczucia dyskomfortu czy bólu.Dlaczego tak się dzieje? Podczas masażu tkanek głębokich z mięśni pacjenta uwalnia się napięcie, więc aby uzyskać ten efekt, masażysta nie może stosować mocnych ruchów i sztywnej postawy. Co więcej, stonowane i przemyślane ruchy pozwalają tkankom na "przyzwyczajenie" się do nowej sytuacji, zareagowanie na czynności masażysty. Dlatego ten wykorzystuje masę swojego ciała, przybierając wyprostowaną postawę, nie musząc działać na ciało pacjenta z dużą siłą. Powolne i dokładne ruchy osoby wykonującej masaż nie nadwyrężają mięśni, co więcej – umożliwiają łatwiejszy i dokładniejszy dostęp do tkanek głębokich. Nie powodują również obronnego napięcia mięśni u pacjenta.Pacjent nie musi się do zabiegu specjalnie przygotowywać – najlepiej, by na około 2 godziny przed zabiegiem nie spożywać ciężkich posiłków. Podczas masażu przebywa się w luźnym ubraniu, odsłaniając masowane części ciała. Masażysta w trakcie sesji nie korzysta ze środków poślizgowych, takich jak np. oliwki lub używa ich w ograniczonym stopniu, ponieważ utrudniają one dokładne dotarcie do tkanek. Efekty działania masażu głębokiego określa się często jako większe i szybsze niż w przypadku masażu klasycznego czy masaży relaksacyjnych.'}]

    const knowledgeChapters = [...( $('#bazawiedzy .page__chapter'))];

    const knowledgeOurs = knowledgeChapters[0];

    articlesOurs.forEach(element=> {
        const div= document.createElement("div"); 
        div.classList.add('bazawiedzy-text');
        div.innerHTML= `<h3 class='bazawiedzy__header'>${element.h}</h3><span>${element.text}</span>`;
        knowledgeOurs.appendChild(div);
    })

    const knowledgeExternals = knowledgeChapters[1];
    articlesExternals.forEach(element=> {
        const div = document.createElement("div"); 
        div.classList.add('bazawiedzy-text');
        div.innerHTML= `<h3 class ='bazawiedzy__header'>${element.h}</h3><span>${element.text}</span>`;
        knowledgeExternals.appendChild(div);
      
    })
    
  })();


})

let form = document.getElementById('contact-form');

form.addEventListener('submit', function(e){

e.preventDefault();

const content = {
  name: $('#name').val(),
  email: $('#email').val(),
  subject: $('#subject').val(),
  message: $('#message').val(),
}

function resetInputFields(){
 document.getElementById('contact-form').reset() 
}

	fetch('https://www.enformed.io/9kibv8hh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(data => handleResult(true))
    .catch(error => handleResult(false));


  function handleResult(alert) {

    let result = {
      text: alert ? 'Wysłano' : 'Błąd połączenia',
      style: alert ? 'successStyle' : 'failureStyle'
    }
    setMessage();
    setTimeout(function () {removeMessage(); }, 3000);
    
    function setMessage(){$("#status_message").append("<div id='sentSuccess' class='"+result.style+"'>"+result.text+"</div>")}
    
    function removeMessage(){ 
      $("#status_message").children().remove();
      resetInputFields()}
  }
});