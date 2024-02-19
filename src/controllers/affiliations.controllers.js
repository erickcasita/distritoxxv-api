import Affiliations from  "../models/affiliations.model";

export const getData = async (req, res)  => {
    try {
      const query = await Affiliations.find();

      if (query) {
        return query
          ? res.status(200).json({ response: "success", data: query })
          : res.status(404).json({ responseError: "not found" });
      }
    } catch (error) {
      res.status(500).json({ responseError: error });
    }
}

export const createAffiliations = async (req,res)=>{
    try{
        const {
            name,
            last_name,
            rol,
            entity,
            town,
            postcode,
            secction_vote,
            phone_number,
            address_home,
        } = req.body;

        const newAffiliations   = new Affiliations({
            name: name,
            last_name: last_name,
            rol: rol,
            entity: entity,
            town: town,
            postcode: postcode,
            secction_vote: secction_vote,
            phone_number: phone_number,
            address_home : address_home 
        });
        const saveData = await newAffiliations.save();
        return saveData
        ? res
            .status(200)
            .json({ response: "Afiliacion creada correctamente", details: saveData })
        : res.status(500).json({ response: "error" });
    } catch (error) {
            res.status(500).json({ responseError: error });
      }
}

export const getAffilationsById = async (req,res)=>{
  try{
    const {id} = req.params;
    const query = await Affiliations.findById(id);
    if (!query){
        return res.status(404).json({ response: "not found" });
    } 
    return res.json({ response: "Affiliations find", details: query });
  } catch (error) {
    res.status(500).json({ response: error });
  }
}