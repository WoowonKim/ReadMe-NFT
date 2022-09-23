//const Migrations = artifacts.require("Migrations");
const MintReadme = artifacts.require("MintReadmeToken");
const SaleReadme = artifacts.require("SaleReadmeToken");
const GetReadme = artifacts.require("GetReadmeToken");
const BidReadme = artifacts.require("BidReadmeToken");

module.exports = async function (deployer) {
  let MintReadmeToken = await deployer.deploy(MintReadme);
  let SaleReadmeToken = await deployer.deploy(SaleReadme, MintReadme.address);
  let BidReadmeToken = await deployer.deploy(
    BidReadme,
    MintReadme.address,
    SaleReadme.address
  );
  let GetReadmeToken = await deployer.deploy(
    GetReadme,
    MintReadme.address,
    SaleReadme.address,
    BidReadme.address
  );
};
