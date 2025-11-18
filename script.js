const categories = [
  {
    id: "frappuccino",
    label: "الفرابتشينو",
    tagline: "قوام مخملي مع طبقات الكريمة الباردة",
    texture: { start: "#fbd9a6", end: "#c86f35" },
    description:
      "مستوحاة من صور الفرابتشينو الأصلية مع ضباب طفيف وألوان كريمية دافئة.",
    items: [
      {
        name: "فرنسي فرابي",
        price: "14 ريال",
        calories: "190 سعرة حرارية",
        description: "مزيج القهوة الفرنسية مع كريمة فانيليا ومدى من الكراميل.",
        colors: ["#f8d9b9", "#e49856"],
      },
      {
        name: "شوكلينت فرابي",
        price: "14 ريال",
        calories: "190 سعرة حرارية",
        description: "كوب غني من الشوكولاتة الداكنة والرغوة الباردة.",
        colors: ["#cfa57b", "#6a3a1a"],
      },
      {
        name: "إيطالي فرابي",
        price: "14 ريال",
        calories: "190 سعرة حرارية",
        description: "نكهة الاسبريسو الإيطالي مع لمسة بندق مدخنة.",
        colors: ["#f5c082", "#b9672a"],
      },
      {
        name: "موكا فرابي",
        price: "14 ريال",
        calories: "190 سعرة حرارية",
        description: "موكا باردة مع رقائق الشوكولاتة ولمعة بنية لامعة.",
        colors: ["#e1b47c", "#7b3b25"],
      },
    ],
  },
  {
    id: "cold",
    label: "المشروبات الباردة",
    tagline: "سطح زجاجي بارد مع تكثف خفيف",
    texture: { start: "#a8d8c7", end: "#204f42" },
    description: "كوكتيلات باردة مستوحاة من الخلفيات الخضراء والباردة في الصور.",
    items: [
      {
        name: "بارد مزاج فل",
        price: "12 ريال",
        calories: "120 سعرة حرارية",
        description: "قهوة باردة مع حليب جوز الهند ولمسة جوافة.",
        colors: ["#d4f5e3", "#4c8c74"],
      },
      {
        name: "كاراميل مثلج",
        price: "13 ريال",
        calories: "160 سعرة حرارية",
        description: "حليب بارد مع شراب الكراميل على طبقات جليد لامعة.",
        colors: ["#f9e1bd", "#d19451"],
      },
      {
        name: "موكا بالثلج",
        price: "14 ريال",
        calories: "180 سعرة حرارية",
        description: "كريمة الشوكولاتة مع حبّات البن المحمصة وقطع الثلج.",
        colors: ["#f2d2b4", "#7a3a30"],
      },
      {
        name: "سبارك الفانيلا",
        price: "11 ريال",
        calories: "130 سعرة حرارية",
        description: "مياه فوارة بالفانيلا ونغمات ياسمين منعشة.",
        colors: ["#f5f2e6", "#c7c1a0"],
      },
    ],
  },
  {
    id: "hot",
    label: "المشروبات الساخنة / القهوة",
    tagline: "دخان ناعم وضوء شمسي ذهبي",
    texture: { start: "#f1d1a3", end: "#5c2d11" },
    description: "قهوة جَبَنة، اسبريسو، وكابتشينو بعمق اللون البني الدافئ.",
    items: [
      {
        name: "اسبريسو مزدوج",
        price: "10 ريال",
        calories: "45 سعرة حرارية",
        description: "تحميص داكن مع رغوة بسيطة وعطر قوي.",
        colors: ["#f2cda0", "#5b2810"],
      },
      {
        name: "كابتشينو مزاج",
        price: "12 ريال",
        calories: "150 سعرة حرارية",
        description: "حليب مخمّر مع بودرة قرفة ووجه فني.",
        colors: ["#f8d8b2", "#8d4c22"],
      },
      {
        name: "لاتيه بالعسل",
        price: "13 ريال",
        calories: "170 سعرة حرارية",
        description: "لاتيه ناعم بالعسل الجبلي ولمسات فانيلا.",
        colors: ["#f1d9b0", "#d49851"],
      },
      {
        name: "جبنة على الفحم",
        price: "14 ريال",
        calories: "190 سعرة حرارية",
        description: "بن أثيوبي مع تبخير فخم وطابع ترابي.",
        colors: ["#f5c494", "#432012"],
      },
    ],
  },
  {
    id: "mojito",
    label: "الموهيتو",
    tagline: "بريق النعناع والليمون",
    texture: { start: "#d4fddb", end: "#1f7a5a" },
    description: "موهيتو بألوان الزمرد والفواكه الاستوائية تماماً كما في الصور.",
    items: [
      {
        name: "موهيتو الليمون",
        price: "15 ريال",
        calories: "140 سعرة حرارية",
        description: "ليمون طازج، نعناع، وصودا ناعمة مع الثلج.",
        colors: ["#ddffe8", "#7ad79e"],
      },
      {
        name: "موهيتو الباشن",
        price: "16 ريال",
        calories: "150 سعرة حرارية",
        description: "باشن فروت مع شرائح أناناس وظلال بنفسجية.",
        colors: ["#ffe9c2", "#ec8f5d"],
      },
      {
        name: "موهيتو التمر الهندي",
        price: "16 ريال",
        calories: "155 سعرة حرارية",
        description: "لون نحاسي مع فقاعات داكنة ولمعة ذهبية.",
        colors: ["#f9d1a0", "#9c4c28"],
      },
      {
        name: "موهيتو الفراولة",
        price: "15 ريال",
        calories: "150 سعرة حرارية",
        description: "فراولة مع نعناع وبرودة هلامية.",
        colors: ["#ffd6dd", "#f24c75"],
      },
    ],
  },
  {
    id: "milkshake",
    label: "الميلك شيك",
    tagline: "رغوة كثيفة ولمعان كريمي",
    texture: { start: "#ffe7f3", end: "#f2a4ce" },
    description: "ألوان الباستيل وخطوط الكريمة كما في صور الميلك شيك الأصلية.",
    items: [
      {
        name: "فانيلا كلاسيك",
        price: "14 ريال",
        calories: "220 سعرة حرارية",
        description: "كريمة فانيليا ومارشميلو عائم.",
        colors: ["#fff4e8", "#f8c79c"],
      },
      {
        name: "أوريو شوك",
        price: "15 ريال",
        calories: "250 سعرة حرارية",
        description: "قطع أوريو ودوامات شوكولاتة على كوب زجاجي.",
        colors: ["#f5efe7", "#514a45"],
      },
      {
        name: "فستق سماوي",
        price: "16 ريال",
        calories: "230 سعرة حرارية",
        description: "كريمة فستق مع فتات ذهبية وبودرة ورد.",
        colors: ["#dff6eb", "#6aa98d"],
      },
      {
        name: "كراميل بحر الملح",
        price: "16 ريال",
        calories: "240 سعرة حرارية",
        description: "كريمة بحرية مع ملح زهري وخطوط ذهبية.",
        colors: ["#fbe1c5", "#c8863a"],
      },
    ],
  },
  {
    id: "tea",
    label: "براد شاي",
    tagline: "ضباب دافئ وعطر الهيل",
    texture: { start: "#f5d4b0", end: "#593521" },
    description: "براد الشاي التقليدي مع بخار وتدرجات نحاسية.",
    items: [
      {
        name: "براد شاي عدني",
        price: "18 ريال",
        calories: "110 سعرة حرارية",
        description: "هيل، حليب، وزعفران على نار هادئة.",
        colors: ["#f5cfb4", "#a06b42"],
      },
      {
        name: "براد شاي أخضر",
        price: "16 ريال",
        calories: "70 سعرة حرارية",
        description: "شاي ياسمين مع توهج أخضر خفيف.",
        colors: ["#e1f5d6", "#6d9b52"],
      },
      {
        name: "براد كرك",
        price: "18 ريال",
        calories: "180 سعرة حرارية",
        description: "شاي ماسالا غني برغوة بنية.",
        colors: ["#f1cfa7", "#8a4a22"],
      },
      {
        name: "شاي وردي",
        price: "17 ريال",
        calories: "140 سعرة حرارية",
        description: "ورد مع حليب اللوز ولمعان لؤلؤي.",
        colors: ["#f3d9e8", "#d17fa2"],
      },
    ],
  },
  {
    id: "jebena",
    label: "جبنة في جبنة",
    tagline: "طقوس القهوة الحبشية",
    texture: { start: "#f1cea2", end: "#3a1d10" },
    description: "إضاءة دافئة مع فخار جبنة وحبوب بن محمصة.",
    items: [
      {
        name: "جبنة كلاسيك",
        price: "19 ريال",
        calories: "80 سعرة حرارية",
        description: "تحميص إثيوبي مع تبخير على الجمر.",
        colors: ["#f7d4a2", "#6f3a1f"],
      },
      {
        name: "جبنة مع حليب",
        price: "20 ريال",
        calories: "140 سعرة حرارية",
        description: "قهوة جبنة ملساء مع رغوة حليب مدخنة.",
        colors: ["#f3cda2", "#b57440"],
      },
      {
        name: "جبنة سبايس",
        price: "21 ريال",
        calories: "160 سعرة حرارية",
        description: "هيل وقرفة ونكهات دخانية.",
        colors: ["#f0ba87", "#663217"],
      },
      {
        name: "جبنة تمر",
        price: "20 ريال",
        calories: "150 سعرة حرارية",
        description: "تحلية تمر وروائح بخور لطيفة.",
        colors: ["#f7cea5", "#a15c2f"],
      },
    ],
  },
  {
    id: "juices",
    label: "العصائر الطازجة",
    tagline: "ألوان الفواكه الصافية",
    texture: { start: "#ffefa6", end: "#f78c33" },
    description: "كؤوس لامعة مع جزر، مانجو، ورشات ماء منعشة.",
    items: [
      {
        name: "مانجو سماوي",
        price: "13 ريال",
        calories: "160 سعرة حرارية",
        description: "مانجو عضوي وشرائح ليمون مجفف.",
        colors: ["#ffe58f", "#f3941d"],
      },
      {
        name: "كوكتيل مزاج",
        price: "15 ريال",
        calories: "180 سعرة حرارية",
        description: "طبقات فواكه واستوائية مع بذور الشيا.",
        colors: ["#ffd0b6", "#ff7c4d"],
      },
      {
        name: "برتقال جزر",
        price: "12 ريال",
        calories: "150 سعرة حرارية",
        description: "برتقال يمني مع جزر ومسة زنجبيل.",
        colors: ["#ffe6b0", "#f9842b"],
      },
      {
        name: "رمان نعناع",
        price: "15 ريال",
        calories: "170 سعرة حرارية",
        description: "رمان مركز ونعناع بارد.",
        colors: ["#ffd1d8", "#c1364f"],
      },
    ],
  },
  {
    id: "latte",
    label: "القهوة بالحليب",
    tagline: "طبقات حليب ناعمة",
    texture: { start: "#ffe8c8", end: "#b5773a" },
    description: "ألوان البيج والذهبي كما في صور القهوة بالحليب.",
    items: [
      {
        name: "لاتيه كلاسيك",
        price: "13 ريال",
        calories: "160 سعرة حرارية",
        description: "طبقات متدرجة من الاسبريسو والحليب.",
        colors: ["#ffe2c1", "#a3622d"],
      },
      {
        name: "كاراميل لاتيه",
        price: "14 ريال",
        calories: "180 سعرة حرارية",
        description: "شراب الكراميل وملح البحر فوق الحليب.",
        colors: ["#ffdcb0", "#c9853e"],
      },
      {
        name: "فلات وايت",
        price: "14 ريال",
        calories: "150 سعرة حرارية",
        description: "سطح ناعم مع فن اللاتيه.",
        colors: ["#fce0c1", "#b87039"],
      },
      {
        name: "سبايس لاتيه",
        price: "15 ريال",
        calories: "190 سعرة حرارية",
        description: "قرفة وزنجبيل مع رغوة غنية.",
        colors: ["#f7d6b0", "#9a5524"],
      },
    ],
  },
];

const tabsContainer = document.querySelector(".category-tabs");
const menuContainer = document.querySelector(".menu");
const tabTemplate = (category) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = category.label;
  button.dataset.target = category.id;
  button.setAttribute("role", "tab");
  button.addEventListener("click", () => {
    document.getElementById(category.id).scrollIntoView({ behavior: "smooth" });
  });
  return button;
};

const sectionTemplate = document.getElementById("category-section-template");
const cardTemplate = document.getElementById("drink-card-template");

const createCard = (item, categoryTexture) => {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  card.querySelector("h3").textContent = item.name;
  card.querySelector(".price").textContent = item.price;
  card.querySelector(".calories").textContent = item.calories;
  card.querySelector(".description").textContent = item.description;

  const liquid = card.querySelector(".drink-visual .liquid");
  const glass = card.querySelector(".glass-shell");
  glass.style.borderColor = "rgba(255,255,255,0.4)";
  liquid.style.background = `linear-gradient(180deg, ${item.colors[0]}, ${item.colors[1]})`;

  const highlight = card.querySelector(".highlight");
  highlight.style.opacity = 0.6;
  return card;
};

const createSection = (category) => {
  const section = sectionTemplate.content.firstElementChild.cloneNode(true);
  section.id = category.id;
  section.setAttribute("aria-label", category.label);
  section.dataset.title = category.label;

  const header = document.createElement("header");
  const title = document.createElement("h3");
  title.textContent = category.label;
  const tagline = document.createElement("span");
  tagline.textContent = category.tagline;
  const description = document.createElement("p");
  description.textContent = category.description;
  description.classList.add("section-description");

  header.append(title, tagline, description);
  section.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "drink-grid";

  category.items.forEach((item) => {
    grid.appendChild(createCard(item, category.texture));
  });

  section.appendChild(grid);
  return section;
};

const renderMenu = () => {
  categories.forEach((category, index) => {
    const tab = tabTemplate(category);
    if (index === 0) tab.classList.add("active");
    tabsContainer.appendChild(tab);
    menuContainer.appendChild(createSection(category));
  });
};

renderMenu();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelectorAll(".category-tabs button")
          .forEach((btn) => btn.classList.toggle("active", btn.dataset.target === entry.target.id));
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".category-section").forEach((section) => observer.observe(section));

const parallaxElements = document.querySelectorAll("[data-depth]");
document.addEventListener("mousemove", (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 2;
  const y = (event.clientY / innerHeight - 0.5) * 2;
  parallaxElements.forEach((el) => {
    const depth = parseFloat(el.dataset.depth);
    el.style.transform = `translate3d(${x * depth * 20}px, ${y * depth * 20}px, 0)`;
  });
});

const heroButtons = document.querySelectorAll(".hero-cta button, .ghost");
heroButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
  })
);

const ambientAudio = document.getElementById("ambientAudio");
const enableAudio = () => {
  ambientAudio.volume = 0.25;
  ambientAudio.play().catch(() => {});
  document.removeEventListener("click", enableAudio);
};

document.addEventListener("click", enableAudio, { once: true });

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition = `0 ${scrollY * 0.1}px`;
});
