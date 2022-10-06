//const Migrations = artifacts.require("Migrations");
const MintReadme = artifacts.require("MintReadmeToken");
const SaleReadme = artifacts.require("SaleReadmeToken");
const GetReadme = artifacts.require("GetReadmeToken");
const Draw = artifacts.require("DrawToken");
const Ssafy = artifacts.require("SsafyToken");

module.exports = async function (deployer) {
  await deployer.deploy(MintReadme);
  await deployer.deploy(SaleReadme, MintReadme.address);
  await deployer.deploy(GetReadme, MintReadme.address, SaleReadme.address);
  await deployer.deploy(Ssafy, "SSF", "SSAFY");
  await deployer.deploy(
    Draw,
    "0x0c54E456CE9E4501D2c43C38796ce3F06846C966",
    MintReadme.address,
    SaleReadme.address
  );
};
