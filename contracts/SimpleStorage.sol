// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";


/**
  @title SimpleStorage
  @dev a contract to store and retrieve a string
 */
contract SimpleStorage {

	string private data;

	/**
	 * @dev set data to "initial" onDeploy
	 */
	constructor() {
		data = "initial";
		console.log("- setting data to '%s'", data);
	}

	/**
	 * @dev overwrite the value of 'data'
	 * @param value new value 'data' would be assigned to
	 */
	function store(string memory value) external {
		console.log("- overwriting data from '%s' to '%s'", data, value);
		data = value;
	}

	
	/**
	 * @dev get the value stored in the 'data' storage variable
	 * @return string
	 */
	function getData() external view returns(string memory) {
		console.log("- returning data => '%s'", data);
		return data;
	}

}