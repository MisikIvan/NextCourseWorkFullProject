import { MdStorefront} from "react-icons/md";
import { FaWineGlass, FaWineBottle, FaGlassWhiskey } from "react-icons/fa";
import { GiSodaCan, GiBrandyBottle } from "react-icons/gi";
import { LiaWineBottleSolid } from "react-icons/lia";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "No Alcohol",
    icon: GiSodaCan,
  },
  {
    label: "Wine",
    icon: FaWineBottle,
  },
  {
    label: "Cognacs",
    icon: GiBrandyBottle,
  },
  {
    label: "Whiskey",
    icon: FaGlassWhiskey,
  },
  {
    label: "Liqueurs",
    icon: LiaWineBottleSolid,
  },
  {
    label: "Accesories",
    icon: FaWineGlass,
  },
];
