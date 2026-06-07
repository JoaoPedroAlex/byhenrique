export type MenuItem = {
  id: string;
  category: "chef-em-casa" | "take-away" | "evento";
  minPeople?: number;
  image?: string;
  pt: {
    name: string;
    subtitle: string;
    description: string;
    priceLabel: string;
    startersTitle: string;
    starters: {
      name: string;
      description: string;
    }[];
    mainTitle: string;
    main: {
      name: string;
      description: string;
    };
    dessertTitle: string;
    dessert: {
      name: string;
      description: string;
    };
    experience: string[];
  };
  en: {
    name: string;
    subtitle: string;
    description: string;
    priceLabel: string;
    startersTitle: string;
    starters: {
      name: string;
      description: string;
    }[];
    mainTitle: string;
    main: {
      name: string;
      description: string;
    };
    dessertTitle: string;
    dessert: {
      name: string;
      description: string;
    };
    experience: string[];
  };
};

export const menus: MenuItem[] = [
  {
    id: "laventenian",
    category: "chef-em-casa",
    minPeople: 6,
    image: "/images/menus/laventenian.jpg",
    pt: {
      name: "Laventenian Menu",
      subtitle: "Uma experiência inspirada nas tradições culinárias do Levante.",
      description:
        "Um menu de partilha com mezza, sabores intensos, especiarias quentes, pão árabe, kafta no forno e uma sobremesa síria tradicional.",
      priceLabel: "65 € por pessoa",
      startersTitle: "Mezza · Entradas",
      starters: [
        {
          name: "Hummus",
          description:
            "Puré aveludado de grão com tahini, limão e azeite. Finalizado com vegetais frescos ou seleção diária do Chef.",
        },
        {
          name: "Muhammara",
          description:
            "Dip rico de pimento vermelho assado e noz, originário de Aleppo, equilibrado com melaço de romã, azeite e especiarias quentes.",
        },
        {
          name: "Mutabal",
          description:
            "Beringela assada no fogo, envolvida com tahini, alho, limão e iogurte. Cremoso, com aroma profundo a carvão.",
        },
        {
          name: "Musakhan Rolls",
          description:
            "Rolinhos crocantes recheados com cebola com sumac, frango assado e azeite.",
        },
        {
          name: "Arabic Pita Bread",
          description:
            "Pão pita árabe, quente e fresco, servido para partilhar.",
        },
      ],
      mainTitle: "Prato principal",
      main: {
        name: "Oven Roasted Kafta",
        description:
          "Carne picada temperada, assada lentamente num molho rico de tomate com camadas de beringela assada. Servida com arroz aromático ou puré de batata amanteigado, finalizada com frutos secos tostados.",
      },
      dessertTitle: "Sobremesa",
      dessert: {
        name: "Aish El Saraya",
        description:
          "Sobremesa síria tradicional com massa tostada embebida em xarope de flor de laranjeira e rosa, coberta com creme cozido rico e pistáchio.",
      },
      experience: ["Mínimo 6 pessoas.", "65 € por pessoa."],
    },
    en: {
      name: "Laventenian Menu",
      subtitle:
        "A dining experience inspired by the rich culinary traditions of the Levant.",
      description:
        "A sharing menu with mezza, warm spices, Arabic pita bread, oven-roasted kafta and a traditional Syrian dessert.",
      priceLabel: "65 € per person",
      startersTitle: "Mezza · Starters",
      starters: [
        {
          name: "Hummus",
          description:
            "Velvety chickpea purée blended with tahini, lemon and olive oil. Topped with fresh vegetables or the chef’s daily selection.",
        },
        {
          name: "Muhammara",
          description:
            "A rich roasted red pepper and walnut dip from Aleppo, balanced with pomegranate molasses, olive oil and warm spices.",
        },
        {
          name: "Mutabal",
          description:
            "Fire-roasted eggplant blended with tahini, garlic, lemon and yogurt. Creamy with a deep charcoal aroma.",
        },
        {
          name: "Musakhan Rolls",
          description:
            "Crispy rolls filled with sumac onions, roasted chicken and olive oil.",
        },
        {
          name: "Arabic Pita Bread",
          description:
            "Fresh warm pita bread served for sharing.",
        },
      ],
      mainTitle: "Main dish",
      main: {
        name: "Oven Roasted Kafta",
        description:
          "Seasoned minced meat baked slowly in a rich tomato sauce with layers of roasted eggplant. Served with aromatic rice or butter-rich potato purée. Finished with roasted nuts.",
      },
      dessertTitle: "Dessert",
      dessert: {
        name: "Aish El Saraya",
        description:
          "A traditional Syrian Levantine dessert with toasted dough soaked in orange blossom and rose syrup, topped with rich cooked cream and pistachios.",
      },
      experience: ["Minimum 6 guests.", "65 € per person."],
    },
  },
  {
    id: "athenas-table",
    category: "chef-em-casa",
    minPeople: 6,
    image: "/images/menus/athenas.jpg",
    pt: {
      name: "Athena’s Table",
      subtitle:
        "Um menu inspirado nos sabores gregos intemporais e nos longos jantares partilhados.",
      description:
        "Uma mesa mediterrânica com tzatziki, salada grega, spanakopita, moussaka e portokalopita.",
      priceLabel: "65 € por pessoa",
      startersTitle: "Entradas",
      starters: [
        {
          name: "Tzatziki",
          description:
            "Dip grego autêntico de iogurte rico com pepino, alho, azeite e endro fresco.",
        },
        {
          name: "Greek Salad",
          description:
            "Salada tradicional com tomate, pepino, cebola, azeitonas, queijo feta, azeite e orégãos. Servida com pão tostado.",
        },
        {
          name: "Green Beans with Feta",
          description:
            "Feijão-verde cozinhado lentamente com alho, azeite e salsa, finalizado com queijo feta.",
        },
        {
          name: "Spanakopita Rolls",
          description:
            "Rolinhos dourados e crocantes de massa filo recheados com espinafres, feta, ervas e cebola.",
        },
      ],
      mainTitle: "Prato principal",
      main: {
        name: "Moussaka",
        description:
          "Camadas de beringela assada, batata, carne picada temperada e molho de tomate rico, cobertas com béchamel cremoso.",
      },
      dessertTitle: "Sobremesa",
      dessert: {
        name: "Portokalopita",
        description:
          "Bolo grego tradicional de laranja feito com massa filo desfiada e cozido numa calda cítrica rica.",
      },
      experience: ["Mínimo 6 pessoas.", "65 € por pessoa."],
    },
    en: {
      name: "Athena’s Table",
      subtitle:
        "A menu inspired by timeless Greek flavours and long shared dinners.",
      description:
        "A Mediterranean table with tzatziki, Greek salad, spanakopita, moussaka and portokalopita.",
      priceLabel: "65 € per person",
      startersTitle: "Starters",
      starters: [
        {
          name: "Tzatziki",
          description:
            "A rich authentic Greek yogurt dip with cucumber, garlic, olive oil and fresh dill.",
        },
        {
          name: "Greek Salad",
          description:
            "Traditional village salad with tomatoes, cucumber, onions, olives, feta cheese, olive oil and oregano. Served with roasted bread.",
        },
        {
          name: "Green Beans with Feta",
          description:
            "Slow-cooked green beans infused with garlic, olive oil and parsley, topped with feta cheese.",
        },
        {
          name: "Spanakopita Rolls",
          description:
            "Golden crispy filo pastry rolls filled with spinach, feta cheese, herbs and onions.",
        },
      ],
      mainTitle: "Main course",
      main: {
        name: "Moussaka",
        description:
          "Layers of roasted eggplant, potatoes, seasoned minced meat and rich tomato sauce topped with creamy béchamel.",
      },
      dessertTitle: "Dessert",
      dessert: {
        name: "Portokalopita",
        description:
          "Traditional Greek orange cake made with shredded filo pastry baked into a rich citrus syrup.",
      },
      experience: ["Minimum 6 guests.", "65 € per person."],
    },
  },
  {
    id: "fado",
    category: "chef-em-casa",
    minPeople: 6,
    image: "/images/menus/fado.jpg",
    pt: {
      name: "Fado Menu",
      subtitle:
        "Um menu inspirado na alma de Portugal, com sabores reconfortantes e toques modernos.",
      description:
        "Uma interpretação contemporânea de sabores portugueses, com presunto, farinheira, beringela fumada, arroz de pato em filo crocante e bolo de bolacha do Chef.",
      priceLabel: "65 € por pessoa",
      startersTitle: "Entradas",
      starters: [
        {
          name: "Presunto Tartare",
          description:
            "Presunto finamente picado com chalotas, tâmaras, pickles, azeite, alho e salsa. Finalizado com queijo cremoso.",
        },
        {
          name: "Classic Hummus with Farinheira",
          description:
            "Hummus aveludado finalizado com farinheira crocante, notas de frutos secos e pickles da casa.",
        },
        {
          name: "Roasted Smoky Eggplant",
          description:
            "Beringela assada no fogo, envolvida com alho e azeite português rico.",
        },
      ],
      mainTitle: "Prato principal",
      main: {
        name: "Duck Rice in Crispy Filo",
        description:
          "Arroz de pato assinatura do Chef, com pato cozinhado lentamente, arroz aromático e molho aveludado, envolvido em massa filo crocante.",
      },
      dessertTitle: "Sobremesa",
      dessert: {
        name: "Bolo de Bolacha do Chef",
        description:
          "Versão do Chef do clássico bolo de bolacha português, servido em delicados frascos em camadas.",
      },
      experience: ["Mínimo 6 pessoas.", "65 € por pessoa."],
    },
    en: {
      name: "Fado Menu",
      subtitle:
        "A menu inspired by the soul of Portugal with comforting flavours and modern touches.",
      description:
        "A contemporary interpretation of Portuguese flavours, with presunto, farinheira, smoky eggplant, duck rice in crispy filo and the chef’s biscuit cake.",
      priceLabel: "65 € per person",
      startersTitle: "Starters",
      starters: [
        {
          name: "Presunto Tartare",
          description:
            "Finely chopped presunto mixed with shallots, dates, pickles, olive oil, garlic and parsley. Finished with creamy cheese.",
        },
        {
          name: "Classic Hummus with Farinheira",
          description:
            "Velvety hummus topped with crispy nutty farinheira and house pickles.",
        },
        {
          name: "Roasted Smoky Eggplant",
          description:
            "Fire-roasted eggplant blended with garlic and rich Portuguese olive oil.",
        },
      ],
      mainTitle: "Main course",
      main: {
        name: "Duck Rice in Crispy Filo",
        description:
          "The chef’s signature duck rice layered with slow-cooked duck, aromatic rice and velvety sauce wrapped in crispy filo pastry.",
      },
      dessertTitle: "Dessert",
      dessert: {
        name: "Bolo de Bolacha do Chef",
        description:
          "The chef’s version of the beloved Portuguese biscuit cake served in delicate layered jars.",
      },
      experience: ["Minimum 6 guests.", "65 € per person."],
    },
  },
];