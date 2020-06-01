let languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

// vanilla js
document.addEventListener('DOMContentLoaded', function() {
  let languageList = document.getElementById('languageList').innerHTML;
  languageList = Handlebars.compile(languageList);

  let languageTemplate = document.getElementById('languageTemplate').innerHTML;
  Handlebars.registerPartial('languageTemplate', languageTemplate);

  document.getElementById('languages').insertAdjacentHTML('beforeend', languageList({langs: languages}));

  languages.forEach(lang => {
    let p = document.querySelector('[data-lang=' + lang.name + '] p');
    p.textContent = shortenDescription(lang.description);
  });

  function shortenDescription(description) {
    return description.slice(0, 117) + '...';
  }

  function toggleDescription(p, lang) {
    for (let i = 0; i < languages.length; i += 1) {
      if (languages[i].name === lang) {
        let description = languages[i].description;
        p.textContent = p.textContent.length > 120 ? shortenDescription(description) : description;
        break;
      }
    }
  }

  function toggleButtonText(a) {
    a.textContent = a.textContent.includes('More') ? 'Show Less' : 'Show More';
  }

  document.getElementById('languages').addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      let a = e.target;
      let p = a.previousElementSibling;
      let lang = a.parentNode.dataset.lang;
      toggleDescription(p, lang);
      toggleButtonText(a);
    }
  });
});

// jquery
// $(function() {
//   let languageList = $('#languageList').html();
//   languageList = Handlebars.compile(languageList);

//   let languageTemplate = $('#languageTemplate').html();
//   Handlebars.registerPartial('languageTemplate', languageTemplate);

//   $('#languages').append(languageList({langs: languages}));

//   languages.forEach(lang => {
//     let $p = $('[data-lang=' + lang.name + ']').find('p:eq(0)');
//     $p.text(shortenDescription(lang.description));
//   });

//   function shortenDescription(description) {
//     return description.slice(0, 117) + '...';
//   }

//   function toggleDescription($p, lang) {
//     for (let i = 0; i < languages.length; i += 1) {
//       if (languages[i].name === lang) {
//         let description = languages[i].description;
//         $p.text($p.text().length > 120 ? shortenDescription(description) : description);
//         break;
//       }
//     }
//   }

//   function toggleButtonText($a) {
//     $a.text($a.text().includes('More') ? 'Show Less' : 'Show More');
//   }

//   $('#languages').on('click', 'a', function(e) {
//     e.preventDefault();
//     let $a = $(this);
//     let $p = $a.parent('div').find('p:eq(0)');
//     let lang = $a.parent('.lang').data('lang');
//     toggleDescription($p, lang);
//     toggleButtonText($a);
//   });
// });