import IHeight from "./IHeight";
import IImage from "./IImage";
import IWeight from "./IWeight";

export default interface IDog {
  id: string;
  name: string;
  alt_names: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  country_code: string;
  wikipedia_url: string;
  weight: IWeight;
  height: IHeight;
  image: IImage;
}
