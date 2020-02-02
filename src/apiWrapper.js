const timeOut = ms => new Promise(r => setTimeout(() => r(), ms));

const fetchPerson = async () => {
  await timeOut(800);
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0]);
};

const fetchSlowerAvatar = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0]);
};

const fetchAvatar = async () => {
  await timeOut(800);
  return fetch("https://tinyfac.es/api/users")
    .then(x => x.json())
    .then(x => x[0]);
};

const fetchArticle = () => {
  return fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(x => x.json())
    .then(x => x[0]);
};

const slowArticle = () => {
  const randomDelay = Math.floor(Math.random() * Math.floor(6000));
  const randomArticle = Math.floor(Math.random() * Math.floor(10));

  const articles = [
    'repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt nconsequatur suscipit necessitatibus rerum sed inventore',
    'eos qui et ipsum ipsam suscipit autnsed omnis non odionexpedita earum mollitia molestiae aut atque rem suscipit nnam impedit esse hic recusandae veniam tempora et tenetur nconsequatur suscipit necessitatibus rerum sed ',
    'veritatis unde neque eligendi\\nquae quod architecto quo neque vitae\\nest illo sit tempora doloremque fugit quod\\net et vel beatae sequi ullam sed tenetur perspiciatis nconsequatur suscipit necessitatibus rerum sed inventore',
    'enim et ex nulla\\nomnis voluptas quia qui\\nvoluptatem consequatur numquam aliquam sunt\\ntotam recusandae id dignissimos aut sed asperiores deserunt nomnis aut molestiae vel vero nconsequatur suscipit necessitatibus rerum sed inventore',
    'ullam consequatur ut\\nomnis quis sit vel consequuntur\\nipsa eligendi ipsum molestiae et omnis error nostrum\\nmolestiae illo tempore quia et distinctio nomnis aut molestiae vel vero nconsequatur suscipit necessitatibus rerum sed inventore',
    'similique esse doloribus nihil accusamus\\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\\nperspiciatis cum ut laudantium\\nomnis aut molestiae vel vero nconsequatur suscipit necessitatibus rerum sed inventore',
    'eum sed dolores ipsam sint possimus debitis occaecati\\ndebitis qui qui et\\nut placeat enim earum aut odit facilis\\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur nconsequatur suscipit necessitatibus rerum sed inventore',
    'non et quaerat ex quae ad maiores\\nmaiores recusandae totam aut blanditiis mollitia quas illo\\nut voluptatibus voluptatem\\nsimilique nostrum eum nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur',
    'odit magnam ut saepe sed non qui\\ntempora atque nihil\\naccusamus illum doloribus illo dolor\\neligendi repudiandae odit magni similique sed cum maiores nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur',
    'alias dolor cumque\\nimpedit blanditiis non eveniet odio maxime\\nblanditiis amet eius quis tempora quia autem rem\\na provident perspiciatis quia nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur',
  ];

  return new Promise(res => setTimeout(() => res(articles[randomArticle]), randomDelay));
};

const randomNumber = () => {
  const randomId = Math.floor(Math.random() * Math.floor(1000000000000));
  return new Promise(res => setTimeout(() => res(randomId), 3000));
};

const wrapPromise = promise => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
    avatar: wrapPromise(fetchAvatar()),
    num: wrapPromise(randomNumber()),
    article: wrapPromise(slowArticle()),
    article_two: wrapPromise(slowArticle()),
    slowerAvatar: wrapPromise(fetchSlowerAvatar()),
  };
};