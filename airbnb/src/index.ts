import * as fs from 'fs';

async function main() {
  // error
  // fs.promises.readFile('/etc/passwd');
  await fs.promises.readFile('/etc/passwd');
}

void (async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
})();
