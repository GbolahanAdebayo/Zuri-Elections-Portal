const { expect } = require("chai");
const { ethers } = require("hardhat");
const Web3Utils = require('web3-utils');

const {
    BN, //Big number support
    constants,
    expectEvent, //Assertions for emitted events
    expectRevert,
} = require("@openzeppelin/test-helpers");
const { artifacts, web3, contract } = require("hardhat");
// const { current } = require("@openzeppelin/test-helpers/src/balance");

//Import test utilities
const testUtils = require("./test-utils.js");
console.log(testUtils);


//import smart contract
const ZuriVote = artifacts.require("ZuriVote");

// start test block

contract("ZuriVote", function (accounts) {
    let chairman, bod, teachers, students;
    const name = "2022 Zuri Student Council Election";
    const description = "Election of Zuri Student Council Excutives";

    const Candidates = [
        "Osinbajo",
        "Obi",
        "Okorocha",
        "Saraki",
        "Tinubu"
    ];

    const msgHash = testUtils.createSignatureVote(2);
    console.log(msgHash);

    before(async function () {
        this.zurivote = await ZuriVote.startElection({ from: Owner });
        currentBlock = await web3.eth.getBlock("latest");
    });


    it("should make sure election commences", async function () {
        expect(await this.zurivote.owner()).to.be.equal(Owner);
        console.log(currentBlock.timestamp);
        expect(await this.zurivote.startElection()).not.to.be.equal(new BN(currentBlock.timestamp));
    })
})