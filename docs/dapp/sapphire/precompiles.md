---
description: Additional Sapphire precompiles for encryption and confidentiality
---

# Precompiles

In addition to the standard EVM precompiles, Sapphire provides three
further cryptography-related ones to make some operations easier and
cheaper to perform: x25519 key derivation, and Deoxys-II-based encryption
and decryption.

These can be called in the same way as other precompiles by dispatching
calls to specific well-known contract addresses, as described below.
Input parameters should be packed into a contiguous memory region, with
each chunk of data padded to 32 bytes as usual.

## X25519 Key Derivation

### Overview

* Precompile address: `0x0100000000000000000000000000000000000002`
* Input format: `bytes32 public_key || bytes32 private_key`
* Gas cost: 100,000

### Example

```solidity
function deriveSymmetricKey(bytes32 keyPublic, bytes32 keyPrivate) private view returns (bytes32) {
    bytes32[3] memory data;
    data[0] = keyPublic;
    data[1] = keyPrivate;
    assembly {
        let success := staticcall(gas(), 0x0100000000000000000000000000000000000002, data, 0x40, add(data, 0x40), 0x20)
        if iszero(success) {
            revert(0, 0)
        }
    }
    return data[2];
}
```

## Deoxys-II Encryption

### Overview

* Encryption precompile address: `0x0100000000000000000000000000000000000003`
* Decryption precompile address: `0x0100000000000000000000000000000000000004`
* Input format: `bytes32 key || bytes32 nonce || uint text_length || uint additional_data_length || text_or_ciphertext || additional_data`
* Gas cost: 50,000 minimum plus 100 per byte of input

:::caution

Both the text and additional data should each be padded to a multiple of
32 bytes.

:::

### Example

```solidity
function encrypt(bytes32 key, bytes32 nonce, bytes memory text, bytes memory additionalData) private view returns (bytes memory result) {
    assembly {
        let p := mload(0x40)
        mstore(p, key)
        mstore(add(p, 0x20), nonce)
        let text_len := mload(text)
        mstore(add(p, 0x40), text_len)
        let ad_len := mload(additionalData)
        mstore(add(p, 0x60), ad_len)
        let i := 0
        for {} lt(i, text_len) { i := add(i, 0x20) } {
            mstore(add(add(p, 0x80), i), mload(add(add(text, 0x20), i)))
        }
        let ad_begin := add(add(p, 0x80), i)
        for { i := 0 } lt(i, ad_len) { i := add(i, 0x20) } {
            mstore(add(ad_begin, i), mload(add(add(additionalData, 0x20), i)))
        }
        mstore(0x40, add(ad_begin, i))
        let out := mload(0x40)
        let success := staticcall(gas(), 0x0100000000000000000000000000000000000003, p, sub(out, p), out, 1)
        if iszero(success) {
            revert(0, 0)
        }
        mstore(out, returndatasize())
        returndatacopy(add(out, 0x20), 0, returndatasize())
        mstore(0x40, add(add(out, 0x20), returndatasize()))
        result := out
    }
}
```

## Public/Private Key Pair Generation

### Overview

* Precompile address: `0x0100000000000000000000000000000000000005`
* Input format: `uint method || uint seed_length || seed`
* Return value format: `uint public_key_length || uint private_key_length || public_key || private_key`
* Gas cost: method-dependent base cost, see below

:::caution

The seed should be padded to a multiple of 32 bytes.

:::

Available methods:
* `0` - ed25519 (gas cost 35,000),
* `1` - secp256k1 (gas cost 110,000)
* `2` - sr25519 (gas cost 35,000)

### Example

Using the Sapphire library:

```solidity
bytes memory seed = hex"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
bytes memory publicKey;
bytes memory privateKey;
(publicKey, privateKey) = Sapphire.generateKeyPair(0, seed);
```

## Message Signing

### Overview

* Precompile address: `0x0100000000000000000000000000000000000006`
* Input format: `uint method || uint private_key_length || uint context_length || uint message_length`
  `|| private_key || context || message`
* Gas cost: see below for the method-dependent base cost, plus 8 per byte of context and message.

:::caution

Each of the byte string parameters should be padded to a multiple of 32 bytes.

:::

Available methods:
* `0` - ed25519 (gas cost 75,000),
* `1` - secp256k1 (gas cost 150,000)
* `2` - sr25519 (gas cost 50,000)

### Example

Using the Sapphire library:

```solidity
bytes memory publicKey = ...;
bytes memory privateKey = ...;
bytes memory signature = Sapphire.signMessageWithContext(0, privateKey, "message context", "message to sign");
```

## Signature Verification

### Overview

* Precompile address: `0x0100000000000000000000000000000000000007`
* Input format: `uint method || uint public_key_length || uint signature_length || uint context_length || uint message_length`
  `|| public_key || signature || context || message`
* Gas cost: see below for the method-dependent base cost, plus 8 per byte of context and message.

:::caution

Each of the byte string parameters should be padded to a multiple of 32 bytes.

:::

Available methods:
* `0` - ed25519 (gas cost 110,000),
* `1` - secp256k1 (gas cost 210,000)
* `2` - sr25519 (gas cost 110,000)

### Example

Using the Sapphire library:

```solidity
bytes memory publicKey = ...;
bytes memory privateKey = ...;
bytes memory signature = ...;
bool result = Sapphire.verifySignatureWithContext(0, publicKey, signature, "message context", "message to check");
```

## Library

The examples above show how to call the precompiles directly. For a more
comfortable experience, wrappers are also provided in `contracts/`
project in the
[Sapphire repository](https://github.com/oasisprotocol/sapphire-paratime),
library file `contracts/Sapphire.sol`. The wrappers have the same
signatures as the example wrappers above.

```solidity
pragma solidity ^0.8.13;

import "./Sapphire.sol";

contract Test {
    constructor() {}
    function test() public view returns (bytes32) {
        return Sapphire.deriveSymmetricKey("public key as bytes32", "private key as bytes32");
    }
}
```
