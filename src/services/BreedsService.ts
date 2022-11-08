import http from "../utils/http-client";
import IBreed from "../models/IBreed";

const getAll = async () => {
  return await http.get<Array<IBreed>>("/breeds");
};

const BreedsService = {
  getAll,
};

export default BreedsService;
