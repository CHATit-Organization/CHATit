const CHT = artifacts.require("CHT");
const CHATIT = artifacts.require("CHATIT");

const CHTNAME = "CHATIT TOKEN";
const CHTSYMBOL = "CHT";
const MAXSPAMCOUNT = 3;
const MAXCHANNEL = 10;
const LOCKTIME = 10800;
const REPORTFEE = 100000000000000000n;
const ORACLEFEE = 100000000000000000n;
const JACKPOTPAYOUT = 800000000000000000n;
const NORMALPAYOUT = 200000000000000000n;
const UNLOCKFEE = 1000000000000000000n;

module.exports = async function (deployer) {
  await deployer.deploy(CHT, CHTNAME, CHTSYMBOL).then(async (res) => {
    await deployer.deploy(
      CHATIT,
      MAXSPAMCOUNT,
      MAXCHANNEL,
      LOCKTIME,
      REPORTFEE,
      ORACLEFEE,
      JACKPOTPAYOUT,
      NORMALPAYOUT,
      UNLOCKFEE,
      res.address
    );
  });
};
