import solc from 'https://esm.sh/solc@0.8.30';

self.onmessage = (ev) => {
    try {
        const source = ev.data?.source || '';
        const input = {
            language: 'Solidity',
            sources: { 'DeployBot.sol': { content: source } },
            settings: {
                optimizer: { enabled: true, runs: 200 },
                outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } }
            }
        };

        const output = JSON.parse(solc.compile(JSON.stringify(input)));
        self.postMessage({ ok: true, output });
    } catch (err) {
        self.postMessage({ ok: false, error: err?.message || String(err) });
    }
};
