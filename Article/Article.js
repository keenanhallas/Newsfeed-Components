/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: `Lambda School Students: "We\'re the best!"`,
    date: `Nov 5th, 2018`,
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: `Javascript and You, ES6`,
    date: `May 7th, 2019`,
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: `React vs Angular vs Vue`,
    date: `June 7th, 2019`,
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: `Professional Software Development in 2019`,
    date: `Jan 1st, 2019`,
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: `Dialectic sublimation and subcultural materialist theory`,
    date: `Apr 14th, 2020`,
    firstParagraph: `Skateboard vape sustainable iPhone, farm-to-table raclette shabby chic vegan gluten-free readymade jianbing blog XOXO sartorial. 
    Bespoke literally taxidermy, typewriter twee venmo celiac pop-up enamel pin lumbersexual microdosing. 90's godard forage shabby chic fixie artisan 
    gluten-free keffiyeh. Poke snackwave woke, iPhone crucifix polaroid edison bulb. Pinterest heirloom fingerstache, keytar lumbersexual kogi 90's deep 
    v mumblecore affogato sustainable chillwave franzen drinking vinegar cloud bread. Beard mumblecore kickstarter air plant, 8-bit raclette pinterest 
    pabst activated charcoal. Church-key unicorn activated charcoal, pok pok heirloom fashion axe forage iceland skateboard bicycle rights kitsch marfa 
    neutra whatever locavore.`,

    secondParagraph: `Disrupt everyday carry shabby chic vape cold-pressed, pok pok kickstarter pickled dreamcatcher. Squid occupy activated charcoal, 
    schlitz leggings pinterest chicharrones kitsch church-key. Direct trade lyft tofu bushwick single-origin coffee, deep v yuccie mlkshk drinking vinegar 
    forage next level meditation ugh health goth. Lomo bushwick pok pok lo-fi XOXO pug four loko artisan brooklyn irony.`,

    thirdParagraph: `Pour-over kickstarter kale chips air plant unicorn. Hashtag small batch taxidermy fanny pack, bespoke etsy yuccie vice PBR&B pitchfork 
    actually dreamcatcher hoodie. Vexillologist echo park knausgaard drinking vinegar brunch locavore. Meggings poutine gastropub drinking vinegar, yr 
    everyday carry green juice vice literally taiyaki migas umami venmo sustainable sriracha. Distillery pickled pabst ennui. Messenger bag church-key 
    farm-to-table helvetica, semiotics pug chambray williamsburg poutine beard four loko austin plaid small batch. Affogato truffaut vinyl crucifix pok 
    pok kale chips kombucha cornhole normcore.`
  },
  {
    title: `Gibson and postconceptual desemioticism`,
    date: `Apr 14th, 2020`,
    firstParagraph: `Farm-to-table shabby chic gluten-free hammock biodiesel bitters. Single-origin coffee meggings offal, twee raclette drinking vinegar
     health goth leggings gastropub bitters. Af bicycle rights franzen godard knausgaard. Hammock wayfarers pabst tattooed iceland echo park. Bitters 
     listicle 90's lyft meditation. Tofu occupy typewriter, sustainable raclette swag fingerstache yr chicharrones gochujang pok pok. You probably haven't
      heard of them celiac gluten-free shoreditch gastropub, microdosing next level palo santo ethical chillwave cred sriracha four loko.`,

    secondParagraph: `Fanny pack cray hoodie cloud bread leggings. Keffiyeh distillery taxidermy fingerstache microdosing ethical williamsburg pork belly 
    pok pok retro tacos fam tumeric aesthetic. Venmo polaroid sriracha, squid microdosing post-ironic semiotics farm-to-table tattooed waistcoat fixie 
    tousled PBR&B. Normcore messenger bag retro raclette unicorn air plant, taiyaki brooklyn helvetica organic woke narwhal pok pok. Enamel pin small batch 
    seitan forage you probably haven't heard of them, poke affogato 8-bit plaid craft beer fingerstache cred irony. Chartreuse DIY enamel pin meggings 
    skateboard semiotics helvetica health goth bespoke PBR&B etsy 3 wolf moon forage.`,

    thirdParagraph: `Meh leggings gochujang live-edge, glossier fashion axe humblebrag pickled. Activated charcoal seitan kickstarter, beard vexillologist 
    90's adaptogen selfies slow-carb la croix put a bird on it. Listicle lomo single-origin coffee, cold-pressed selvage williamsburg poutine tote bag 
    jean shorts swag subway tile biodiesel. Lo-fi blue bottle tumblr poke readymade viral deep v taxidermy ugh occupy ramps ennui mustache. Vexillologist 
    pabst tote bag umami tattooed shaman sriracha before they sold out everyday carry skateboard tousled chartreuse DIY brooklyn freegan.`
  },
  {
    title: `Consensuses of collapse`,
    date: `Apr 14th, 2020`,
    firstParagraph: `Society is fundamentally a legal fiction,” says Baudrillard; however,
    according to Brophy , it is not so much society that is
    fundamentally a legal fiction, but rather the economy, and hence the absurdity,
    of society. Lyotard uses the term ‘rationalism’ to denote the bridge between
    sexual identity and society. In a sense, the main theme of the works of Joyce
    is the paradigm, and subsequent futility, of textual language.`,

    secondParagraph: `“Truth is elitist,” says Debord; however, according to Humphrey , it is not so much truth that is elitist, but rather the
    economy of truth. A number of narratives concerning the role of the observer as
    artist exist. Therefore, Lacan uses the term ‘capitalist deappropriation’ to
    denote the collapse, and subsequent economy, of subdialectic class.`,

    thirdParagraph: `In the works of Eco, a predominant concept is the concept of dialectic
    narrativity. The subject is interpolated into a rationalism that includes
    consciousness as a paradox. It could be said that in The Name of the
    Rose, Eco denies Derridaist reading; in The Island of the Day
    Before, although, he affirms Marxist socialism.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function articleCreator(article){
  let articleDiv = document.createElement(`div`);
  articleDiv.classList.add(`article`);

    let title = document.createElement(`h2`);
    title.textContent = article.title;
    articleDiv.appendChild(title);

    let date = document.createElement(`p`);
    date.textContent = article.date;
    date.classList.add(`date`);
    articleDiv.appendChild(date);

    let paragraph1 = document.createElement(`p`);
    paragraph1.textContent = article.firstParagraph;
    articleDiv.appendChild(paragraph1);

    let paragraph2 = document.createElement(`p`);
    paragraph2.textContent = article.secondParagraph;
    articleDiv.appendChild(paragraph2);

    let paragraph3 = document.createElement(`p`);
    paragraph3.textContent = article.thirdParagraph;
    articleDiv.appendChild(paragraph3);

    let closeButton = document.createElement(`button`);
    closeButton.textContent = "Article Read";
    closeButton.addEventListener("click", event => {
      event.target.parentElement.style.display = "none";
    });
    articleDiv.appendChild(closeButton);

    let expandButton = document.createElement(`span`);
    expandButton.textContent = `\u234c`; //how would I use an HTML character here?
    expandButton.style.fontSize = "1.6rem";
    expandButton.classList.add(`expandButton`);
    expandButton.addEventListener(`click`, event => {
      articleDiv.classList.toggle(`article-open`);
    });
    articleDiv.appendChild(expandButton);

    return articleDiv;
}

articleComponents = data.map(articleObj => {
  return articleCreator(articleObj); //is it useful to assign this to a variable & return the variable instead?
});

articles = document.querySelector(".articles");

articleComponents.forEach(comp => {
  articles.appendChild(comp);
});

// articles = document.querySelector(".articles");

// data.forEach(articleObj => { other (less powerful?) way of doing the same thing
//   articles.appendChild(articleCreator(articleObj));
// });