import React, { useState } from "react";
import { generateMnemonic } from "bip39";

const SeedPhrase = () => {
  const [mnemonic, SetMnemonic] = useState("");
  return (
    <div>
      <button
        onClick={async function creteSeed() {
          const mn = await generateMnemonic;

          SetMnemonic(mn);
        }}
      >
        Create Seed Phrase
      </button>
      <input type="text" value={mnemonic}></input>
    </div>
  );
};

export default SeedPhrase;
