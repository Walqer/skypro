import tatran from "../assets/images/tatran.jpg";
import vilora from "../assets/images/vilora.jpg";
import nastan from "../assets/images/nastan.jpg";
import menu from "../assets/images/menu.jpg";
import lunar from "../assets/images/lunar.jpg";
import askesta from "../assets/images/askesta.jpg";

export interface CatalogItem {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}
const catalogData: CatalogItem[] = [
  {
    id: 1,
    img: tatran,
    title: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
  },
  {
    id: 2,
    img: vilora,
    title: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    price: 21000,
  },
  {
    id: 3,
    img: menu,
    title: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
  },
  {
    id: 4,
    img: askesta,
    title: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
  },
  {
    id: 5,
    img: lunar,
    title: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
  },
  {
    id: 6,
    img: nastan,
    title: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
  },
];
export default catalogData;
