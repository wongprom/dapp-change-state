// SPDX-License-Identifier: MIT
pragma solidity >=0.4.26 <0.9.0;

contract ChangeStateInput {
    // Variable
    uint256 stateInput;

    // Setter function to change variable on chain
    function set(uint256 v) public {
        stateInput = v;
    }
    
    // Getter to get variable from chain
    function get() public view returns (uint256){
        return stateInput;
    }

}