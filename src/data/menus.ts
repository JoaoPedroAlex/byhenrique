export type MenuItem = {
  id: string;
  category: "chef-em-casa" | "take-away" | "evento";
  minPeople?: number;
  image?: string;
  pt: {
    name: string;
    description: string;
    priceLabel: string;
    dishes: string[];
    allergens?: string;
  };
  en: {
    name: string;
    description: string;
    priceLabel: string;
    dishes: string[];
    allergens?: string;
  };
};

export const menus: MenuItem[] = [
  {
    id: "tradicional",
    category: "chef-em-casa",
    minPeople: 4,
    image: "/images/menus/tradicional.jpg",
    pt: {
      name: "Menu Tradicional",
      description:
        "Um menu confortável, inspirado na cozinha portuguesa e pensado para partilhar.",
      priceLabel: "Desde XX €/pessoa",
      dishes: [
        "Entrada tradicional",
        "Prato principal de carne ou peixe",
        "Acompanhamentos sazonais",
        "Sobremesa caseira",
      ],
      allergens:
        "Pode conter glúten, leite, ovos ou frutos de casca rija. Confirmar no pedido.",
    },
    en: {
      name: "Traditional Menu",
      description:
        "A comforting menu inspired by Portuguese cuisine and designed to be shared.",
      priceLabel: "From XX €/person",
      dishes: [
        "Traditional starter",
        "Main course with meat or fish",
        "Seasonal side dishes",
        "Homemade dessert",
      ],
      allergens:
        "May contain gluten, milk, eggs or nuts. Please confirm when ordering.",
    },
  },
  {
    id: "mediterranico",
    category: "chef-em-casa",
    minPeople: 4,
    image: "/images/menus/mediterranico.jpg",
    pt: {
      name: "Menu Mediterrânico",
      description:
        "Sabores frescos, leves e aromáticos para uma refeição elegante.",
      priceLabel: "Desde XX €/pessoa",
      dishes: [
        "Entrada fresca",
        "Prato principal de peixe, carne branca ou vegetariano",
        "Acompanhamentos leves",
        "Sobremesa fresca",
      ],
      allergens: "Informação detalhada mediante seleção do menu.",
    },
    en: {
      name: "Mediterranean Menu",
      description:
        "Fresh, light and aromatic flavours for an elegant meal.",
      priceLabel: "From XX €/person",
      dishes: [
        "Fresh starter",
        "Main course with fish, white meat or vegetarian option",
        "Light side dishes",
        "Fresh dessert",
      ],
      allergens: "Detailed allergen information available after menu selection.",
    },
  },
  {
    id: "take-away-familiar",
    category: "take-away",
    image: "/images/menus/take-away.jpg",
    pt: {
      name: "Take Away Familiar",
      description:
        "Pratos preparados por encomenda para refeições práticas em família.",
      priceLabel: "Desde XX €/dose",
      dishes: [
        "Prato principal familiar",
        "Acompanhamento",
        "Sobremesa opcional",
      ],
      allergens: "Confirmar alergias no momento da encomenda.",
    },
    en: {
      name: "Family Takeaway",
      description:
        "Dishes prepared by order for practical family meals.",
      priceLabel: "From XX €/portion",
      dishes: [
        "Family-style main course",
        "Side dish",
        "Optional dessert",
      ],
      allergens: "Please confirm allergies when ordering.",
    },
  },
];