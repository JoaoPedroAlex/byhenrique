export type MenuItem = {
  id: string;
  name: string;
  category: "chef-em-casa" | "take-away" | "evento";
  description: string;
  priceLabel: string;
  minPeople?: number;
  dishes: string[];
  allergens?: string;
  image?: string;
};

export const menus: MenuItem[] = [
  {
    id: "tradicional",
    name: "Menu Tradicional",
    category: "chef-em-casa",
    description:
      "Um menu confortável, inspirado na cozinha portuguesa e pensado para partilhar.",
    priceLabel: "Desde XX €/pessoa",
    minPeople: 4,
    dishes: [
      "Entrada tradicional",
      "Prato principal de carne ou peixe",
      "Acompanhamentos sazonais",
      "Sobremesa caseira",
    ],
    allergens:
      "Pode conter glúten, leite, ovos ou frutos de casca rija. Confirmar no pedido.",
  },
  {
    id: "mediterranico",
    name: "Menu Mediterrânico",
    category: "chef-em-casa",
    description:
      "Sabores frescos, leves e aromáticos para uma refeição elegante.",
    priceLabel: "Desde XX €/pessoa",
    minPeople: 4,
    dishes: [
      "Entrada fresca",
      "Prato principal de peixe, carne branca ou vegetariano",
      "Acompanhamentos leves",
      "Sobremesa fresca",
    ],
    allergens: "Informação detalhada mediante seleção do menu.",
  },
  {
    id: "take-away-familiar",
    name: "Take Away Familiar",
    category: "take-away",
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
];