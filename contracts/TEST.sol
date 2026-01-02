// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SPACEL is ERC20, ERC20Burnable, ERC20Permit, Ownable {
    uint256 public constant MAX_SUPPLY = 500_000_000 * 1e18;

    constructor(address multisigOwner)
        ERC20("SPACEL", "SPACEL")
        ERC20Permit("SPACEL")
        Ownable(multisigOwner)
    {
        _mint(multisigOwner, MAX_SUPPLY);
    }
}

