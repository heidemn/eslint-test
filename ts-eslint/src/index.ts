import * as fs from 'fs';

async function main() {
  // fs.promises.readFile('/etc/passwd'); // error
  await fs.promises.readFile('/etc/passwd');
}

void (async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
})();
